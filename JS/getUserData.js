async function getUserData() {
    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accpet': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export { getUserData }