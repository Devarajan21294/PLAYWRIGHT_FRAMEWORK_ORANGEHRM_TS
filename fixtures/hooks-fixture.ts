import {test as baseTest} from '../fixtures/common-fixture'
import { LoginPage } from '../pages/LoginPage';



type HookFixtureType ={
    gotoUrl: any;
    logout: any;
 
}
export const test=baseTest.extend<HookFixtureType>({
    gotoUrl: async ({loginPage}, use)=>{
        await loginPage.gotoOrangeHrm();
        await use();
    },
     logout: async ({userPage}, use)=>{
        await use();
        await userPage.logout();
        
    }

})
export {expect} from '@playwright/test'