import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { ArticlePage } from '../pages/article'
import { CustomerPage } from '../pages/customer'
import { MachinePage } from '../pages/machine'
import { OrderPage } from '../pages/order'
import { ProjectPage } from '../pages/project'
import { ContractPage } from '../pages/contract'
import { SalesProjectPage } from '../pages/salesProject'
import { StockAdminPage } from '../pages/stockAdmin'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'


test.beforeEach(async ({ page }) => {
    const Login = new LoginPage (page)
    await Login.gotoLoginPage()
    await Login.login()    
  });


test('TC_001_Evatic_Regression_Article_Customer_Machine_Modules', async ({ page }) => {

    test.setTimeout(5000000);
    const Login = new LoginPage (page)
    const Article = new ArticlePage(page)
    const StockAdmin = new StockAdminPage(page)
    const Customer = new CustomerPage(page)
    const Machine = new MachinePage(page)


    const rand = randomNo()

    const ArticleNo =  testData('Article','TC_001_Evatic_Regression_ArticleModule','ArticleNo')
    const Description =  testData('Article','TC_001_Evatic_Regression_ArticleModule','Description')
    const SearchName =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SearchName')
    const SupplierCostPrice =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SupplierCostPrice')
    const SalesPrice1 =  testData('Article','TC_001_Evatic_Regression_ArticleModule','SalesPrice1')
    const ArticleType =  testData('Article','TC_001_Evatic_Regression_ArticleModule','ArticleType')

    const PackingSlipNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','PackingSlipNo')
    const SupplierNo1 =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','SupplierNo')
    const StockNo2 =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','StockNo')
    const ArticleNumber1 =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','ArticleNumber')
    const Date1 =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','Date')
    const ArticleDesc =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','ArticleDesc')
    const NewQuan =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','NewQuan')
    const StockNo1 =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','StockNo1')
    
    const MoveFrm =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','MoveFrm')
    const MoveTo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','MoveTo')
    const QuanToMve =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','QuanToMve')

    const Custmr =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Custmr')
    const AddrName =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','AddrName')
    const Country =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Country')
    const Addr1 =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Addr1')
    const Addr2 =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Addr2')
    const PostCode =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','PostCode')
    const City =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','City')
    const Phone =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Phone')
    const CustomerNo =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','CustomerNo')

    const MachineNo =  testData('Machine','TC_001_Evatic_Regression_MachineModule','MachineNo')
    const ModelNo =  testData('Machine','TC_001_Evatic_Regression_MachineModule','ModelNo')
    const CustomerNo1 =  testData('Machine','TC_001_Evatic_Regression_MachineModule','CustomerNo')
    
    


    console.log("************Running the ArticleModuleTestCases*************");
    console.log("************Create a Article Card*************");
    await page.pause()
    await Article.articleCreation(ArticleNo+rand,Description,SearchName,SupplierCostPrice,SalesPrice1,ArticleType)
    console.log('The new articleNo created is ' + await Article.articleNumber);
    const articleNumber = await Article.articleNumber;

    console.log("************Search a Article Card*************");
    await Article.articleSearch(articleNumber)

    console.log("************Delete a Article Card *************");
    await Article.articleDelete(articleNumber)

    console.log("************Research the deleted article again*************");
    await Article.articleReSearch(articleNumber)
    
    console.log("************Running the ArticleModuleSupplierOrderTestCases*************");
    //********************Create the new Supplier Order**************************
    await StockAdmin.supplierOrder(SupplierNo1,StockNo2,ArticleNumber1,Date1)  
    const supplierOrdNum = await StockAdmin.supplierOrderNum_txt.textContent();
    console.log('The new supplier Order2 created is ' + supplierOrdNum);

    //*******************Receive the new Supplier Order***************************
    await StockAdmin.receiveSupplierOrder(supplierOrdNum,PackingSlipNo);
    //console.log('The article number created is ' + ArticleNumber);

    //********************StockTaking***********************************************
    await StockAdmin.stockTaking(ArticleNumber1,ArticleDesc,NewQuan,StockNo2);
    
    //********************StockInternalMove***********************************************
    await StockAdmin.internalMove(MoveFrm,MoveTo,ArticleNumber1,QuanToMve);

    console.log("************Running the CustomerModuleTestCases*************");
    
    console.log("************Create a Customer Card*************");
    await Customer.customerCreation(Custmr,AddrName,Country,Addr1,Addr2,PostCode,City,Phone,CustomerNo+rand)
    console.log('The new customerNo created is ' + await Customer.customerNumber);
    const customerNumber = await Customer.customerNumber;

    console.log("************Search a Customer Card*************");
    await Customer.customerSearch(customerNumber)
    
    console.log("************Delete a Customer Card *************");
    await Customer.customerDelete(customerNumber)   
    
    console.log("************Research the deleted customer card again*************");
    await Customer.customerReSearch(customerNumber)


    console.log("************Running the MachineModuleTestCases*************");

    console.log("************Create a Machine Card*************");
    await Machine.machineCreation(MachineNo+rand,ModelNo,CustomerNo1)
    console.log('The new machineId created is ' + await Machine.machineNumber);
    const machineNumber = await Machine.machineNumber;

    console.log("************Search a Machine Card*************");
    await Machine.machineSearch(machineNumber)
    
    console.log("************Delete a Machine Card*************");
    await Machine.machineDelete(machineNumber)   

    console.log("************Research the deleted Machine Card*************");
    await Machine.machineReSearch(machineNumber)

    
   
});

