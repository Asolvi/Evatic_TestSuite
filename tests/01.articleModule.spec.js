import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { ArticlePage } from '../pages/article'
import { StockAdminPage } from '../pages/stockAdmin'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

//const username = process.env.USERNAME ?? '';
//const password = process.env.PASSWORD ?? '';

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage (page)
    await Login.gotoLoginPage()
    await Login.login()    
  });

test('TC_001_Evatic_Regression_ArticleModule', async ({ page }) => {

    
    const Article = new ArticlePage(page)
    const rand = randomNo()

    const ArticleNo =  testData('Article','TC_001_Evatic_Regression_ArticleModule','ArticleNo')
    const Description =  testData('Article','TC_001_Evatic_Regression_ArticleModule','Description')
    const SearchName =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SearchName')
    const SupplierCostPrice =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SupplierCostPrice')
    const SalesPrice1 =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SalesPrice1')
    const ArticleType =  testData('Article','TC_001_Evatic_Regression_ArticleModule','ArticleType')

    
    //console.log("************Running the ArticleModuleTestCases*************");
    //await Login.gotoLoginPage()
    //await Login.login()
    await Article.articleCreation(ArticleNo+rand,Description,SearchName,SupplierCostPrice,SalesPrice1,ArticleType)
    console.log('The new articleNo created is ' + await Article.articleNumber);
    const articleNumber = await Article.articleNumber;
    await Article.articleSearch(articleNumber)
    await Article.articleDelete()
    await Article.articleReSearch(articleNumber)
});

test.skip('TC_002_Evatic_Regression_ArticleModule_SupplierOrder', async ({ page }) => {

    const Login = new LoginPage (page)
    const StockAdmin = new StockAdminPage(page)
    
    const SupplierNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','SupplierNo')
    const StockNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','StockNo')
    const ArticleNumber =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','ArticleNumber')
    const PackingSlipNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','PackingSlipNo')
    const Date =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','Date')
    const ArticleDesc =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','ArticleDesc')
    const NewQuan =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','NewQuan')
    const StockNo1 =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','StockNo1')
    
    const MoveFrm =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','MoveFrm')
    const MoveTo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','MoveTo')
    const QuanToMve =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','QuanToMve')

    //console.log("************Running the ArticleModuleSupplierOrderTestCases*************");
    await Login.gotoLoginPage()
    await Login.login()
    //********************Create the new Supplier Order**************************
    await StockAdmin.supplierOrder(SupplierNo,StockNo,ArticleNumber,Date)  
    const supplierOrdNum = await StockAdmin.supplierOrderNum_txt.textContent();
    console.log('The new supplier Order2 created is ' + supplierOrdNum);
    //*******************Receive the new Supplier Order***************************
    await StockAdmin.receiveSupplierOrder(supplierOrdNum,PackingSlipNo);
    //console.log('The article number created is ' + ArticleNumber);
    //********************StockTaking***********************************************
    await StockAdmin.stockTaking(ArticleNumber,ArticleDesc,NewQuan,StockNo1);
    //********************StockInternalMove***********************************************
    await StockAdmin.internalMove(MoveFrm,MoveTo,ArticleNumber,QuanToMve);
    
});


