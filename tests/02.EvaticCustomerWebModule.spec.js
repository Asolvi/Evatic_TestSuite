import { test, expect } from '@playwright/test';
import { CustWebLoginPage } from '../pages/custWebLogin'
import { CustWebTasksPage } from '../pages/custWebTasksCreate'
import { CustWebOrderPage } from '../pages/custWebOrderCreate'
import { CustWebMachinePage } from '../pages/custWebMachineCreate'
import { CustWebContactsPage } from '../pages/custWebContactsCreate'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

test.beforeEach(async ({ page }) => {
    const CustWebLogin = new CustWebLoginPage (page)
    await CustWebLogin.gotoLoginPage()
    await CustWebLogin.login()    
  });

test('TC_007_Evatic_Regression_CustWebModule', async ({ page }) => {

  test.setTimeout(180000);

    const CustWebTasks = new CustWebTasksPage(page)
    const CustWebOrders = new CustWebOrderPage(page)
    const CustWebMachines = new CustWebMachinePage(page)
    const CustWebContacts = new CustWebContactsPage(page)

    const rand = randomNo()

    const MachineNo =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','MachineNo')
    const VisitName =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','VisitName')
    const Address1 =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','Address1')
    const PostCode =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','PostCode')
    const Contact =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','Contact')
    const FirstName =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','FirstName')
    const LastName =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','LastName')
    const Phone =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','Phone')
    const Email =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','Email')
    const SymCode =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','SymCode')
    const SerSymCode =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','SerSymCode')
    const Title =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','Title')
    const RefNo =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','RefNo')
    const Desc =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_001','Desc')
    
    //const MachineNo =  testData('CustWeb','TC_007_Evatic_Regression_CustWebModule_002','MachineNo')
    const Count =  testData('CustWeb','TC_007_Evatic_Regression_CustOrderModule_002','Count')
    const CustomerNo =  testData('CustWeb','TC_007_Evatic_Regression_CustOrderModule_002','CustomerNo')
    const InvoiceAddress =  testData('CustWeb','TC_007_Evatic_Regression_CustOrderModule_002','InvoiceAddress')

    const Mach =  testData('CustWeb','TC_007_Evatic_Regression_CustMachineModule_003','Mach')
    const Dept =  testData('CustWeb','TC_007_Evatic_Regression_CustMachineModule_003','Dept')
    const Model =  testData('CustWeb','TC_007_Evatic_Regression_CustMachineModule_003','Model')
    const MacAddress =  testData('CustWeb','TC_007_Evatic_Regression_CustMachineModule_003','MacAddress')
    const Brand =  testData('CustWeb','TC_007_Evatic_Regression_CustMachineModule_003','MacBrand')
    
    const ConJobTitle =  testData('CustWeb','TC_007_Evatic_Regression_CustContactsModule_004','ConJobTitle')
    const ConTitle =  testData('CustWeb','TC_007_Evatic_Regression_CustContactsModule_004','ConTitle')
    const ConFaxNum =  testData('CustWeb','TC_007_Evatic_Regression_CustContactsModule_004','ConFaxNum')
    
    console.log("************Running the ECWTestCases*************");

    console.log("*************Running the ECW HelpDesk Creation Tasks***********************")
    await CustWebTasks.tasksCreation('HelpDesk',MachineNo,VisitName,Address1,PostCode,Contact,FirstName,LastName,Phone,Email,SymCode,Title,RefNo,Desc)
                  const helpDeskNumber = await CustWebTasks.helpDeskNo;
                  console.log('The new helpdesk number created is ' + helpDeskNumber);

    console.log("*************Running the ECW HelpDesk Tasks Logs check***********************")
    await CustWebTasks.helpDeskLogsCheck(helpDeskNumber,'Helpdesk',MachineNo,VisitName,SymCode,Title,RefNo,Desc)

    console.log("*************Running the ECW Service Creation Tasks***********************")
    await CustWebTasks.tasksCreation('Service',MachineNo,VisitName,Address1,PostCode,Contact,FirstName,LastName,Phone,Email,SerSymCode,Title,RefNo,Desc)
                  const serviceDeskNumber = await CustWebTasks.helpDeskNo;
                  console.log('The new helpdesk number created is ' + serviceDeskNumber);
    
    console.log("*************Running the ECW Service Tasks Logs************************")
    await CustWebTasks.helpDeskLogsCheck(serviceDeskNumber,'Service',MachineNo,VisitName,SerSymCode,Title,RefNo,Desc)

    console.log("*************Running the ECW WebOrders creation************************")
    await CustWebOrders.ordersCreation(MachineNo,Count,VisitName)
                  const orderNumber = await CustWebOrders.orderNo;
                  console.log('The new orderNo created is ' + orderNumber);

    console.log("*************Running the ECW WebOrders Logs************************")
    await CustWebOrders.logsCheck(orderNumber,CustomerNo,Contact,InvoiceAddress,FirstName,LastName,VisitName,Address1,Count)

    console.log("*************Running the ECW Machines creation************************")
    await CustWebMachines.machineCreation(Mach+rand,Dept,Model,MacAddress,FirstName,Brand)
                  const machineNumber = await CustWebMachines.machineNummer;
                  console.log('The new helpdesk number created is ' + machineNumber);
    
    console.log("*************Running the ECW Machines Logs************************")
    await CustWebMachines.machineLogsCheck(machineNumber,Model,Dept,CustomerNo,VisitName,MacAddress)

    console.log("*************Running the ECW WebContacts Creation Logs************************")
    await CustWebContacts.contactsCreation(FirstName+rand,LastName+rand,Email+rand,Phone,ConJobTitle,ConTitle)
                  const contactName = await CustWebContacts.contactNavn;
                  console.log('The new contact name created is ' + contactName);

    console.log("*************Running the ECW WebContacts Logs************************")
    await CustWebContacts.contactsLogsCheck(FirstName+rand,LastName+rand,contactName,Email+rand,Phone)
    
    console.log("*************Running the ECW WebContacts Deletion Logs************************")
    await CustWebContacts.contactsDeletion(FirstName+rand,LastName+rand,contactName,Email+rand,Phone)     
    
    

           
});