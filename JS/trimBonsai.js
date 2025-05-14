import { formatDuration } from "./formatDuration.js"

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
        const formattedTrimTimeout = formatDuration(data.harvest_remaining_seconds)

        getBonsaiPopupContainer.classList.remove('visible')
        timeoutBonsaiBlockPopup.classList.add('visible')

        trimTimeoutBonsaiValue.setAttribute('data-timeout', formattedTrimTimeout)
    } catch (error) {

    }
}

export { trimBonsai }