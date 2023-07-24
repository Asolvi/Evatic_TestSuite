import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { OrderPage } from '../pages/order'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'

test('TC_001_Evatic_Regression_OrderModule', async ({ page }) => {

    const Login = new LoginPage (page)
    const Order = new OrderPage (page)

    const rand = randomNo()

    const CustomerNo =  testData('Order','TC_001_Evatic_Regression_OrderModule','CustomerNo')
    const MachineNo =  testData('Order','TC_001_Evatic_Regression_OrderModule','MachineNo')
    
    
    //console.log("************Running the OrderModuleTestCases*************");
    await Login.gotoLoginPage()
    await Login.login()
    await Order.orderCreation(CustomerNo,MachineNo)
    console.log('The new OrderId2 created is ' + await Order.orderNo);
    const orderNumber = await Order.orderNo;
    console.log('The new OrderId3 created is ' + orderNumber);
    await Order.orderSearch(orderNumber)
    await Order.orderDelete()   
    await Order.orderReSearch(orderNumber)

});