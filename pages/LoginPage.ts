import { Locator, Page } from "@playwright/test";

export class LoginPage{

    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly invalidCredentialsErrorPopup: Locator;
    
    constructor(page: Page){
        this.page= page;
        this.userNameInput= page.getByRole('textbox', { name: 'Username'});
        this.passwordInput= page.getByRole('textbox', {name: 'Password'});
        this.loginButton= page.getByRole('button', { name: 'Login'});
        this.invalidCredentialsErrorPopup= page.getByRole('alert');
    }
//**
// to open url 
//  */
    async gotoOrangeHrm(){
       await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);

    }
/**
 * 
 * @param Username 
 * @param Password 
 */
async loginOrangeHrm(Username: string, Password: string){
      await  this.userNameInput.fill(Username);
       await this.passwordInput.fill(Password);
       await this.loginButton.click();
    }

}