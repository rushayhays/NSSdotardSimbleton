//Structure into HTML

export const Business = (businessObj) => {
    return `
    <div class="business-card">
        <h3>${businessObj.companyName}</h3>
        <p>${businessObj.addressFullStreet}</p>
        <p>${businessObj.addressCity}, ${businessObj.addressStateCode}, ${businessObj.addressZipCode}</p>
        <p>____________________________________________________<p>
        <p>Purchasing Agent: ${businessObj.purchasingAgent.nameFirst} ${businessObj.purchasingAgent.nameLast}<p>
        <p>Contact: ${businessObj.phoneWork}</p>
    </div>
    `
}

// export const Business = (businessObj, arr) => {
//     const itemNum = arr.indexof(businessObj)
//     if(itemNum%2 != 0){
//         return `
//         <div class="business-card odd">
//             <h3>${businessObj.companyName}</h3>
//             <p>${businessObj.addressFullStreet}</p>
//             <p>${businessObj.addressCity}, ${businessObj.addressStateCode}, ${businessObj.addressZipCode}</p>
//             <p>____________________________________________________<p>
//             <p>Purchasing Agent: ${businessObj.purchasingAgent.nameFirst} ${businessObj.purchasingAgent.nameLast}<p>
//             <p>Contact: ${businessObj.phoneWork}</p>
//         </div>
//         `
//     } else {
//         return `
//         <div class="business-card">
//             <h3>${businessObj.companyName}</h3>
//             <p>${businessObj.addressFullStreet}</p>
//             <p>${businessObj.addressCity}, ${businessObj.addressStateCode}, ${businessObj.addressZipCode}</p>
//             <p>____________________________________________________<p>
//             <p>Purchasing Agent: ${businessObj.purchasingAgent.nameFirst} ${businessObj.purchasingAgent.nameLast}<p>
//             <p>Contact: ${businessObj.phoneWork}</p>
//         </div>
//         `
//     }
// }
