import { test,expect } from '@playwright/test';
exports.GeneralRolesPage = class GeneralRolesPage
{
    constructor(page)
    {
        this.page = page
        this.general_navigation = page.locator('//html/body/div[2]/div/nav/div[2]/div[1]/ul/li[3]/span')
        this.roles_navigation = page.locator('//html/body/div[2]/div/nav/div[2]/div[1]/ul/li[3]/ul/li[4]/a')
        this.addRoles_btn = page.locator('//html/body/div[2]/div/article/div[2]/section/div/div[1]/span/a/i')
        this.newRoleName_txtBox = page.locator('//html/body/div[2]/div/article/div[2]/section/form/section[1]/fieldset[1]/input')
        this.newRoleDesc_txtBox = page.locator('//html/body/div[2]/div/article/div[2]/section/form/section[1]/fieldset[3]/textarea')
        this.addressSetUp_checkBox = page.locator('//label[@for="role_feature_id_40120"]')
        this.articleModule_checkBox = page.locator('//label[@for="role_feature_id_92"]')
        this.evaticServiceHub_checkBox = page.locator('//label[@for="role_feature_id_6"]')
        this.collapseAll_btn = page.getByRole('button', { name: 'Collapse all' })
        this.save_btn = page.locator('//html/body/div[2]/div/article/div[2]/section/form/footer/div[2]')

        this.tasksWeb_table1 = page.locator('(//table[@role="grid"])[1]')
        this.tasksWeb_table2 = page.locator('(//table[@role="grid"])[2]')

        this.delete_btn = page.locator('#ea-role-btnDelete')
        this.yes_btn = page.getByRole('button', { name: 'Yes' })
    }


    async newRoleCreate(roleName,roleDesc)
    {
        await test.step("Naviagate to General navigation & search for Roles", async()=>
        {
                       
            await this.general_navigation.click()
            await this.roles_navigation.click()
            await this.addRoles_btn.click();
            await this.newRoleName_txtBox.click();
            await this.newRoleName_txtBox.clear();
            await this.newRoleName_txtBox.fill(roleName);
            await this.newRoleDesc_txtBox.click();
            await this.newRoleDesc_txtBox.clear();
            await this.newRoleDesc_txtBox.fill(roleDesc);
                        
        })

        await test.step("Selecting the choices from Evatic Admin web, Evatic service, Evatic Service Hub& click the save button", async()=>
        {            
            await this.addressSetUp_checkBox.check()
            expect((await this.addressSetUp_checkBox).isChecked()).toBeTruthy()
            await this.articleModule_checkBox.check()
            expect((await this.articleModule_checkBox).isChecked()).toBeTruthy()
            await this.evaticServiceHub_checkBox.check()
            expect((await this.evaticServiceHub_checkBox).isChecked()).toBeTruthy()
            await this.collapseAll_btn.click()
            await this.newRoleName_txtBox.click();
            await this.page.keyboard.press('Delete');
            await this.newRoleDesc_txtBox.click();
            await this.page.keyboard.press('Delete');
            await this.save_btn.click()
            await this.page.waitForTimeout(4000);
            console.log('The roleName created is ' + roleName);
            //await this.tasksTableVerify(roleName,roleDesc)
        })
    }   
        
    async newRoleDelete(roleName,roleDesc)
    {
        await test.step("Naviagate to General navigation & search for Roles & Delete Roles", async()=>
        {
                       
            const table1 = await this.tasksWeb_table1
            const cols = await table1.locator('thead tr th')
            //console.log('The col count created is ' + await cols.count());

            const table2 = await this.tasksWeb_table2
            const rows = await table2.locator('tbody tr')
            //console.log('The row count created is ' + await rows.count());


            for (let i = 0; i < await rows.count(); i++) 
            {
                const row = rows.nth(i);
                const tds = row.locator("td");
                   for (let j = 0; j < await cols.count(); j++) 
                      {

                                                   
                            //console.log('The rowValue is ' + await tds.nth(j).textContent());
                            //console.log('The roleName created is ' + roleName);
                            if (await tds.nth(j).textContent() == roleName) 
                                {
                                    //await this.page.pause() 
                                    await expect(tds.nth(0),'Verify the roleName in the Web table').toContainText(roleName);
                                    await expect(tds.nth(1),'Verify the roleDescriptoin in the Web table').toContainText(roleDesc);
                                    await this.page.getByRole('row', { name: roleName+' TestRoleDesc mode_edit' }).getByRole('link', { name: 'mode_edit' }).click()                                                                                                    
                                    j = 999999999999999;                                                                                                                                         
                                    i = 999999999999999;
                                    await this.page.waitForTimeout(7000)                                   
                                }
                    
                    }
                }
                expect((await this.addressSetUp_checkBox).isChecked()).toBeTruthy()
                expect((await this.articleModule_checkBox).isChecked()).toBeTruthy()
                expect((await this.evaticServiceHub_checkBox).isChecked()).toBeTruthy()
                await this.delete_btn.click()
                await this.yes_btn.click()
                await this.page.waitForTimeout(3000)
                        
        })

            
        

    
    }         
        
}