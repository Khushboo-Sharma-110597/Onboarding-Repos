
// Global Javascript functions
import { readdirSync } from 'fs';
import { parse } from 'path';
// Required dependencies
import { question } from 'readline-sync';
// Use other modules from this project
import { getRepository } from '../../modules/repo.js';
import { addIssueToZenhubEpic, convertIssueToEpic } from '../../modules/zenhub.js';
import { createIssueFromTemplate } from '../../modules/template.js';

/**
 * An array of labels to apply to the parent epic.
 */
const EPIC_ISSUE_LABELS = [ 'Onboarding' ];

/**
 * An array of labels to apply to each child issue.
 */
const CHILD_ISSUE_LABELS = [ 'Onboarding' ];


// Arguments supplied to this module from the parent runtime
let taskArgs;

/*
 * ============================================================================================
 *           Module function declarations
 * ============================================================================================
 */
/**
 * Main entry point to the module.
 *
 * Provides some parsing of the optional arguments and then calls the createEpicTree function
 * that will perform the bulk of the issue creation.
 *
 * @param {*} args Arguments supplied to this task from the builder infrastructure.
 */
function main(args) {
    // Pick up the configuration from the parent runtime
    taskArgs = args;
    // Dump out the supplied arguments
    if ( taskArgs.debug ) {
        console.log(`Arguments supplied to the ${taskArgs.taskName} task:`, taskArgs);
    }
    // Has extended help info been requested?
    if ( taskArgs.showHelp ) {
        displayLongHelp();
        process.exit(0);
    }
    // Should be supplied with either zero or two args
    if ( taskArgs.argv.length !== 0 && taskArgs.argv.length !== 2 ) {
        displayShortHelp();
        process.exit(0);
    }
    // Repo owner and name - default to environment
    let repoOwner = process.env.REPO_OWNER;
    let repoName = process.env.REPO_NAME;
    // Allow user to override if needed
    if ( taskArgs.argv.length === 2 ) {
        repoOwner = taskArgs.argv[0];
        repoName = taskArgs.argv[1];
    }
    // Create the epic tree in GitHub
    createEpicTree(repoOwner, repoName);
}
/**
 * Displays brief help information about this task.
 */
function displayShortHelp() {
    console.log(
        'Usage: Create an epic tree in GitHub\n\n' +
        'Usage: Create a set of issues for onboarding a new CICS team member\n\n' +
        `   npm start ${taskArgs.taskName} [ <repo_owner> <repo_name> ]\n\n`  +
        'For full help:\n\n' +
        `   npm start -- ${taskArgs.taskName} -h`
    );
}
/**
 * Displays extended help information about this task.
 */
function displayLongHelp() {
    console.log(
        'Usage: Create an epic tree in GitHub\n\n' +
        'Usage: Create a set of issues for onboarding a new CICS team member\n\n' +
        `   npm start ${taskArgs.taskName} [ <repo_owner> <repo_name> ]\n\n`  +
        'Uses the template files in the task directory to create an epic in GHE with ' +
        ' multiple issues as children of the epic.\n'
    );
}
/**
 * Main function to create all the tasks in GitHub.
 *
 * @param {*} repoOwner Owner / organisation of the repository in which to create
 * the new issues.
 * @param {*} repoName Name of the repository in which to create the new issues.
 */
