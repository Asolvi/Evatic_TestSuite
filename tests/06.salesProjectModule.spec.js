import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { SalesProjectPage } from '../pages/salesProject'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage (page)
    await Login.gotoLoginPage()
    await Login.login()    
  });

test('TC_001_Evatic_Regression_SalesProjectModule', async ({ page }) => {

    const SalesProject = new SalesProjectPage(page)

    const rand = randomNo()

    const CustomerNo =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','CustomerNo')
    const CalculationType =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','CalculationType')
    const SalesMan =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','SalesMan')
    
    
    //console.log("************Running the SalesProjectModuleTestCases*************");
    await SalesProject.salesProjectCreation(CustomerNo)
    const salesProjectId = await SalesProject.salesProjectId;
    //const salesProjectId = 10;
    console.log('The new salesProjectId432432 created is ' + salesProjectId);
    await SalesProject.salesProjectSearch(salesProjectId)
    await SalesProject.salesProjectDelete()   
    await SalesProject.salesProjectReSearch(salesProjectId)         
});