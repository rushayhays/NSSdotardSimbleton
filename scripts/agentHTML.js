//format the agent HTML element

export const agentHTML = (obj) => {
    return`
    <div class="agent-card">
        <h2>${obj.name}</h2>
        <h3>${obj.company}</h3>
        <p>${obj.phoneNumber}</p>
        <p>______________________________</p>
    </div>
    `
}
