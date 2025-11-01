CICS Support team specific learning for ${onboardee}


### Slack channels to join:

- [ ] [#cics-service](https://ibm.enterprise.slack.com/archives/C0Y3R1CNL)
- [ ] #cics-emea-csp-notifications contains information about newly arrived CSP cases on the EMEA views. (private? Your buddy can add you)
- [ ] [#cics-support-ap-emea](https://ibm.enterprise.slack.com/archives/C43R016GP)

---

### Meetings you need to be added to (ask your team lead):

- [ ] Team meeting (weekly)
- [ ] [TP Skills Exchange Sessions for Education](https://ec.yourlearning.ibm.com/w3/series/10163907?layout=grid)
- [ ] Get your email added to cics_support_ww distribution list

---

### Share your vacation plans:

- [ ] When you've booked time off in [SuccessFactors](https://sf-wz-prd-p2-4snxii8t.workzonehr.cfapps.us10.hana.ondemand.com/), please add it to the [CICS EMEA AP calendar](https://csptools.cloud.ibm.com/star/team_calendarv2.jsp?name=CICS%20EMEA%20AP&orgid=6881).

---

### Team-specific setup and access:

- [ ] **CICS Support wiki** contact Shayla Robinson

- [ ] IMS Support - ID Requests and Access (doc from Bhups)

- [ ] Hursley MVS systems access to SDSF: TSO (MVS20TSO) - [Create OneTicket](https://oneticket.devit.ibm.com/tickets) and 
- Specify that this is WINMVS20 service MVS20TSO and what ID you'd like. 
- Click New Ticket- Select "System Support" - "Select zOS zVM zVSE zLinux" - Subject will be "give access to existing userid" - Problem description "CICS new starter" - Select a site "hur". 
- Also request in the ticket - Connect userid to group "CICSL2UK" and "SERVICE" to give access to SDSF and hlq data sets for TSO userids.

- [ ] Access to Sales Force (Cognitive Support Platform, aka CSP) - follow instructions [here](https://merlin-playbook.us1a.cirrus.ibm.com/#/documents/912d229cdcf150910d194e000c9e29a5). Use mission "CICS", environment "Production" and role "Agent".
- [ ] Retain - in [System and Tools](https://w3.ibm.com/w3publisher/cics-level-2-support-wiki/systems-processes/systems-tools) under section **APARs (Known Issues), RETAIN** - Request a RETAIN userid via [WebRetain](https://w3-03.ibm.com/services/gbs/webretain/logon.jsp)

- [ ] VPLOCO - To request a VPLOCO signon (in EMEA) we ask Felicity Merrison. Then [here](https://ibm.box.com/s/dfsawsm5qxmquu0qoot7h0xmqd00ydzn) are some short hints to get PCOM session going and how to DIAL in to VPLOCO (we don't sign in).

- [ ] ECuRep servers (MCEVS1) - Use [Automated Security Operator (ASO)](https://asoweb.cpc.ibm.com/) MCEVS1 - customer data stored here MCEVS4/6 - test systems (sunset ?) MCEVS5 - test systems (sunset ?) MCEVMD - customer data stored here

- [ ] Archive Explorer - [Start here](https://ecurep.mainz.de.ibm.com/ae5/). Enter the whole case number, including the "TS" into the entry field eg TS012345678This will let you take a look at documentation for a case from Archive Explorer, or gain authorisation to work with case documentation on MCEVS1.

- [ ] IBM Explorer for z/OS - [Permanent license for IDZ](https://zidebldsvr1.fyre.ibm.com/ccb/Offerings/)

- [ ] Request access to `CICS Support` in [ISIM](https://hurisim.hursley.ibm.com/itim/ui/Login.jsp) - ${buddy} can help you.


----

### Learning projects

- [ ] Set up 3270 Terminal Emulator (PCOM and HOD)
**Windows OS:** - [PCOMM (Session Manager)](https://www.ibm.com/support/knowledgecenter/en/SSEQ5Y_13.0.0/com.ibm.pcomm.doc/books/html/install_guide06.htm) can be downloaded from the PC@IBM APP store
**Mac OS:** - [HOD (Host On Demand)](https://w3.ibm.com/#/apps/hod) can be downloaded from the Mac@IBM App Store

- [ ] [IBM Corporate education](https://bundles.yourlearning.ibm.com/ibm/ibmfun/#YZKMZJYMKNDN2PZR/ZKMNMDRPDPNX2Y3P) (complete in the first 30 days of employment)
There will be other mandatory education too, like the business conduct guidelines

- [ ] Find your way around CSP.
 - Update your profile on CSP. See [box note](https://ibm.ent.box.com/file/735771056692?s=s2pwm5ropgbbons1e5tbqnuzsp6310qi) for instructions.
 - Read through the [CSP Playbook](https://merlin-playbook.us1a.cirrus.ibm.com/)
 - Complete the [CSP Training](https://merlin-playbook.us1a.cirrus.ibm.com/#/documents/3e5942517d2883a883f95a23b13d8bae)
 - Add the [L2 Team Dashboard to your CSP](https://ibm.ent.box.com/file/1224002196785?s=88wjabqa3gahpfg9qkuxeb48jj360rou)

- [ ] Get added to CICS mission and working views
 - Ask Karen for support
 - Request access to the Shared CSP Case Prioritization views -> ask Shayla. These are:
  - CICS Support Team view  (this is the US/LA one)
  - CICS Support Team view - EMEACICS L2 Team view - AP
 - Request access to other work views - ask Karen. These are:
  - CICS Support Q Manager
  - My work overview
  - CICS Change Team Queues

- [ ] Install the QUACCER toolbar
 - Read the introduction on the [Quaccer Toolbar](https://w3.ibm.com/w3publisher/quaccer/)
 - To install or refresh Quaccer configuration use [this page](http://ausgsa.ibm.com/projects/s/sonar/apps/ui/common/apps/quaccer/latest/html/setupPageWebPage.html)
 - Then click the 'Advanced' button. Accept risk! Then click the link: [Proceed to zweb.aus.stglabs.ibm.com (unsafe)](http://zweb.aus.stglabs.ibm.com)
 - Sign in with your intranet id. It whirrs a short while (black dots appear..) and the configuration is refreshed.
 - Now on the top right of your (chrome) CSP page, the Extensions puzzle piece should have the Quaccer extension. eg look under Manage Extensions to see it. Any problem or if you'd like a run-through of what's useful on the toolbar, ask Karen.

- [ ] Hands on: Working a test case together with Karen.
 - Walkthrough of example life of a case.
 - Client's view. Open case.
 - Our view. Update case.
 - Client's view. Update case. Close request.
 - Our view. Admin as we close.

- [ ] Create your own [weekly session time report](https://ibm.ent.box.com/file/1224041503785)

- [ ] Create an APAR

- Follow [these instructions](https://ibm.box.com/s/03cx7xj1q1m8k7kkkizh63mit6xi8c77)
- [Create an APAR](https://kirk-front.csptools.cloud.ibm.com/)

- [ ] Get familiar with SCP

Service Client Program (SCP) is used to view CICS source code and other Hursley tools such as Unit History Log (UHL) and TRAP.
- Information about how to install SCP can be found [here](https://cicswiki.hursley.ibm.com:9443/wiki/Cruise)
- [Set up instructions](https://ibm.ent.box.com/file/791416498354?s=dllv1i1eow47y20yf0o2vw7dz5sl941j)
- Ask Karen if you have issues!


----

### Further useful links to learn about specific areas of CICS:

- [ ] [General CICS education](https://cicswiki.hursley.ibm.com:9443/wiki/Learning_Paths)
__________________
 
### Giveback:
- [ ] Based on your onboarding experience, make any improvements or updates to the [onboarding template](https://github.ibm.com/etsi/etsi-onboarding/blob/main/tasks/Onboarding/teams/TS_SUP.md).


_Generated from CICS and Z Integration onboarding template._
