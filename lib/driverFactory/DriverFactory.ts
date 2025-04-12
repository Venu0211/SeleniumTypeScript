import { Builder, Capabilities, WebDriver } from "selenium-webdriver";

class DriverFactory {


  protected driver: any = undefined;

  /**
   * @description Use this method to launch browser.
   * @return {*}  {WebDriver}
   * @memberof DriverFactory
   */
  launchBrowser(): WebDriver {
    if (!this.driver) {
      let browser = Capabilities.chrome();
      this.driver = new Builder().withCapabilities(Capabilities).forBrowser('chrome').build();
    }
    return this.driver as unknown as WebDriver;
  }

  // async test(){
  //   driver=await this.launchBrowser();
  //   await driver.get('https://in.search.yahoo.com');  
  // }



}
export { DriverFactory }


// let a= new DriverFactory(driver);
// a.test();

