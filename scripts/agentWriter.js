import { getAgentArr } from "./agentData.js"
import {agentHTML} from "./agentHTML.js"


export const agentWriter = () => {
    const contentTarget = document.querySelector(".agents-newYork")
    const agentArr = getAgentArr();
    let agentHTMLElement ="";
    

    for(const agent of agentArr){
        agentHTMLElement += agentHTML(agent);
        console.log(agentHTMLElement)
    }

    contentTarget.innerHTML = `${agentHTMLElement}`

};