import { WebDriver } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { SearchResultRepo } from "../Repo/SearchResultRepo";
import { RedBus } from "./RedBus.po";
import { BookMyShow } from "./BookMyShow.po";
import { BasePage } from "../BasePage";

export class SearchResult extends BasePage{
 
    constructor(){
      super();
      
    }
/**
 * @description Use this method to click on first link in Chrome broswer.
 * @template T
 * @param {T} SearchResult
 * @return {*}  {Promise<link<T>>}
 * @memberof SearchResult
 */
async clickonFirstLink<T extends "RedBus"|"BookMyShow">(SearchResult: T):Promise<link<T>>{
    
        if(SearchResult=="RedBus"){
            let ele=await this.driver.findElement(SearchResultRepo.REDBUS_LINK);
            await ele.click();
          return new RedBus() as unknown as link<T>;
            
        }
        if(SearchResult=="BookMyShow"){
            let ele=await this.driver.findElement(SearchResultRepo.BOOKMYSHOW_LINK);
            await ele.click();
          return new BookMyShow() as unknown as link<T>;
            
        }
        return undefined as unknown as link<T>
    }

    async test (){
      let a = await this.clickonFirstLink('BookMyShow')
    
    }



}

type link <T extends "RedBus"|"BookMyShow">=
T extends 'RedBus'? RedBus :
T extends 'BookMyShow'? BookMyShow :
never;