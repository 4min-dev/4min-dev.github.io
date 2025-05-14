function getFormattedTokens(tokens) {
    const tokensString = tokens.toLocaleString('en-US')
    const parts = tokensString.split(',')

    let formattedTokens = '';
    for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
            formattedTokens += `<span class="opacity">,</span>`
        }
        if (i === parts.length - 1) {
            formattedTokens += `<span class="opacity">${parts[i]}</span>`
        } else {
            formattedTokens += parts[i]
        }
    }

    return formattedTokens
}

export { getFormattedTokens }