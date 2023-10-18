import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { ProjectPage } from '../pages/project'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage (page)
    await Login.gotoLoginPage()
    await Login.login()    
  });

test('TC_001_Evatic_Regression_ProjectModule', async ({ page }) => {

    const Project = new ProjectPage(page)

    const rand = randomNo()

    const MachineNo =  testData('Project','TC_001_Evatic_Regression_ProjectModule','MachineNo')
    
    
    //console.log("************Running the ProjectModuleTestCases*************");
    await Project.projectCreation(MachineNo)
    //console.log('The new ProjectId2 created is ' + await Project.projectNo);
    const projectNumber = await Project.projectNo;
    console.log('The new ProjectId3 created is ' + projectNumber);
    await Project.projectSearch(projectNumber)
    await Project.projectDelete()   
    await Project.projectReSearch(projectNumber)

});