import { test,expect } from '@playwright/test';
exports.AdmSearchSettingsPage = class AdmSearchSettingsPage
{
    constructor(page)
    {
        this.page = page
        this.settings_navigation = page.locator('//html/body/div[2]/div/nav/div[2]/div[1]/ul/li[1]/span/span[1]')
        this.showAll_navigation = page.locator('//html/body/div[2]/div/nav/div[2]/div[1]/ul/li[1]/ul/li[1]/a')
        this.search_btn = page.locator('//html/body/div[2]/div/article/div[1]/span[6]/i')
        this.searchBar_textBox = page.locator('//html/body/div[2]/div/article/div[1]/span[4]/input')
        this.edit_icon = page.locator('//html/body/div[2]/div/article/div[2]/section/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[4]/a[3]/i')
        this.checkBox = page.locator('//html/body/div[2]/div/article/div[2]/section/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[3]/label')
        this.save_btn = page.locator('//html/body/div[2]/div/article/div[2]/section/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[4]/a[1]/i')
        this.history_btn = page.locator('//html/body/div[2]/div/article/div[2]/section/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[4]/a[2]/i')
        this.close_btn = page.getByRole('button', { name: 'Close', exact: true })
        this.edit_btn = page.locator('//html/body/div[2]/div/article/div[2]/section/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[4]/a[3]/i')
        
    }


    async settingsSearch()
    {
        await test.step("Naviagate to Show all navigation & search for settings", async()=>
        {
            await this.page.waitForTimeout(12000);
            await this.settings_navigation.click();
            await this.showAll_navigation.click();
            await this.search_btn.click()
            await this.searchBar_textBox.click()
            await this.searchBar_textBox.fill('Mandatory Ac 1')
            await this.page.keyboard.press('Enter');
            await this.edit_icon.click();
            //await this.page.pause();
            await this.checkBox.check();
            expect((await this.checkBox).isChecked()).toBeTruthy()
            //await expect(await this.checkBox,'Verify the checked state').toBeChecked();
            await this.save_btn.click()
            await this.history_btn.click()
            await this.close_btn.click()
            //await page.getByRole('row', { name: 'Evatic - QA / Evatic Mobile Mandatory Ac 1 save close' }).locator('label').click();
            await this.edit_btn.click()            
            await this.checkBox.uncheck();
            await this.save_btn.click()
            //expect(await this.page.isChecked(this.checkBox)).toBeFalsy()
            


            
        })

    }
        
        
}