import { convertSeconds } from "./convertSeconds.js"
import { formatDuration } from "./formatDuration.js"
import formatNumbersWithZeros from "./formatNumbersWithZeros.js"
import { getProfileData } from "./getProfileData.js"
import NotificationManager from "./notifications.js"
const notifications = new NotificationManager()
import { trimBonsai } from "./trimBonsai.js"


const userStageExperience = document.querySelectorAll('.user__profile__stage__container')
const bonsaiElement = document.querySelector('#bonsai__main')
const getBonsaiPopupContainer = document.querySelector('.get__bonsai__popup__container')
const getBonsaiButton = document.querySelector('.get__bonsai__token__button')
const timeoutBonsaiBlockPopup = document.querySelector('.timeout__block__popup__overlay')
const trimTimeoutBonsaiValue = document.querySelector('.trim__timeout__value')
const collectBonsaiPopupContainer = document.querySelector('.collect__bonsai__popup__container')
const collectBonsaiButton = document.querySelector('.get__collect__bonsai__button')
const balanceValueElement = document.querySelector('.balance-value')

const initData = window.Telegram.WebApp.initData
const animationsValue = localStorage.getItem('animations-value')

if (!animationsValue && animationsValue !== false) {
    localStorage.setItem('animations-value', true)
}

const bonsaiData = [
    {
        id: 1,
        value: 'seed',
        img: '/static/img/bonsai-1.png',
        stageEtap: 1
    },

    {
        id: 2,
        value: 'sprout',
        img: '/static/img/bonsai-2.png',
        stageEtap: 2
    },

    {
        id: 3,
        value: 'young',
        img: '/static/img/bonsai-3.png',
        stageEtap: 3
    },

    {
        id: 4,
        value: 'mature',
        img: '/static/img/bonsai-4.png',
        stageEtap: 4
    }
]

let bonsaiStage
let waterCount

async function handleCollectBonsai() {
    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/game/collect', {
            method: 'POST',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            headers: {
                'initData': initData
            }
        })

        const data = await response.json()

        if (response.ok && data.message) {
            notifications.createNotification(data.message, 5000, true)
        }

        if (data.tokens_earned) {
            const currentBalance = Number(balanceValueElement.textContent.replace(/\s/g, ""))
            const newBalance = Math.ceil(currentBalance + data.tokens_earned)

            const formattedBalance = formatNumbersWithZeros(newBalance)
            balanceValueElement.innerHTML = formattedBalance

            collectBonsaiPopupContainer.classList.remove('visible')
            await getProfileData()
        }

        return data
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

async function plantBonsai() {
    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/game/plant', {
            method: 'POST',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        return response.json()
    } catch (error) {
        console.log(`Plant error ${error}`)
    }
}

const getUserBonsai = async () => {
    localStorage.removeItem('isTapIgnor')

    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/game/bonsai', {
            method: 'GET',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            headers: {
                'initData': initData
            }
        })

        const responses = await fetch(`https://tapalka.wizardstech.ru:8443/api/game/trim/status`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        console.log(await responses.json())

        if (!response.ok) {
            console.log(`HTTP err Status: ${response.status}`)
        }

        const data = await response.json()

        if (data.can_be_harvested) {
            getBonsaiPopupContainer.classList.add('visible')
            getBonsaiButton.addEventListener('click', trimBonsai)

            const timeToTrim = convertSeconds(data.time_per_harvest)
            if (timeToTrim) {
                getBonsaiPopupContainer.querySelector('.get__bonsai__trim__timeout').textContent = timeToTrim
            }
            return
        }

        if (data.is_harvesting && timeoutBonsaiBlockPopup) {
            const formattedTrimTimeout = formatDuration(data.harvest_remaining_seconds)

            getBonsaiPopupContainer.classList.remove('visible')
            timeoutBonsaiBlockPopup.classList.add('visible')

            trimTimeoutBonsaiValue.setAttribute('data-timeout', formattedTrimTimeout)
        }

        bonsaiStage = data.stage
        waterCount = data.water_count

        const currentBonsai = bonsaiData.find((bonsai) => bonsai.value === bonsaiStage)

        if (currentBonsai) {
            bonsaiElement.setAttribute('src', currentBonsai.img)

            userStageExperience.forEach((stageExperience) => {
                stageExperience.querySelectorAll('.user__profile__stage').forEach((stage, index) => {
                    if ((index + 1) <= currentBonsai.stageEtap) {
                        stage.classList.add('filled')
                    } else {
                        stage.classList.remove('filled')
                    }
                })
            })
        } else {
            plantBonsai()
        }

        console.log(data)
    } catch (error) {
        console.error('Err fetching:', error)
    }
}

getUserBonsai()


export { getUserBonsai }