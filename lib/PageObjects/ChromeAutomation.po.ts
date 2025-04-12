import { WebDriver } from "selenium-webdriver";
import { BasePage } from "../BasePage";
import { ChromeAutomationRepo } from "../Repo/ChromeAutomationRepo";
import { SearchResult } from "./SearchResult.po";

export class ChromeAutomation extends BasePage{
    
  driver: WebDriver;
    constructor(driver: WebDriver) {
        super();
        this.driver = driver;
    }
    /**
     * @description Use this method to Search Element in Chrome Browser.
     * @param {string} searchText
     * @return {*}  {Promise<SearchResult>}
     * @memberof ChromeAutomation
     */
    async search(searchText:string):Promise<SearchResult>{
       let ele= await  this.driver.findElement(ChromeAutomationRepo.SEARCH);
       await ele.sendKeys(searchText);
       return new SearchResult();
    }
}