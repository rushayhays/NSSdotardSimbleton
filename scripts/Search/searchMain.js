import { searchCompanyFormattter} from "./searchHTML.js"
import { searchAgentFormattter} from "./searchHTML.js"
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
        companySearchResultArticle.innerHTML = `${searchCompanyFormattter(foundBusiness)}`
    }
          
});

let agentSearchResultArticle = document.querySelector(".foundAgents")
let foundAgent = {};

document
.querySelector("#agentSearch")
.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        
       for(const agentObj of businessList){
           if (agentObj.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)) { 
               foundAgent = agentObj;
           } else if (agentObj.purchasingAgent.nameLast.includes(keyPressEvent.target.value)){
               foundAgent = agentObj;
           }
        }
        agentSearchResultArticle.innerHTML = `${searchAgentFormattter(foundAgent)}`
    }
          
});