import { WebDriver } from "selenium-webdriver";
import { DriverFactory } from "./driverFactory/DriverFactory";

export class BasePage {

    public driver: WebDriver;
    constructor() {

        this.driver =  new DriverFactory().launchBrowser();

    }
    async refreshBrowser() {
        location.reload();
        /*The location.reload() method refreshes the current webpage from the browser's cache. Browser cache is temporary internet 
         files that stores website's images, document, and data for faster future reloads. */
    }

    async launchUrl(url: string) {
        let Driver = new DriverFactory();
        this.driver = await Driver.launchBrowser();

        await this.driver.get(url);
        //  this.driver=driver;
    }
}


//It reloads every 3 seconds
setTimeout(() => {
    window.location.reload();  //reload the current URL  
    // location: is an interface that represents the actual location (URL) 
}, 3000);

//It reloads every 4 seconds
setTimeout(() => {
    document.location.reload();
}, 4000);

/* 
//refersh current page
history.go(0);

//takes to pervious page & refersh
history.go(-1);

//takes to next page & refersh
history.go(1);


//it take 3 seconds to go to pervious page & refersh takes
setTimeout(() => {
    history.go(-1);
}, 3000); */