test('TC_002_Evatic_Regression_Order_Module', async ({ page }) => {

    test.setTimeout(600000);
    //const Login = new LoginPage (page)
        
    const Order = new OrderPage (page)

    const CustomerNo2 =  testData('Order','TC_001_Evatic_Regression_OrderModule','CustomerNo')
    const MachineNo1 =  testData('Order','TC_001_Evatic_Regression_OrderModule','MachineNo')
    const ArticleNumber =  testData('Order','TC_001_Evatic_Regression_OrderModule','ArticleNumber')
    const StockNo =  testData('Order','TC_001_Evatic_Regression_OrderModule','StockNo')
    const CustomerNo5 =  testData('Order','TC_002_Evatic_Regression_OrderModule','CustomerNo')
    const ArticleNum =  testData('Order','TC_002_Evatic_Regression_OrderModule','ArticleNumber')
    const SerialNum =  testData('Order','TC_002_Evatic_Regression_OrderModule','SerialNo')
    const ArticleNummer =  testData('Order','TC_003_Evatic_Regression_OrderModule','ArticleNumber')
    const SupplierNo =  testData('Order','TC_003_Evatic_Regression_OrderModule','SupplierNo')
    const Date =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','Date')
    const PackingSlipNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','PackingSlipNo')

    console.log("************Running the OrderModuleTestCases*************");

    console.log("************Create a Order Card*************");
    await Order.orderCreation(CustomerNo2,MachineNo1)
    console.log('The new OrderId2 created is ' + await Order.orderNo);
    const orderNumber = await Order.orderNo;
    console.log('The new OrderId3 created is ' + orderNumber);

    console.log("************Search a Order Card*************");
    await Order.orderSearch(orderNumber)

    console.log("************Delete a Order Card *************");
    await Order.orderDelete(orderNumber)   

    console.log("************Research the deleted order card *************");
    await Order.orderReSearch(orderNumber)  
    
   console.log("************Deliver and Invoice a Article*************");
   //await page.pause();
    await Order.deliverAndInvoiceArticle(CustomerNo2,MachineNo1,ArticleNumber,StockNo,'','I')

    console.log("************Deliver and Invoice a Serial Article*************");
    //await page.pause();
    await Order.deliverAndInvoiceArticle(CustomerNo5,MachineNo1,ArticleNum,StockNo,SerialNum,'S')
    //await Customer.customerMachineVerify(CustomerNo5,SerialNum)

    console.log("************Request stock from order & receive it*************");
    await Order.deliverAndInvoiceArticle(CustomerNo5,MachineNo1,ArticleNummer,StockNo,'','M')
    const orderNumber1 = await Order.orderNo1
    await Order.generateOrderProposal(SupplierNo,StockNo,Date)
    await Order.receiveSupplierOrder(SupplierNo,PackingSlipNo)
    await Order.clickPackingSlip(orderNumber1)
    
    console.log("************Packaging Slip Overview & print packaging slip*************");
    await Order.packagingSlipOverView(orderNumber1)

    console.log("************Complete and Print & check the order status*************");
    await Order.completeAndPrint(orderNumber1)
        
});

