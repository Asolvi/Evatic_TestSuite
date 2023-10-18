import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { MachinePage } from '../pages/machine'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage (page)
    await Login.gotoLoginPage()
    await Login.login()    
  });

test('TC_001_Evatic_Regression_MachineModule', async ({ page }) => {

    const Machine = new MachinePage(page)

    const rand = randomNo()

    const MachineNo =  testData('Machine','TC_001_Evatic_Regression_MachineModule','MachineNo')
    const ModelNo =  testData('Machine','TC_001_Evatic_Regression_MachineModule','ModelNo')
    const CustomerNo =  testData('Machine','TC_001_Evatic_Regression_MachineModule','CustomerNo')
    
    //console.log("************Running the MachineModuleTestCases*************");
    await Machine.machineCreation(MachineNo+rand,ModelNo,CustomerNo)
    console.log('The new machineId created is ' + await Machine.machineNumber);
    const machineNumber = await Machine.machineNumber;
    await Machine.machineSearch(machineNumber)
    await Machine.machineDelete()   
    await Machine.machineReSearch(machineNumber)

});