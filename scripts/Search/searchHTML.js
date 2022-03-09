

export const searchHTMLFormattter = (foundBusiness) => {
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