test('TC_003_Evatic_Regression_SalesProject_Module', async ({ page }) => {

  test.setTimeout(420000);
  //const Login = new LoginPage (page)
      
  const Contract = new ContractPage(page)
  const SalesProject = new SalesProjectPage(page)

  const rand = randomNo()

    const CustomerNo4 =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','CustomerNo')
    const CalculationType =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','CalculationType')
    const SalesMan =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','SalesMan')
    const Date =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','Date')
    

    const CustomerNo =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','CustomerNo')
    const CalculationType1 =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','CalculationType1')
    const CalculationType2 =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','CalculationType2')
    const ArticleNo =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','ArticleNo')
    const ContractTemplate =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','ContractTemplate')
    const PpeuBlack =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','PpeuBlack')
    const PpeuColor =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','PpeuColor')
    const Supplier =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','Supplier')
    const Factor =  testData('SalesProject','TC_001_Evatic_Regression_SalesProjectModule','Factor')


  console.log("************Running the SalesProjectModuleTestCases*************");

  console.log("************Create a SalesProject Card*************");
  await SalesProject.salesProjectCreation(CustomerNo4)
  const salesProjectId = await SalesProject.salesProjectId;    
  console.log('The new salesProjectId created is ' + salesProjectId);

  console.log("************Search a SalesProject Card*************");
  await SalesProject.salesProjectSearch(salesProjectId)
  
  console.log("************Delete a SalesProject Card*************");
  await SalesProject.salesProjectDelete(salesProjectId)   

  console.log("************Research the deleted SalesProject Card again*************");
  await SalesProject.salesProjectReSearch(salesProjectId)

  console.log("************Create a SalesProject Card 003,Generate & approve it*************");
  await SalesProject.salesProjectCreation(CustomerNo)
  const salesProjectId_003 = await SalesProject.salesProjectId;
  console.log('The salesProjectNo_003 ' + salesProjectId_003 + ' is created successfully');
  await SalesProject.salesProjectGenerateCalc('003',CalculationType1,SalesMan,ArticleNo,ContractTemplate,PpeuBlack,PpeuColor)
  
  console.log("************Create a SalesProject Card 002,Generate & approve it*************");
  await SalesProject.salesProjectCreation(CustomerNo)
  const salesProjectId_002 = await SalesProject.salesProjectId;
  console.log('The salesProjectNo_002 ' + salesProjectId_002 + ' is created successfully');
  await SalesProject.salesProjectGenerateCalc('002',CalculationType2,SalesMan,ArticleNo,ContractTemplate,PpeuBlack,PpeuColor,Supplier,Factor)
      
});

test.only('TC_004_Evatic_Regression_Project_Module', async ({ page }) => {

  test.setTimeout(680000);
  //const Login = new LoginPage (page)
      
  const Project = new ProjectPage(page)
  const Contract = new ContractPage(page)
  
  const rand = randomNo()

  const MachineNo2 =  testData('Project','TC_001_Evatic_Regression_ProjectModule','MachineNo')
  const CustNo =  testData('Project','TC_001_Evatic_Regression_ProjectModule','CustNo')
  const Technician =  testData('Project','TC_001_Evatic_Regression_ProjectModule','Technician')
  const ArticleNo1 =  testData('Project','TC_001_Evatic_Regression_ProjectModule','ArticleNo')
  const Stock1=  testData('Project','TC_001_Evatic_Regression_ProjectModule','Stock')
  const Date =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','Date')
  const PackingSlipNo =  testData('Article','TC_002_Evatic_Regression_ArticleModule_SupplierOrder','PackingSlipNo')
  const ArticleNo2 =  testData('Project','TC_002_Evatic_Regression_ProjectModule','ArticleNo')
  const Stock2 =  testData('Project','TC_002_Evatic_Regression_ProjectModule','Stock')

  
 console.log("************Running the ProjectModuleTestCases*************");

  console.log("************Create a Project Card*************");
  await Project.projectCreation(MachineNo2)
  //console.log('The new ProjectId2 created is ' + await Project.projectNo);
  const projectNumber = await Project.projectNo;
  console.log('The new ProjectId3 created is ' + projectNumber);

  console.log("************Search a Project Card*************");
  await Project.projectSearch(projectNumber)

  console.log("************Delete a Project Card*************");
  await Project.projectDelete(projectNumber)   

  console.log("************Research the deleted Project card*************");
  await Project.projectReSearch(projectNumber)

  console.log("************Create a Project Card using customer call*************");
  await Project.projectCustomerCall(CustNo,MachineNo2)
  
  console.log("************Assigning a project card to technician*************");
    await Project.projectAssignTechnician(Technician)

  console.log("************Generate a part request*************");
  await Project.generateAPartRequest(MachineNo2,CustNo,Technician,ArticleNo1,Stock1) 

  console.log("************Address part request via supplier order*************");
  await Project.addressPartRequest(Date,PackingSlipNo)

  console.log("************Address part request via stock transfer*************");
  await Project.generateAPartRequest(MachineNo2,CustNo,Technician,ArticleNo2,Stock2)
  await Project.addressPartRequest(Date,PackingSlipNo)
      
});

test('TC_005_Evatic_Regression_Contract_Module', async ({ page }) => {

  test.setTimeout(180000);
  //const Login = new LoginPage (page)
      
  const Contract = new ContractPage(page)
  
  const rand = randomNo()

  const CustomerNo3 =  testData('Contract','TC_001_Evatic_Regression_ContractModule','CustomerNo')

    //console.log("************Running the ContractModuleTestCases*************");

    console.log("************Create a Contract Card*************");
    await Contract.contractCreation(CustomerNo3)
    const contractId = await Contract.contractId;
    //const salesProjectId = 10;
    console.log('The new contractId created is ' + contractId);

    console.log("************Search a Contract Card*************");
    await Contract.contractSearch(contractId)
    
    console.log("************Delete a Contract Card*************");
    await Contract.contractDelete(contractId)   

    console.log("************Research the deleted contract card again*************");
    await Contract.contractReSearch(contractId)
      
});

