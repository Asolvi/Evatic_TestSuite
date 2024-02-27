import { test,expect } from '@playwright/test';
exports.CustWebTasksPage = class CustWebTasksPage
{
    constructor(page)
    {
        this.page = page
        this.tasks_navigation = page.getByText('Tasks')
        this.machine_dropdown = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[1]/div/div/ul/div/div/div[1]/div[1]/div/div/div[2]/div/span/span/span[1]/input')
        this.visitName_check = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[1]/div/div/ul/div/div/div[2]/div[1]/div/div[2]/input')
        this.address1_check = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[1]/div/div/ul/div/div/div[2]/div[2]/div/div[2]/input')
        this.postCode_check = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[1]/div/div/ul/div/div/div[4]/div[1]/div/div/div[2]/div/span/span/span[1]/input')
        this.contact_dropdown = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[2]/div/div/ul/div/div[1]/div[1]/div[1]/div/div/div[2]/div/span/span/span[1]/input')
        this.FirstName_check = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[2]/div/div/ul/div/div[1]/div[2]/div[1]/div/div[2]/input')
        this.LastName_check = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[2]/div/div/ul/div/div[1]/div[3]/div[1]/div/div[2]/input')
        this.phoneNo_check = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[2]/div/div/ul/div/div[1]/div[4]/div[1]/div/div[2]/input')
        this.emailAddress_check = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[2]/div/div/ul/div/div[1]/div[5]/div[1]/div/div[2]/input')

        this.symptCode_dropdown = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[1]/div[1]/div/div/div[2]/div/span/span/span[1]/input')
        this.symptCode1_dropdown = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[1]/div[1]/div/div/div[2]/div/span/span/span[1]/input')

        this.title_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[3]/div/div/div[2]/input')
        this.title1_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[2]/div/div/div[2]/input')

        this.ref_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[4]/div/div/div[2]/input')
        this.ref1_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[4]/div/div/div[2]/input')

        this.desc_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[5]/div/div/div[2]/span/textarea')
        this.desc1_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/ul/li[3]/div/div/ul/div/div/div[4]/div/div/div[2]/span/textarea')

        this.submit_btn = page.locator('//html/body/div[1]/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/button')
        this.helpDesk_num = page.locator('(//div/div/div/div/div/div/span)[7]')

        this.new_link = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[1]/ul/li[1]/span')
        this.newServiceTask_select = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div/ul/li[2]/input')

        this.logs_navigation = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[1]/ul/li[2]/span')
        this.projectNo_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[1]/div[2]/input')
        this.search_btn = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div/div[2]/div[6]/div/div/button')

        this.tasksWeb_table = page.locator('//table[@class="k-grid-table"]')
    }


    async tasksCreation(Tasks,MachineNo,VisitName,Address1,PostCode,Contact,FirstName,LastName,Phone,Email,SymCode,Title,RefNo,Desc)
    {
        await test.step("Naviagate to Tasks navigation & enter the machine details", async()=>
        {
            
            if(Tasks == 'HelpDesk')
            {
            
            await this.tasks_navigation.click()
            await this.page.waitForTimeout(5000);
            }
            if(Tasks == 'Service')
            {
            //await this.tasks_navigation.click()
            await this.page.waitForTimeout(3000);
            await this.new_link.click()
            await this.page.waitForTimeout(3000);
            await this.newServiceTask_select.click();
            await this.page.waitForTimeout(5000);
            //await this.page.getByLabel('New Service Task').first().click()


            }
            await this.machine_dropdown.click()
            await this.machine_dropdown.fill(MachineNo)
            const MachineNum = MachineNo;
            await this.page.getByText(MachineNum, { exact: true }).click();
        })
        
        await test.step("Validate the VisitName, Address1 & PostCode values", async()=>
        {
            const visName = await this.visitName_check.getAttribute('value')
            console.log('The VisitName created is ' + visName);
            await expect(visName,'Verify the VisitName value').toEqual(VisitName)
            const adres1 = await this.address1_check.getAttribute('value')
            console.log('The address1 created is ' + adres1);
            await expect(adres1,'Verify the address1 value').toEqual(Address1)
            const pstCde = await this.postCode_check.getAttribute('value')
            console.log('The address1 created is ' + pstCde);
            await expect(pstCde,'Verify the postcode value').toEqual(PostCode)
        })

        await test.step("Enter the Contact details & validate the FirstName,LastName,Phone & Email values", async()=>
        {
            await this.contact_dropdown.click()
            await this.contact_dropdown.fill(FirstName)
            const Contant = FirstName;
            await this.page.getByText(Contant, { exact: true }).click();
            const firName = await this.FirstName_check.getAttribute('value')
            console.log('The FirstName created is ' + firName);
            await expect(firName,'Verify the VisitName value').toEqual(firName)
            const lasName = await this.LastName_check.getAttribute('value')
            console.log('The LastName created is ' + lasName);
            await expect(lasName,'Verify the LastName value').toEqual(lasName)
            const phoneNo = await this.phoneNo_check.getAttribute('value')
            console.log('The LastName created is ' + phoneNo);
            await expect(phoneNo,'Verify the VisitName value').toEqual(phoneNo)
            
        })

        await test.step("Enter the Symptom details & validate the symptom code,Title,RefNo & Desc values", async()=>
        {
            if(Tasks == 'HelpDesk')
            {
            await this.symptCode_dropdown.click()
            await this.symptCode_dropdown.fill(SymCode)
            const SymptCode = SymCode;
            await this.page.getByText(SymptCode, { exact: true }).click();
            await this.title_txtBox.click()
            await this.title_txtBox.fill(Title)
            //await this.title_txtBox.type(a)
            await this.ref_txtBox.click()
            await this.ref_txtBox.fill(RefNo)
            await this.desc_txtBox.click()
            await this.desc_txtBox.fill(Desc)            
            }
            if(Tasks == 'Service')
            {
            await this.symptCode1_dropdown.click()
            await this.symptCode1_dropdown.fill(SymCode)
            const SymptCode = SymCode;
            await this.page.getByText(SymptCode, { exact: true }).click();
            await this.title_txtBox.click()
            await this.title_txtBox.fill(Title)
            //await this.title_txtBox.type(a)
            await this.ref_txtBox.click()
            await this.ref_txtBox.fill(RefNo)
            await this.desc_txtBox.click()
            await this.desc_txtBox.fill(Desc)            
            }

        })

        await test.step("Click the Submit button", async()=>
        {
            //await this.page.pause();
            await this.submit_btn.click();
            await this.page.waitForTimeout(2000);
            const a = await this.helpDesk_num.textContent();
            console.log('The new label created is ' + a);
            const b = a.split(" ")
            const c = b[3]
            console.log('The helpdesk no from the label created is ' + c)
            this.helpDeskNo = c
            //this.Id = await this.helpDesk_num.getText();
            //console.log('The new SalesProjectId created is ' + await this.Id);
            
            
        })  
        
        
        
    }

    async helpDeskLogsCheck(helpDeskNumber,Tasks,MachineNo,VisitName,SymCode,Title,RefNo,Desc)
    {
        await test.step("Naviagate to Logs navigation & enter the helpdesk no ", async()=>
        {
            await this.page.waitForTimeout(2000);
            //await this.tasks_navigation.click()
            await this.logs_navigation.click();
            await this.page.waitForTimeout(2000);
            await this.projectNo_txtBox.click();
            await this.projectNo_txtBox.clear();
            await this.projectNo_txtBox.fill(helpDeskNumber);
            await this.page.waitForTimeout(2000);
            await this.search_btn.click()
            //await this.page.pause();
            await this.page.waitForTimeout(4000);
            await this.tasksTableVerify(helpDeskNumber,Tasks,MachineNo,VisitName,SymCode,Title,RefNo,Desc) 
            

        })          
    }

    async tasksTableVerify(helpDeskNumber,Tasks,MachineNo,VisitName,SymCode,Title,RefNo,Desc)  
    {
        await test.step("Naviagate to Logs table & verify the status,ProjectNumber,TaskType,TaskTitle,CustRef,MachineNo,ModelType,SymText in table", async()=>
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
            
                            if (await tds.nth(j).textContent() == helpDeskNumber) 
                                {
                                    
                                    await expect(tds.nth(3),'Verify the TaskNo in the Web table').toContainText('1');
                                    await expect(tds.nth(4),'Verify the TaskType in the Web table').toContainText(Tasks);
                                    await expect(tds.nth(5),'Verify the TaskTitle in the Web table').toContainText(Title);
                                    await expect(tds.nth(6),'Verify the CustomerRef in the Web table').toContainText(RefNo);
                                    await expect(tds.nth(7),'Verify the MachineNo in the Web table').toContainText(MachineNo);
                                    await expect(tds.nth(9),'Verify the SymptomText in the Web table').toContainText(Desc);
                                    //await expect(tds.nth(10),'Verify the Symptom1 in the Web table').toContainText('test1');
                                    await expect(tds.nth(19),'Verify the CustName in the Web table').toContainText(VisitName);
                                    
                                    break; 
                                    
                                }
                    
                    }
                }

        })          
    }

}