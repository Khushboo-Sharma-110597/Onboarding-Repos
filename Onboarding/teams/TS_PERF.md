Performance team specific learning for ${onboardee}


### Slack channels to join:

- [ ] #cics-perf-team - private, ${buddy} can add you
- [ ] [#cics-performance](https://ibm.enterprise.slack.com/archives/C4NFD2DDZ)
- [ ] [#cics-performance-auto](https://ibm.enterprise.slack.com/archives/CAT38RH6F)
- [ ] [#cics-performance-queries](https://ibm.enterprise.slack.com/archives/C0105DM09PW)

---

### Meetings you need to be added to:

- [ ] Team meeting
- [ ] Watercooler

---

### Share your vacation plans:

- [ ] When you've booked time off in [SuccessFactors](https://sf-wz-prd-p2-4snxii8t.workzonehr.cfapps.us10.hana.ondemand.com/), please invite cicsperformancecalendar@ibm.com to your calendar entry in Outlook.
<details>
<summary>Why do we do this?</summary>
  
Booking in [SuccessFactors](https://sf-wz-prd-p2-4snxii8t.workzonehr.cfapps.us10.hana.ondemand.com/) ensures that the business knows you are off that day to correctly log your vacation days. Inviting the task ID to a calendar entry ensures that the team can see you are away to avoid booking meetings with you in during your vacation.
</details>

---

### Team-specific setup:

- [ ] [Team source code](https://github.ibm.com/cics-performance)
- [ ] Setup GitHub environment, using templates Ian has provided
- [ ] Setup Visual Studio + Zowe
- [ ] Download the [VPA tooling](https://w3.pok.ibm.com/organization/solution/y07a/vpa.htm)
- [ ] [Read](https://cicswiki.hursley.ibm.com:9443/wiki/Performance) the team information in the wiki
- [ ] Request access to `CICS Performance` in [ISIM](https://hurisim.hursley.ibm.com/itim/ui/Login.jsp) - ${buddy} can help you.
- [ ] Setup Eclipse and plugins [here](https://cicswiki.hursley.ibm.com:9443/wiki/CDSE/Installing)
- [ ] Working with your buddy to get your assigned regression tests running - as detailed in the email 

---
### Useful links:

- [ ] [Performance Analysis Dashboard](https://cicsperf.hursley.ibm.com)
- [ ] [CICS wiki - Main Page](https://cicswiki.hursley.ibm.com:9443/wiki/Main_Page)
- [ ] [CICS wiki - performance](https://cicswiki.hursley.ibm.com:9443/wiki/Performance)
- [ ] [CICS TS Box folder](https://ibm.ent.box.com/folder/4864780061?s=1img01hhyo7t36c1gp09rjoyxx0zartf)
- [ ] [CICS Performance Team Box folder](https://ibm.ent.box.com/folder/8608031805?s=ua2n89yw757akd5eznz4q8q34y5qquvv)
- [ ] [CICS Performance Team Archive](https://ibm.ent.box.com/folder/116895423772?s=1ex07tevb1ck5y31kxly4o48y965igzr)

---

### Learning projects - Your 'buddy' will assit with the following

##### Systems

WINMVS2A
WINMVS2B
WINMVS25

##### Regression Workloads

- [ ] Work with your buddy to submit a test into the overnight run.

You will have been assigned a regression workload, your 'buddy' will work with you in order to get this running using your own APPLIDs and port numbers.

In doing this you learn a number of the core skills required from a member of the Performance Team including running CICS regions,  automation and reviewing the test results.

---
##### CICS Educational videos for when you have a spare moment

- [ ] [Performance 101 Series](https://ibm.ent.box.com/folder/44447841731?s=5t96pw5g9jdupaqqbqj7ec6opts7q33i)

These sessions were run by a member of the team before he retired

- [ ] [Mike Brooks education sessions](https://ibm.ent.box.com/folder/173752836560)


##### Possible additional work for a later date

##### Check out the System Operator Function (SOF)

This is the mechanism we use to control the system overnight on a per-test basis. MQM.SOF.SOFPDS contains all the scripts. MQM.SOF.SOFPDS(IBSMF) is a simple example that performs a bunch of MVS MODIFY commands against my CICS address spaces.
MQM.SOF.SOFPDS(IBFCDU1B) is a more complete example that is executed to run one of my (Ian's) overnight tests.

- [ ] Have a play and write your own simple scripts to get used to the system - as long as the script starts with &OS and ends with &EXIT it will be fine. Run the command with the prefix // - for example to run IBSMF at the console I type //IBSMF.
&WTO is the SOF equivalent of the Write To Operator macro and does exactly what you expect.

---

##### Write a COBOL program to do a GETMAIN 

(Actually 5 GETMAIN's of 512 bytes. (Look for the perform keyword, and Exec CICS getmain)

- [ ] Edit in USS 
- [ ] Antz build 
- [ ] Run program in CICS
- [ ] GETMAIN for @@HLQ

---


##### Make a new RMF started task

- [ ] Define proc in USER.PROCLIB
- [ ] Copy RACF profile incl. STDATA from RMFIB.** - CLASS(STARTED)
- [ ] Add proc to overnight automation cleanup

----
---

### Further useful links to learn about specific areas of CICS and zOS:

- [ ] [General CICS education](https://cicswiki.hursley.ibm.com:9443/wiki/Learning_Paths)
- [ ] [Introduction to Mainframe](https://yourlearning.ibm.com/activity/URL-7A47F7C72404)
- [ ] [Introduction to IBM z/OS](https://yourlearning.ibm.com/activity/ITS-DL10999G)

__________________
 
### Giveback:
- [ ] Based on your onboarding experience, make any improvements or updates to the [onboarding template](https://github.ibm.com/etsi/etsi-onboarding/blob/main/tasks/Onboarding/teams/TS_PERF.md).


_Generated from CICS and Z Integration onboarding template._
