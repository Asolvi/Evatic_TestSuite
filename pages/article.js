import { expect } from '@playwright/test';
exports.ArticlePage = class ArticlePage
{
    constructor(page)
    {
        this.page = page
        //this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.myEvatic_dropdown = page.getByText('1 My Evatic')
        //this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.article_dropdown1 = page.locator('//div[contains(@name,"title") and contains(text(),"3 Article")]')
        this.article_dropdown2 = page.locator('//div[contains(@name,"title") and (text()="Article")]')
        this.article_dropdown3 = page.locator('//div[contains(@name,"title") and (text()="Article search")]')


        this.articleNo_textbox = page.locator('//input[@name="txtArticleNo"]')
        this.articleno_textbox = page.locator('input[name="cmbOperator"]')

        this.articleTxtDesc_textbox = page.locator('//input[@name="txtDescription"]')
        this.articleSearchName_textbox = page.locator('//input[@name="txtSearchname"]')
        this.supplierCostPrice_textbox = page.locator('//input[@name="txtSupplierCostPrice"]')
        this.salesPrice_textbox = page.locator('//input[@name="txtSalesprice_0"]')
        this.sorting_tab = page.getByText('Sorting')
        this.articleType_textbox = page.locator('input[name="cmbSortGroup_1"]')
        this.costTypetoner_select = page.getByText('Toner')
        this.save_btn = page.locator('//div[@name="btnSave"]')
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('//div[@name="btnDelete"]')
        this.delPopupOk_button = page.locator('div[name="ok"]')
        //this.articleno_re_textbox = page.locator('div:nth-child(2) > .qx-table-cell-content').first()
        this.articleno_re_textbox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:173px;width:156px;z-index:9999"]')
        //this.noResults_popup = page.getByText('No match!')
        this.noResults_popup = page.locator('//div[@name="message"]')

        this.article_label = page.locator('//div[@name="mdiClient"]/div/div/div/div/div[@name="MdiChildPage_frmArticle"]/div[@name="label"]')
        this.closeX1_btn = page.locator('//div[@name="MessageBox"]/div/div[@name="close-button"]')
        this.closeX2_btn = page.locator('//div[@name="frmSearch"]/div/div[@name="close-button"]')
        this.articleWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmArticle"]/div[@name="close-button"]')
        
        
    }


    async articleCreation(ArticleNo,ArticleDesc,ArticleSearchName,supplierCostPrice,salesPrice,articleType)
    {
        await this.myEvatic_dropdown.click()
        //await this.page.pause()
        await this.article_dropdown1.click()
        await this.article_dropdown2.click()
        await this.articleNo_textbox.click()
        await this.articleNo_textbox.fill(ArticleNo)
        await this.articleTxtDesc_textbox.click()
        await this.articleTxtDesc_textbox.fill(ArticleDesc)
        await this.articleSearchName_textbox.click()
        await this.articleSearchName_textbox.fill(ArticleSearchName)
        await this.supplierCostPrice_textbox.click()
        await this.supplierCostPrice_textbox.fill(supplierCostPrice)
        await this.salesPrice_textbox.click()
        await this.salesPrice_textbox.fill(salesPrice)
        await this.sorting_tab.click()
        await this.articleType_textbox.click()
        await this.articleType_textbox.fill(articleType)
        await this.costTypetoner_select.click()
        //await this.page.pause()
        await this.save_btn.click()    
        await this.page.waitForTimeout(2000);
        this.articleNumber = ArticleNo;
        console.log('The created articleNo is ' + await this.articleNumber);        
    }

    async articleSearch(articleNo)
    {
        await this.article_dropdown3.click()
        await this.articleno_textbox.click() 
        await this.articleno_textbox.fill(articleNo) 
        await this.ok_button.click()
        await expect(await this.article_label.textContent(),'Verify the Search ArticleName').toContain(articleNo);
        console.log('The article No ' + articleNo + 'is searched successfully');   
    }

    async articleDelete(articleNo)
    {
        await this.del_button.click()
        await this.delPopupOk_button.click()
        await this.page.waitForTimeout(5000)
        await expect(await this.article_label.textContent(),'Verify the Search ArticleName').toContain('New article');
        console.log('The article No '+ articleNo + 'is deleted successfully');

    }
    async articleReSearch(articleNo)
    {
        await this.page.waitForTimeout(2000);
        await this.article_dropdown3.click()
        //await this.page.pause();
        await this.page.waitForTimeout(2000);
        await this.articleno_textbox.click() //// Make a note of this step every release
        //await this.articleno_re_textbox.click()  //// Make a note of this step every release
        await this.articleno_textbox.fill(articleNo) 
        await this.ok_button.click()
        //await this.page.pause();
        await expect(this.noResults_popup,'Verify the Search ArticleName').toHaveText("No match!")
        console.log('The article No ' + articleNo + 'cannot be searched & does not exist');
        await this.page.waitForTimeout(2000);
        await this.closeX1_btn.click()
        await this.closeX2_btn.click()
        await this.page.waitForTimeout(2000);
        //await this.page.pause();
        await this.article_dropdown1.click()
        await this.articleWindowCloseX_btn.click();
        

    }
}