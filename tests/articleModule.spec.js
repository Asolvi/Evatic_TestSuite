import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { ArticlePage } from '../pages/article'
import { StockAdminPage } from '../pages/stockAdmin'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

test('TC_001_Evatic_Regression_ArticleModule', async ({ page }) => {

    const Login = new LoginPage (page)
    const Article = new ArticlePage(page)
    const StockAdmin = new StockAdminPage(page)
    const rand = randomNo()

    const ArticleNo =  testData('Article','TC_001_Evatic_Regression_ArticleModule','ArticleNo')
    const Description =  testData('Article','TC_001_Evatic_Regression_ArticleModule','Description')
    const SearchName =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SearchName')
    const SupplierCostPrice =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SupplierCostPrice')
    const SalesPrice1 =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SalesPrice1')
    const ArticleType =  testData('Article','TC_001_Evatic_Regression_ArticleModule','ArticleType')

    const SupplierNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule','SupplierNo')
    const StockNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule','StockNo')
    const ArticleNumber =  testData('Article','TC_002_Evatic_Regression_ArticleModule','ArticleNumber')
    
    //console.log("************Running the ArticleModuleTestCases*************");
    await Login.gotoLoginPage()
    await Login.login()
    await Article.articleCreation(ArticleNo+rand,Description,SearchName,SupplierCostPrice,SalesPrice1,ArticleType)
    console.log('The new articleNo created is ' + await Article.articleNumber);
    const articleNumber = await Article.articleNumber;
    await Article.articleSearch(articleNumber)
    await Article.articleDelete()
    await Article.articleReSearch(articleNumber)
    //await StockAdmin.supplierOrder(SupplierNo,StockNo,ArticleNo)  
});

