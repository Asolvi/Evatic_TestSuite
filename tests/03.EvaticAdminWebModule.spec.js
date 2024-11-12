import { test, expect } from '@playwright/test';
import { AdminWebLoginPage } from '../pages/adminWebLogin'
import { AdmSearchSettingsPage } from '../pages/adminSearchSettings'
import { GeneralRolesPage } from '../pages/adminRoles'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'


test.beforeEach(async ({ page }) => {
    const AdminWebLogin = new AdminWebLoginPage (page)
    await AdminWebLogin.gotoLoginPage()
    await AdminWebLogin.login()    
  });


test('TC_009_Evatic_Regression_AdminWebModule', async ({ page }) => {

    const AdmSearchSettings = new AdmSearchSettingsPage(page)
    const GeneralRoles = new GeneralRolesPage(page)
    
    const rand = randomNo()

    const RoleName =  testData('AdminWeb','TC_008_Evatic_Regression_AdminWebNewRoles_002','RoleName')
    const RoleDesc =  testData('AdminWeb','TC_008_Evatic_Regression_AdminWebNewRoles_002','RoleDesc')  
    
    
    console.log("************Running the EvaticAdminModule Testcases*************");

    /*console.log("*************Running the EAW Settings Creation Tasks***********************")
    await AdmSearchSettings.settingsSearch()*/
                  
    console.log("*************Running the EAW Roles Creation Tasks***********************")
    await GeneralRoles.newRoleCreate(RoleName+rand,RoleDesc)
    //await page.pause()
    await GeneralRoles.newRoleDelete(RoleName+rand,RoleDesc)
    

     
    

           
});