async function createEpicTree(repoOwner, repoName) {
    // Useful variable to hold return value from functions
    let retVal;
    // Response from the user
    let resp;
    // The variables read from the user to substitute in the templates
    let vars = { };
    // Log progress
    console.log(`Creating issues in repository ${repoOwner}/${repoName} ...`);
    /* ----------------------------------------------------------------------- */
    console.log('Finding template files ...');
    // List all files in the template directory and filter to only include *.md files
    const childDir = taskArgs.taskDir + '/child';
    const teamsDir = taskArgs.taskDir + '/teams';
    const teamsDir = taskArgs.taskDir + '/product';
    const allFiles = readdirSync(childDir);
    const mdFiles = allFiles.filter( (fn) => { return fn.endsWith('.md') && ! fn.endsWith('README.md') } ).sort();
    const fileList = mdFiles.map( (fn) => { return `${childDir}/${fn}` } );
    /* ----------------------------------------------------------------------- */
    // Read input from the user
    do {
        // Read the various inputs from the user
        vars = readParameters();
        // Dump out the input
        console.log('Substitution variables:', vars);
        // Read input
        resp = question('Use the above variables for substitution? (y/n) ').trim().toLowerCase();
    }
    while ( resp != 'y' );
    /* ----------------------------------------------------------------------- */
    console.log(`Fetching repository information for ${repoOwner}/${repoName} ...`);
    // Fetch the repository information from GitHub
    retVal = await getRepository(repoOwner, repoName);
    if ( ! retVal.data ) {
        console.log('An error occurred fetching the repository:', retVal.errMsg);
        if ( taskArgs.verbose && retVal.errDetail ) {
            console.log('Additional information:', retVal.errDetail);
        }
        return;
    }
    const repo = retVal.data;
    /* ----------------------------------------------------------------------- */
    console.log('Creating initial issue in GitHub ...');
    // Construct path to the template epic file
    const epicTemplatePath = `${taskArgs.taskDir}/epic.md`;
    // Create the epic as an issue
    retVal = await createIssueFromTemplate(repoOwner, repoName, epicTemplatePath, vars, EPIC_ISSUE_LABELS);
    if ( ! retVal.data ) {
        console.log('An error occurred creating the parent issue:', retVal.errMsg);
        if ( taskArgs.verbose && retVal.errDetail ) {
            console.log('Additional information:', retVal.errDetail);
        }
        return;
    }
    // Grab the parent issue data
    //const parentIssue = retVal.data;
    // Add the parent epic details to the variables map
    //vars.parentEpicNumber = parentIssue.number;
    //vars.parentEpicUrl = parentIssue.html_url;
    /* ----------------------------------------------------------------------- */
    //console.log('Converting parent issue to an epic ...');
    // Convert the parent issue to an epic
    //retVal = await convertIssueToEpic(repo.id, parentIssue);
    //if ( retVal.httpStatus !== 200 ) {
    //    console.log('An error occurred converting the parent issue to an epic:', retVal.errMsg);
    //    if ( taskArgs.verbose && retVal.errDetail ) {
    //        console.log('Additional information:', retVal.errDetail);
    //    }
    //    return;
    //}
    /* ----------------------------------------------------------------------- */
    
    
    // Iterate over child template files, creating them as we go
    for ( let childIdx in fileList ) {
        // Strip the trailing .md
        const fileRoot = parse(fileList[childIdx]);
        console.log(`Creating issue for template ${fileRoot.name} ...`);
        // Add the template name to the set of variables
        vars.gheBuilderTemplate = fileRoot.name;
        // Create the issue in GitHub
        retVal = await createIssueFromTemplate(repoOwner, repoName, fileList[childIdx], vars, CHILD_ISSUE_LABELS);
        if ( ! retVal.data ) {
            console.log('An error occurred creating a child issue:', retVal.errMsg);
            if ( taskArgs.verbose && retVal.errDetail ) {
                console.log('Additional information:', retVal.errDetail);
            }
            return;
        }
        const issue = retVal.data;
        console.log(`Adding issue ${issue.number} ...`);
       
    }
    /* ----------------------------------------------------------------------- */

    // Product specific child issues

    // Iterate over product template files, create one or more as indicated
    if (vars.product === 'TS' || vars.product === 'CE'|| vars.product === 'ZC'|| vars.product === 'TX'|| vars.product === 'TG'|| vars.product === 'RG'|| vars.product === 'RB'|| vars.product === 'OC'|| vars.product === 'KF'|| vars.product === 'GL'|| vars.product === 'TL'|| vars.product === 'AX'|| vars.product === 'EX'|| vars.teams === 'AI'|| vars.teams === 'ZH') {
        console.log('Creating team issue in GitHub ...');
        // Construct path to the template team file
        const teamsTemplatePath = `${taskArgs.taskDir}/teams/${vars.teams}.md`;
        // Create the teams issue
        retVal = await createIssueFromTemplate(repoOwner, repoName, teamsTemplatePath, vars, CHILD_ISSUE_LABELS);
        if ( ! retVal.data ) {
            console.log('An error occurred creating the team issue:', retVal.errMsg);
            if ( taskArgs.verbose && retVal.errDetail ) {
                console.log('Additional information:', retVal.errDetail);
            }
            return;
        }

        const issue = retVal.data;
        console.log(`Adding issue ${issue.number} ...`);
       
    }
    
    /* ----------------------------------------------------------------------- */

    // Team specific child issues

    // Iterate over team template files, create one or more as indicated
    if (vars.teams === 'TS_FND'|| vars.teams === 'TS_ML'|| vars.teams === 'TS_CIP'|| vars.teams === 'CON'|| vars.teams === 'TS_CPSM'|| vars.teams === 'DES'|| vars.teams === 'K8S'|| vars.teams === 'TS_L2'|| vars.teams === 'MNG'|| vars.teams === 'TS_PERF'|| vars.teams === 'PMA'|| vars.teams === 'TS_SEC'|| vars.teams === 'TS_SERV'|| vars.teams === 'ZRE'|| vars.teams === 'CONSULT') {
        console.log('Creating team issue in GitHub ...');
        // Construct path to the template team file
        const teamsTemplatePath = `${taskArgs.taskDir}/teams/${vars.teams}.md`;
        // Create the teams issue
        retVal = await createIssueFromTemplate(repoOwner, repoName, teamsTemplatePath, vars, CHILD_ISSUE_LABELS);
        if ( ! retVal.data ) {
            console.log('An error occurred creating the team issue:', retVal.errMsg);
            if ( taskArgs.verbose && retVal.errDetail ) {
                console.log('Additional information:', retVal.errDetail);
            }
            return;
        }

        const issue = retVal.data;
        console.log(`Adding issue ${issue.number} ...`);
       
    }

        // TODO - apply team label based on response to ${team}
    /* ----------------------------------------------------------------------- */

    // All done
    console.log(`Issues created: ${parentIssue.html_url}`);
}

