import { expect } from '@playwright/test';
exports.ArticlePage = class ArticlePage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.article_dropdown1 = page.locator('//div[@id="id_128"]')
        this.article_dropdown2 = page.locator('//div[@id="id_623"]')
        this.article_dropdown3 = page.locator('//div[@id="id_619"]')
        this.articleNo_textbox = page.locator('//input[@name="txtArticleNo"]')
        this.articleTxtDesc_textbox = page.locator('//input[@name="txtDescription"]')
        this.articleSearchName_textbox = page.locator('//input[@name="txtSearchname"]')
        this.supplierCostPrice_textbox = page.locator('//input[@name="txtSupplierCostPrice"]')
        this.salesPrice_textbox = page.locator('//input[@name="txtSalesprice_0"]')
        this.sorting_tab = page.getByText('Sorting')
        this.articleType_textbox = page.locator('input[name="cmbSortGroup_1"]')
        this.costTypetoner_select = page.getByText('Toner')
        this.save_button = page.locator('#id_99').getByRole('img')
        this.articleno_textbox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('#id_101').getByRole('img')
        this.delPopupOk_button = page.locator('div[name="ok"]')
        //this.articleno_re_textbox = page.locator('div:nth-child(2) > .qx-table-cell-content').first()
        this.articleno_re_textbox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:173px;width:156px;z-index:9999"]')
        this.noResults_popup = page.getByText('No match!')
        //this.noResults_popup = page.locator('//html/body/div[2]/div[6]/div[2]/div[3]')
        
    }


    async articleCreation(ArticleNo,ArticleDesc,ArticleSearchName,supplierCostPrice,salesPrice,articleType)
    {
        await this.myEvatic_dropdown.click()
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
        await this.save_button.click()    
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
    }

    async articleDelete()
    {
        await this.del_button.click()
        await this.delPopupOk_button.click()

    }
    async articleReSearch(articleNo)
    {
        await this.article_dropdown3.click()
        await this.articleno_re_textbox.click()
        await this.articleno_textbox.fill(articleNo) 
        await this.ok_button.click()
        await expect(this.noResults_popup,'Verify the Search ArticleName').toHaveText("No match!")

    }
}