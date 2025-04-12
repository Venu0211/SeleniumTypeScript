import { WebDriver } from "selenium-webdriver";

class DebugUtil  {
    private context: Object;
    private cmdLine: string[];
    driver: any;
    constructor(context: Object, cmdLine: string[], driver?: WebDriver) {
        this.context = context;
        this.cmdLine = cmdLine;
        if (driver != undefined) {
        }
    }
/**
 *@description Use this method to Take ScreenShot.
 * @param {Object} [logMessage]
 * @memberof DebugUtil
 */
async takePageScreenshot(logMessage?: Object) {
        await this.driver.sleep(3000);
        //let body = await this.driver.findElement(By.xpath("//body"));
        var self = this;
        let url = await this.driver.getCurrentUrl();
        let a  = await this.driver.takeScreenshot()
        await this.driver.addContext(self.context, 'data:image/jpeg;base64,' + a); //to print Images
        await this.driver.addContext(self.context,"sgadafsjdajhsgfdvkd")// to print  string

    }
}