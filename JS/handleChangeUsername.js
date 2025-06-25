import { getProfileData } from "./getProfileData.js"
import { fetchUserData } from "./userData.js"
import Preloader from './preloader.js'
const preloader = new Preloader()

document.addEventListener('DOMContentLoaded', () => {
    let newUsername

    const changeUsernameInput = document.querySelector('.change__username__input')
    const saveUsernameButton = document.querySelector('.save__username__button')

    function handleChangeUsernameValue(event) {
        newUsername = event.target.value
    }

    async function handleChangeUsername() {
        try {
            preloader.setActive()
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me/profile', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    first_name: newUsername
                })
            })

            const data = await response.json()
            console.log(data)

            await fetchUserData()
            await getProfileData()

            return data
        } catch (error) {
            console.log(`Error: ${error}`)
        } finally {
            preloader.setInactive()
        }
    }

    changeUsernameInput.addEventListener('input', handleChangeUsernameValue)
    saveUsernameButton.addEventListener('click', handleChangeUsername)
})