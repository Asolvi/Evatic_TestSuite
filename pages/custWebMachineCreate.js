import { test,expect } from '@playwright/test';
exports.CustWebMachinePage = class CustWebMachinePage
{
    constructor(page)
    {
        this.page = page
        this.machine_navigation = page.locator('//html/body/div/div/div[1]/div/div/div[1]/div/ul/li[5]/span[2]')
        this.newMachine_btn = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div[3]/div/div[2]/div/div/button')
        this.machineNo_txtBox = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div[1]/div/div[2]/input')
        this.dept_dropDown = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[4]/div/div/div/div[2]/div/span/span/span[1]/input')
        this.model_dropDown = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[1]/div[5]/div/div/div/div[2]/div/span/span/span[1]/input')
        this.name_dropDown = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/div/div[2]/div/span/span/span[1]/input')
        this.contact_dropDown = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[2]/div[10]/div[1]/div/div/div[2]/div/span/span/span[1]/input')
        this.brand_dropDown = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[2]/div[6]/div[2]/div/div/div[2]/div/span/span/span[1]/input')
        this.submit_btn = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[4]/div[2]/div/div/button')
        this.close_btn = page.locator('//html/body/div[3]/div/div/div[2]/div/div[1]/div[4]/div[3]/div/div/button')
        this.machine_num = page.locator('(//div/div/div/div/div/div/span)[23]')

        this.machine_search_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div[4]/div/div/div/div/div/div/div/div[2]/div/table/thead/tr[2]/th[1]/div/div/input')
        this.tasksWeb_table = page.locator('//table[@class="k-grid-table"]')
    }


    async machineCreation(MachineNo,Dept,Model,MacAddress,Contact,Brand)
    {
        await test.step("Naviagate to Machine navigation & enter the machine details", async()=>
        {
            await this.page.waitForTimeout(3000);
            await this.machine_navigation.click()
            await this.page.waitForTimeout(2000);
            await this.newMachine_btn.click()
            await this.machineNo_txtBox.click()
            await this.machineNo_txtBox.fill(MachineNo)
            await this.dept_dropDown.click()
            await this.dept_dropDown.fill(Dept)
            const Department = Dept;
            await this.page.getByText(Department, { exact: true }).click();
            await this.model_dropDown.click()
            await this.model_dropDown.fill(Model)
            const Modl = Model;
            await this.page.getByText(Modl, { exact: true }).click();
            await this.name_dropDown.click()
            await this.name_dropDown.fill(MacAddress)
            const MacAdress = MacAddress;
            await this.page.getByText(MacAdress, { exact: true }).click();
            await this.contact_dropDown.click()
            await this.contact_dropDown.fill(Contact)
            const Cntact = Contact;
            await this.page.getByText(Cntact, { exact: true }).click();
            //await this.page.pause();
            await this.brand_dropDown.click()
            await this.brand_dropDown.fill(Brand)
            const Brnd = Brand;
            await this.page.getByText(Brnd, { exact: true }).click();
            
            
        })

    
    await test.step("Click the Submit button", async()=>
        {
            //await this.page.pause();
            await this.submit_btn.click();
            await this.page.waitForTimeout(2000);
            const a = await this.machine_num.textContent();
            console.log('The new label created is ' + a);
            const b = a.split(" ")
            //const b = a.split(":")
            const c = b[4]
            console.log('The Machine no from the label created is ' + c)
            this.machineNummer = c
            //this.Id = await this.helpDesk_num.getText();
            //console.log('The new SalesProjectId created is ' + await this.Id);    
            await this.close_btn.click();
            
        })
    }  
    async machineLogsCheck(machineNumber,Model,Dept,CustomerNo,VisitName,MacAddress)
        {
            await test.step("Naviagate to Machine navigation & enter the Machine no ", async()=>
            {
                //await this.page.pause();
                //await this.machine_navigation.click()
                await this.page.waitForTimeout(2000);
                await this.machine_search_txtBox.click();
                await this.machine_search_txtBox.fill(machineNumber);
                //await this.page.pause();
                await this.page.waitForTimeout(4000);
                await this.tasksTableVerify(machineNumber,Model,Dept,CustomerNo,VisitName,MacAddress) 
                
    
            })          
        }
      
        
        
    

    async tasksTableVerify(machineNumber,Model,Dept,CustomerNo,CustomerName,Address1)  
    {
        await test.step("Naviagate to Logs table & verify the machineNumber,ModelType,Dept,CustNo,CustName,Address in table", async()=>
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
            
                            if (await tds.nth(j).textContent() == machineNumber) 
                                {
                                    
                                    await expect(tds.nth(0),'Verify the machineNumber in the Web table').toContainText(machineNumber);
                                    await expect(tds.nth(1),'Verify the Model in the Web table').toContainText(Model);
                                    await expect(tds.nth(5),'Verify the Dept in the Web table').toContainText(Dept);
                                    await expect(tds.nth(6),'Verify the CustomerNo in the Web table').toContainText(CustomerNo);
                                    await expect(tds.nth(7),'Verify the CustomerName in the Web table').toContainText(CustomerName);
                                    await expect(tds.nth(9),'Verify the Adress1 in the Web table').toContainText(Address1);
                                                                     
                                    break; 
                                    
                                }
                    
                    }
                }

        })          
    }
    

   
}