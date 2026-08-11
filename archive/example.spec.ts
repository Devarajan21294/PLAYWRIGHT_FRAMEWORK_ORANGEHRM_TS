
import { expect } from '@playwright/test';
import {test} from '../fixtures/hooks-fixture'
import {LoginPage} from '../pages/LoginPage';
import CommonUtils from '../utils/CommonUtils';
import { encryptEnvFile } from '../utils/EncryptEnvFile';

 test('temp test',async ({page, loginPage, commonUtils}) => {
  
// // console.log(process.env.BASE_URL);
// // console.log(process.env.USER_NAME);
// // console.log(process.env.PASSWORD);
// const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
// const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
//  await loginPage.gotoOrangeHrm();
//  await loginPage.loginOrangeHrm(decryptedUsername,decryptedPassword);
 
// //   commonUtils.encryptData(process.env.USER_NAME!);
encryptEnvFile();
})

test('test1', async({page,gotoUrl})=>{
 console.log(await page.title());
})
test('test2', async({page,gotoUrl,logout})=>{
 await expect(page).toHaveTitle("OrangeHRM");

})
