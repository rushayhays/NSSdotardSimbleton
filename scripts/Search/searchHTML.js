

export const searchCompanyFormattter = (foundBusiness) => {
    return `
        <h2>
        ${foundBusiness.companyName}
        </h2>
        <section>
        ${foundBusiness.addressFullStreet}
   
        </section>
        <section>
        ${foundBusiness.addressCity},
        ${foundBusiness.addressStateCode}
        ${foundBusiness.addressZipCode}
        </section>
    `
}

export const searchAgentFormattter = (foundBusiness) => {
    return `
        <h2>
        ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast} 
        </h2>
        <section>
        ${foundBusiness.companyName}
        </section>

        <section>
        <h4>Contact Info</h4>
        <div>
        ${foundBusiness.phoneWork}
        </div>
        ${foundBusiness.addressCity},
        ${foundBusiness.addressStateCode}
        ${foundBusiness.addressZipCode}
        </section>
    `
}
