
import{test, expect} from '../fixtures/hooks-fixture'
import loginModuleData from '../data/login-module-data.json'
import { LeftNavigationPage } from '../pages/leftNavigationPage'

test.use({
    storageState:{
    "cookies": [],
    "origins": []
}})

test.describe("Invalid Login",{
    tag:'@Invalid Login',
    annotation:{
        type:'StoryLink',
        description:'Link of Story'
    }
  
},()=>{
    test('[Login] Verify that user cannot login with an invalid password', {
    tag: ['@Smoke','@UI'],
    annotation: {
        type: 'TestCaseLink',
        description:'Testcase_Link'
    }},
    async( {loginPage,gotoUrl, commonUtils})=>{
    
const username= commonUtils.decryptData(process.env.USER_NAME!);
await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password );
console.log(loginModuleData.wrong_password);
await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
await expect(loginPage.userNameInput).toBeVisible();
    
})

test('[Login] Verify that user cannot login with an invalid username',{
      tag: ['@Smoke','@UI'],
    annotation: {
        type: 'TestCaseLink',
        description:'Testcase_Link'
    }},
     async( {loginPage,gotoUrl, commonUtils})=>{
const password= commonUtils.decryptData(process.env.PASSWORD!);
await loginPage.loginOrangeHrm(loginModuleData.wrong_username,password );
await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
await expect(loginPage.userNameInput).toBeVisible();
    
})

test('[Login] Verify that user cannot login with an invalid username and password', { tag: ['@Smoke','@UI'],
    annotation: {
        type: 'TestCaseLink',
        description:'Testcase_Link'
    }}, async( {loginPage,gotoUrl, commonUtils})=>{

await loginPage.loginOrangeHrm(loginModuleData.wrong_username,loginModuleData.wrong_password);
await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
await expect(loginPage.userNameInput).toBeVisible();
    
})
})

test.describe("Valid Login",{
    tag:'@Valid Login',
    annotation:{
        type:'StoryLink',
        description:'Link of Story'
    }
  
},()=>{
test('[Login] Verify that user cannot login with an invalid username and password', { 
    tag: ['@Visual','@UI'],
    annotation: {
        type: 'TestCaseLink',
        description:'Testcase_Link'
    }}, async( {loginPage,gotoUrl, commonUtils, leftNavigationPage})=>{
const username= commonUtils.decryptData(process.env.USER_NAME!);        
const password= commonUtils.decryptData(process.env.PASSWORD!);
await loginPage.loginOrangeHrm(username,password);
await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot("OrangeHrmLogo.png");
await expect(leftNavigationPage.leftNavigationPanel).toHaveScreenshot("LeftNavigation_Panel.png")
    
})
} )
