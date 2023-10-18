import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { CustomerPage } from '../pages/customer'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage (page)
    await Login.gotoLoginPage()
    await Login.login()    
  });

test('TC_001_Evatic_Regression_CustomerModule', async ({ page }) => {

    const Customer = new CustomerPage(page)
    const rand = randomNo()

    const Custmr =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Custmr')
    const AddrName =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','AddrName')
    const Country =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Country')
    const Addr1 =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Addr1')
    const Addr2 =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Addr2')
    const PostCode =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','PostCode')
    const City =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','City')
    const Phone =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','Phone')
    const CustomerNo =  testData('Customer','TC_001_Evatic_Regression_CustomerModule','CustomerNo')

    //console.log("************Running the CustomerModuleTestCases*************");
    await Customer.customerCreation(Custmr,AddrName,Country,Addr1,Addr2,PostCode,City,Phone,CustomerNo+rand)
    console.log('The new customerNo created is ' + await Customer.customerNumber);
    const customerNumber = await Customer.customerNumber;
    await Customer.customerSearch(customerNumber)
    await Customer.customerDelete()   
    await Customer.customerReSearch(customerNumber)

});