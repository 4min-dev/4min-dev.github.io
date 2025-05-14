import { getUserBonsai } from "./bonsai.js"
import { convertSeconds } from "./convertSeconds.js"
import formatNumberWithZeros from "./formatNumbersWithZeros.js"
import NotificationManager from "./notifications.js"
const notifications = new NotificationManager()
import { trimBonsai } from "./trimBonsai.js"

function useDebounce({ callback, delay }) {
    let timer = null

    return function debouncedCallback(...args) {
        if (timer !== null) {
            clearTimeout(timer)
        }

        timer = setTimeout(async () => {
            try {
                await callback(...args)
            } catch (error) {
                console.error('Error in debounced callback:', error)
            }
        }, delay)
    }
}

function isMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}


const waterCountElement = document.querySelector('.current__water__count')
const totalWaterCountElement = document.querySelector('.total__wtaer__count')
const balanceValueElement = document.querySelector('.balance-value')
const coinContainer = document.querySelector('.coin-container')
const addButton = document.querySelector('.bonsai__image__container')
const getBonsaiPopupContainer = document.querySelector('.get__bonsai__popup__container')
const getBonsaiButton = document.querySelector('.get__bonsai__token__button')
const timeoutBonsaiBlockPopup = document.querySelector('.timeout__block__popup__overlay')
const trimTimeoutBonsaiValue = document.querySelector('.trim__timeout__value')

let perTapTokens
let currentBalance = 0
let waterAmount
let totalWaterAmount

let clickCount = 0
let clickTimeout = null

function handleAddBalance() {
    const amountToAdd = perTapTokens
    const newBalance = currentBalance + amountToAdd

    if (waterAmount > 0) {
        updateBalance(newBalance)
        createCoin()
    }
}

addButton.addEventListener('pointerdown', () => {
    clickCount++

    if (clickTimeout) {
        clearTimeout(clickTimeout)
    }

    clickTimeout = setTimeout(async () => {
        try {
            console.log('Sending request with click count:', clickCount);

            const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/game/water?count=${clickCount}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            const data = await response.json();

            if (response.status !== 200) {
                notifications.createNotification(data.detail, 5000, false)
            }

            if (data.can_be_harvested) {
                getBonsaiPopupContainer.classList.add('visible')
                getBonsaiButton.addEventListener('click', trimBonsai)

                const timeToTrim = convertSeconds(data.time_per_harvest)
                if (timeToTrim) {
                    getBonsaiPopupContainer.querySelector('.get__bonsai__trim__timeout').textContent = timeToTrim
                }
                return
            }

            clickCount = 0
            getUserBonsai()

            return response
        } catch (error) {
            console.log(error)
        }
    }, 250)
})

function createCoin() {
    const coin = document.createElement('div')
    coin.classList.add('coin')
    const randomX = Math.random() * (window.innerWidth - 20)
    coin.style.left = `${randomX}px`
    coinContainer.appendChild(coin)

}

function updateBalance(amount) {
    const currentBalance = Number(balanceValueElement.textContent.replace(/\s/g, ""))
    const newBalance = Math.ceil(currentBalance + amount)

    const formattedBalance = formatNumberWithZeros(newBalance)

    balanceValueElement.innerHTML = formattedBalance

    waterAmount = waterAmount - 1
    updateWaterValue()
}

if (isMobileDevice()) {
    addButton.addEventListener('touchstart', handleAddBalance)
} else {
    addButton.addEventListener('click', handleAddBalance)
}

// async function getTrimStatus() {
//     try {
//         const response = await fetch('https://tapalka.wizardstech.ru:8443/api/game/trim', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         })

//         if (!response.ok) {
//             console.log(response)
//             throw new Error(`HTTP err Status: ${response.status}`)
//         }

//         const data = await response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

async function getUserWater() {
    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me', {
            method: 'GET',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })

        if (!response.ok) {
            throw new Error(`HTTP err Status: ${response.status}`)
        }

        const data = await response.json()
        const userWaterAmount = data.water_count
        const userWaterAmountTotal = data.total_water_count
        const userTapTokens = data.tokens_per_tap
        perTapTokens = userTapTokens

        waterAmount = userWaterAmount
        totalWaterAmount = userWaterAmountTotal

        updateWaterValue()
        totalWaterCountElement.textContent = totalWaterAmount
    } catch (error) {
        console.log(error)
    }
}

getUserWater()

function updateWaterValue() {
    waterCountElement.textContent = waterAmount
}

export { getUserWater }