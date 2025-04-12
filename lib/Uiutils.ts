import { Locator, WebDriver } from "selenium-webdriver";


 class UiUtils{

 driver:WebDriver;
    constructor(driver :WebDriver){
        this.driver=driver;
    }
/**
 *@description Use this to find Element.
 *@param {Locator} locator
 *@return {*}  {Promise<void>}
 *@memberof UiUtils
 */
async findElement(locator:Locator):Promise<void>{
     let ele= await this.driver.findElement(locator);
      await  ele.click();
    }

    // async navigateToApplication():Promise<void>{
    //     await this.driver 

    // }

    

    
}
export {UiUtils}
