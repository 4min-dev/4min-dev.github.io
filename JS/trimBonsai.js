import { formatDuration } from "./formatDuration.js"
import NotificationManager from "./notifications.js"
const notifications = new NotificationManager()

const getBonsaiPopupContainer = document.querySelector('.get__bonsai__popup__container')
const timeoutBonsaiBlockPopup = document.querySelector('.timeout__block__popup__overlay')
const trimTimeoutBonsaiValue = document.querySelector('.trim__timeout__value')

async function trimBonsai() {
    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/game/trim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const data = await response.json()

        if (typeof data.harvest_remaining_seconds !== "number" && typeof data.harvest_remaining_seconds !== "string") {
            notifications.createNotification('Произошла ошибка.. Повторите попытку позже', 5000, false)
            return
        }

        const formattedTrimTimeout = formatDuration(Number(data.harvest_remaining_seconds))

        getBonsaiPopupContainer.classList.remove('visible')
        timeoutBonsaiBlockPopup.classList.add('visible')

        trimTimeoutBonsaiValue.setAttribute('data-timeout', formattedTrimTimeout)
        localStorage.setItem('isTapIgnor', true)
    } catch (error) {

    }
}

export { trimBonsai }