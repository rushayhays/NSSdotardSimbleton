import { searchHTMLFormattter} from "./searchHTML.js"
import { getSearchList } from "./searchData.js"

const businessList = getSearchList();

let companySearchResultArticle = document.querySelector(".foundCompanies")
let foundBusiness = {};

document
.querySelector("#companySearch")
.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        
       for(const business of businessList){
           if (business.companyName.includes(keyPressEvent.target.value)) { 
               foundBusiness = business;
           }
        }
        companySearchResultArticle.innerHTML = `${searchHTMLFormattter(foundBusiness)}`
    }
          
});