//This makes it work

import { getBusinessList } from "./BusinessData.js";
import { getNYbusinessList } from "./BusinessData.js";
import { getManufacturingBusinessList } from "./BusinessData.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".business-list")
const nyContentTarget = document.querySelector(".business-list-newYork")
const manContentTarget = document.querySelector(".business-list-manufacturing")

export const BusinessWriter = () => {
    const businessArray = getBusinessList()

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}

export const NYBusinessWriter = () => {
    const newYorkbusinessArray = getNYbusinessList();

    newYorkbusinessArray.forEach(
        (businessObject) => {
            nyContentTarget.innerHTML += Business(businessObject)
        }
    );
}

export const ManBusinessWriter = () => {
    const ManbusinessArray = getManufacturingBusinessList();

    ManbusinessArray.forEach(
        (businessObject) => {
            manContentTarget.innerHTML += Business(businessObject)
        }
    );
}
