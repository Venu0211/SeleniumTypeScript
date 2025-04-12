import { By, Locator, until, WebDriver } from "selenium-webdriver";




class Waits {
    driver: WebDriver;
    constructor(driver: WebDriver) {
        this.driver = driver;
    }
/**
 *@description Use this method to wait.
 * @param {number} ms  //need to pass milli seconds to wait
 * @return {*}  {Promise<void>}
 * @memberof Waits
 */
async waitForElement(ms: number): Promise<void> {
        await  this.driver.sleep(ms);
    }
/**
 * @description Use this method to wait until the element located.
 * @param {Locator} locator
 * @return {*}  {Promise<void>}
 * @memberof Waits
 */
async fluentWaitUntilEleFound(locator:Locator):Promise<void>{
        await this.driver.wait(until.elementLocated(locator),20000);
    }
/**
 * @description Use this method to wait until Title displayed on the page.
 * @param {string} pagetile
 * @return {*}  {Promise<void>}
 * @memberof Waits
 */
async fluentWaitUntilTileDisplay(pagetile:string):Promise<void>{
        await this.driver.wait(until.titleIs(pagetile),10000);
    }
}


 
// syntax  :  setTimeout(function, delay);
// Function: The function to be executed after the delay.
// Delay: The time in milliseconds after which the function will execute.

setTimeout(function waittwoSeconds(){
    console.log('waiting for 8 seconds')
},8000);


//syntax: setInterval(function, interval);
// function: The function to be executed at each interval.
// interval: The time in milliseconds between each execution of the function.

setInterval(()=>{
   console.log('Hello');
},1000);


// If you want to cancel a timeout that you've set, you can use clearTimeout(). This requires saving the timeout ID returned by setTimeout()
//In this case, the timeout is canceled, so the message won't be printed.
const timeOutId= setTimeout(()=>{
console.log("his will not be executed.");
})
clearTimeout(timeOutId);