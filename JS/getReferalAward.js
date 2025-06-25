import NotificationManager from "./notifications.js"

const notificationManager = new NotificationManager()

function setupAwardButtonListeners() {
    document.querySelectorAll('.get__award__button').forEach(button => {
        button.addEventListener('click', async (event) => {
            const card = event.target.closest('.leaderboard__card')
            if (!card) return

            const getAwardButton = card.querySelector('.get__award__button')
            if (getAwardButton) {
                try {
                    const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/users/referrals/getReward?ref_tg_id=${card.getAttribute('data-id')}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                    })
                    const data = await response.json()

                    console.log(data)

                    if (response.ok) {
                        notificationManager.createNotification('Успешно!', 5000, true)
                        getAwardButton.outerHTML = `
                        <button type="button" class="received__award__button">
                            Получено
                        </button>
                    `
                    }

                    return data
                } catch (error) {
                    console.log(`Error: ${error}`)
                    notificationManager.createNotification('Ошибка!', 5000, false)
                }
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setupAwardButtonListeners()

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE && node.matches('.leaderboard__card')) {
                        setupAwardButtonListeners()
                    }
                })
            }
        }
    })

    observer.observe(document.body, { childList: true, subtree: true })
})