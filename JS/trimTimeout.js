import { getUserBonsai } from "./bonsai.js"
import formatNumbersWithZeros from "./formatNumbersWithZeros.js"
import NotificationManager from "./notifications.js"
const notifications = new NotificationManager()

document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.querySelector('.trim__timeout__value')
    const balanceValueElement = document.querySelector('.balance-value')
    const timeoutPopup = document.querySelector('.timeout__block__popup__overlay')
    const collectBonsaiPopupContainer = document.querySelector('.collect__bonsai__popup__container')
    const collectBonsaiButton = document.querySelector('.get__collect__bonsai__button')
    const initData = window.Telegram.WebApp.initData

    if (!timerElement || !timerElement.hasAttribute('data-timeout')) {
        console.log('Атрибут data-timeout отсутствует. Таймер не запущен.')
        return
    }

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
            }
            return data
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    async function fetchToCollectStatus() {
        try {
            const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/game/trim/status`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            const data = await response.json()

            console.log(data)
            console.log(response)

            if (data.is_complete) {
                collectBonsaiPopupContainer.classList.add('visible')
                collectBonsaiButton.addEventListener('click', handleCollectBonsai)
            }

            return data
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    function startTimer() {
        const timeoutValue = timerElement.getAttribute('data-timeout')

        const [minutes, seconds] = timeoutValue.split(':').map(Number)

        let totalSeconds = minutes * 60 + seconds

        if (window.timerInterval) {
            clearInterval(window.timerInterval)
        }

        function updateTimer() {
            if (totalSeconds <= 0) {
                getUserBonsai()
                clearInterval(window.timerInterval)
                timeoutPopup.classList.remove('visible')

                setTimeout(async () => {
                    await fetchToCollectStatus()
                }, 2000)

                return
            }


            const mins = Math.floor(totalSeconds / 60)
            const secs = totalSeconds % 60

            timerElement.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

            totalSeconds--
        }

        window.timerInterval = setInterval(updateTimer, 1000)

        updateTimer()
    }

    startTimer()

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-timeout') {
                console.log('Атрибут data-timeout изменен. Перезапуск таймера.')
                startTimer()
            }
        }
    })

    if (timerElement) {
        observer.observe(timerElement, {
            attributes: true,
        })
    }
})