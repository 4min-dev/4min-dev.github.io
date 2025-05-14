import Preloader from "./preloader.js"
const preloader = new Preloader()

async function getUserData() {
    try {
        preloader.setActive()
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accpet': 'application/json',
                'initData': window.Telegram.WebApp.initData
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error: ${error}`)
    } finally {
        preloader.setInactive()
    }
}

export { getUserData }