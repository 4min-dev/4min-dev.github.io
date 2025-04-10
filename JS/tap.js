import formatNumberWithZeros from "./formatNumbersWithZeros.js"

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

function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600)
    if (hours > 0) {
        return `${hours}ч`
    }

    const minutes = Math.floor(seconds / 60)
    if (minutes > 0) {
        return `${minutes}м`
    }

    return `${seconds}с`
}

document.addEventListener('DOMContentLoaded', () => {
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

    function formatDuration(seconds) {
        if (seconds < 0) {
            throw new Error("Время не может быть отрицательным")
        }

        const hours = Math.floor(seconds / 3600)
        const remainingSecondsAfterHours = seconds % 3600
        const minutes = Math.floor(remainingSecondsAfterHours / 60)
        const remainingSeconds = remainingSecondsAfterHours % 60

        if (hours > 0) {
            return `${hours}:${minutes}`
        } else {
            return `${minutes}:${remainingSeconds}`
        }
    }

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

    const debouncedLog = useDebounce({
        callback: async () => {
            try {
                const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/game/water?count=${5}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })

                const data = await response.json()
                if (data.detail === "Бонсай достиг последней стадии роста. Нельзя поливать." || data.can_be_harvested) {
                    getBonsaiPopupContainer.classList.add('visible')
                    getBonsaiButton.addEventListener('click', trimBonsai)

                    const timeToTrim = convertSeconds(data.time_per_harvest)
                    if (timeToTrim) {
                        getBonsaiPopupContainer.querySelector('.get__bonsai__trim__timeout').textContent = timeToTrim
                    }
                    return
                }

                console.log(data)
                return response
            } catch (error) {
                console.log(error)
            }
        },
        delay: 500,
    })

    addButton.addEventListener('click', () => {
        debouncedLog()
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
        const newBalance = currentBalance + amount

        const formattedBalance = formatNumberWithZeros(newBalance)

        balanceValueElement.innerHTML = formattedBalance

        waterAmount = waterAmount - 1
        updateWaterValue()
    }

    if (isMobileDevice()) {
        addButton.addEventListener('touchstart', () => {
            const amountToAdd = perTapTokens
            const newBalance = currentBalance + amountToAdd
            updateBalance(newBalance)
            createCoin()
        })
    } else {
        addButton.addEventListener('click', () => {
            const amountToAdd = perTapTokens
            const newBalance = currentBalance + amountToAdd
            updateBalance(newBalance)
            createCoin()
        })
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
        if (waterAmount <= 0) {
            // waterCountElement.textContent = 0
            // getBonsaiPopupContainer.classList.add('visible')

            // getTrimStatus()
            return
        } else {
            waterCountElement.textContent = waterAmount
        }
    }
})