/**
 * Function to read input from the user, validating this is a positive integer.
 *
 * @param {*} prompt The text to present to the user.
 * @param {*} defaultValue (Optional) The value to return if the user provides no input.
 *
 * @returns A value which is acceptable as a JavaScript Number object.
 */
function readPositiveInteger(prompt, defaultValue) {
    let resp = null;
    do {
        resp = defaultValue ? question(prompt, { defaultInput: defaultValue } ) : question(prompt);
        if ( ! (Number.isInteger(Number(resp)) && Number(resp) > 0) ) {
            console.log('Input must be a positive integer');
            resp = null;
        }
    }
    while ( resp == null );
    return Number(resp);
}
/**
 * Function used to read input from the user, validating this is a valid Date.
 *
 * @param {*} prompt The text to present to the user.
 * @param {*} defaultValue (Optional) The value to return if the user provides no input.
 *
 * @returns A value which is acceptable as a JavaScript Date object.
 */
function readDate(prompt, defaultValue) {
    let date = null;
    do {
        let resp = defaultValue ? question(prompt, { defaultInput: defaultValue } ) : question(prompt);
        date = Date.parse(resp);
        if ( Number.isNaN(date) ) {
            console.log('Please enter a valid date');
            date = null;
        }
        else if ( new Date(date).getFullYear() < 2020 ) {
            console.log('Please enter a valid date');
            date = null;
        }
    }
    while ( date == null );
    return new Date(date);
}
/**
 * Function to read all required input parameters from the user.
 *
 * @returns A map of the parameters and user responses.
 */
function readParameters() {
    // Options used when formatting dates
    const optionsLong = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsShort = { year: '2-digit', month: 'short', day: 'numeric' };
    // The parameters we have read
    let parms = { };
    // Log progress
    console.log('Please enter the required information');
    console.log('');
    // Generic variables for response
    let resp;
    let d, i;
    resp = question('Name of person being onboarded: ');
    parms.onboardee = resp;

    resp = question('GHE ID of buddy: ');
    parms.buddy = resp;

    resp = question('GHE ID of team lead: ');
    parms.teamlead = resp;

    resp = question('GHE ID of manager: ');
    parms.manager = resp;
    
    resp = question('CICS TS = TS \nCICS Explorer - CE \n z/OS Connect = ZC \nCICS TX/TX Series = TX \nCICS TG = TG \nIBM Record Generator = RG \nCICS Resource Builder = RB \nCICS Operator Collection = OC \nKafka = KF \nGalasa = GL \nCICS Tools = TL \nAPPLINX = AX \nENTIREX = EX \nAI = AI \nzDIH = ZH \nCode for product being joined:');
    parms.teams = resp.toUpperCase();

    resp = question('CICS CiP team = TS_CIP \nCICS CPSM team = TS_CPSM \nCICS Foundation team = TS_FND \nCICS Support team = TS_L2 \nCICS Modern Languages team = TS_ML \nCICS Performance team = TS_PERF \nCICS Security team = TS_SEC \nCICS Change team = TS_SERV \nContent team = CON \nConsultant = CONSULT \nDesign team = DES  \nKubernetes team = K8S \nManagement team = MNG \nProduct and project management teams = PMA \nZ Release Engineering team = ZRE \nCode for team being joined:');
    parms.teams = resp.toUpperCase();
    
    return parms;
}
/*
 * ============================================================================================
 *           Module export declaration
 * ============================================================================================
 */
export default main;
