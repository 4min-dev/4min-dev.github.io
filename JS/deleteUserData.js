import Preloader from './preloader.js'
const preloader = new Preloader()

document.addEventListener('DOMContentLoaded', () => {
    const deleteDataButton = document.querySelector('.delete__user__data__button')

    async function handleDeleteUserData() {
        try {
            preloader.setActive()
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me/profile', {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            window.location.href = '/templates/loader.html'
            return data
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }


    document.querySelector('.delete__account__settings__button').addEventListener('click', () => {
        document.querySelector('.delete__account__popup__overlay').classList.add('visible')
    })

    document.querySelector('.delete__account__popup__overlay').addEventListener('click', (e) => {
        if (e.target.closest('.popup') && !e.target.closest('.close__popup__button')) return
        console.log(e.target)
        document.querySelector('.delete__account__popup__overlay').classList.remove('visible')
    })

    deleteDataButton.addEventListener('click', handleDeleteUserData)
})