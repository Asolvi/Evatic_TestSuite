import { test,expect } from '@playwright/test';
exports.CustWebContactsPage = class CustWebContactsPage
{
    constructor(page)
    {
        this.page = page
        this.contacts_navigation = page.locator('//html/body/div/div/div[1]/div/div/div[1]/div/ul/li[8]/span[2]')
        this.newContact_btn = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div[1]/div/div/div[1]/div[1]/div/div/button')
        this.firstName_txtBox = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div[2]/input')
        this.lastName_txtBox = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[2]/div[2]/input')
        this.email1_txtBox = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[4]/div[2]/input')
        this.mobileNo_txtBox = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[8]/div[2]/input')
        this.jobTitle_dropDownBox = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[6]/div[2]/span/span/span[1]/input')
        this.title_txtBox = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[10]/div[2]/input')
        this.save_btn = page.locator('//html/body/div[3]/div/div/div[2]/div/div[3]/div/button')
        this.contacts_num = page.locator('(//div/div/div/div/div/div/span)[2]')
        //this.contacts_num = page.locator('//div/div/div/div')

        this.email1_search_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/table/thead/tr[2]/th[5]/div/div/input')
        this.tasksWeb_table = page.locator('//table[@class="k-grid-table"]')
        this.delete_btn = page.locator('//html/body/div[3]/div/div/div[2]/div/div[2]/div[3]/div/div/button')
        this.yes_btn = page.locator('//html/body/div[4]/div/div/div[2]/div[1]/div/button')

        this.noRecords_msg = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr/td')

    }


    async contactsCreation(FirstName,LastName,Email,Phone,ConJobTitle,ConTitle)
    {
        await test.step("Naviagate to contacts navigation & enter the contact details", async()=>
        {
            await this.page.waitForTimeout(3000);
            await this.contacts_navigation.click()
            await this.page.waitForTimeout(2000); 
            await this.newContact_btn.click();    
            await this.page.waitForTimeout(2000);  
            await this.firstName_txtBox.click()
            await this.firstName_txtBox.fill(FirstName)
            await this.lastName_txtBox.click()
            await this.lastName_txtBox.fill(LastName)
            await this.email1_txtBox.click()
            await this.email1_txtBox.fill(Email)
            await this.mobileNo_txtBox.click()
            await this.mobileNo_txtBox.fill(Phone)
            await this.jobTitle_dropDownBox.click()
            await this.jobTitle_dropDownBox.fill(ConJobTitle)
            const ContactJobTitle = ConJobTitle;
            await this.page.getByText(ContactJobTitle, { exact: true }).click();
            await this.title_txtBox.click()
            await this.title_txtBox.fill(ConTitle)
        })

    
            await test.step("Click the Save button", async()=>
            {
            
                //await this.page.pause();   
                await this.save_btn.click()
                await this.page.waitForTimeout(2000);
                const a = await this.contacts_num.textContent();
                console.log('The new label created is ' + a);
                const b = a.split("(")
                //const b = a.split(":")
                const c = b[1].split(")")
                const d = c[0]
                //console.log('The contact name from the label created is ' + d)
                this.contactNavn = d
                
            
           })
    }  
    
    async contactsLogsCheck(FirstName,LastName,FullName,Email1,Mobile)
    {
        await test.step("Naviagate to Logs navigation & enter the contact no details & verify the count", async()=>
        {
            await this.page.waitForTimeout(3000);
            //await this.orders_navigation.click()
            await this.email1_search_txtBox.click();
            await this.email1_search_txtBox.fill(Email1);
            await this.page.waitForTimeout(4000);
            //await this.page.pause()
            await this.tasksTableVerify(FirstName,LastName,FullName,Email1,Mobile) 
            

        })

    }

    async contactsDeletion(FirstName,LastName,FullName,Email1,Mobile)
    {
        await test.step("Naviagate to Logs navigation & enter the contact email id to delete ", async()=>
        {
            await this.page.waitForTimeout(2000);
            await this.email1_search_txtBox.click();
            await this.email1_search_txtBox.fill(Email1);
            await this.page.waitForTimeout(4000);
            //await this.page.pause();
            const FName = FirstName;
            await this.page.getByRole('gridcell', { name: FName, exact: true }).dblclick()
            await this.delete_btn.click();
            await this.yes_btn.click();
            await this.page.waitForTimeout(3000);
            await expect(this.noRecords_msg,'Verify the Warning message in the Web table').toContainText('No records available.');

        })

    }

    async tasksTableVerify(FirstName,LastName,FullName,Email1,Mobile)  
    {
        await test.step("Naviagate to Logs table & verify the FirstName,LastName,FullName,Email1,Mobile in table", async()=>
        {
            const table = this.tasksWeb_table
            const headers = table.locator("thead");

            const rows = table.locator("tbody tr");
            const cols = rows.first().locator("td")


        for (let i = 0; i < await rows.count(); i++) 
            {
                const row = rows.nth(i);
                const tds = row.locator("td");
                   for (let j = 0; j < await cols.count(); j++) 
                      {
            
                            if (await tds.nth(j).textContent() == FirstName) 
                                {
                                    
                                    await expect(tds.nth(1),'Verify the FirstName in the Web table').toContainText(FirstName);
                                    await expect(tds.nth(2),'Verify the LastName in the Web table').toContainText(LastName);
                                    await expect(tds.nth(3),'Verify the FullName in the Web table').toContainText(FullName);
                                    await expect(tds.nth(4),'Verify the EmailAddress in the Web table').toContainText(Email1);
                                    await expect(tds.nth(6),'Verify the MobileNo in the Web table').toContainText(Mobile);
                                    //await expect(tds.nth(9),'Verify the Adress1 in the Web table').toContainText(Address1);
                                                                     
                                    break; 
                                    
                                }
                    
                    }
                }

        })          
    }


   
}