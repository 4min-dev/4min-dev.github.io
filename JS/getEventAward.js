import NotificationManager from "./notifications.js"
const notificationManager = new NotificationManager()

document.addEventListener('DOMContentLoaded', () => {

    async function handleGetEventAward(event) {
        try {
            const card = event.target.closest('.event__card')
            if (!card) return

            const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/quests/takeReward?quest_id=${card.getAttribute('data-id')}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                const block = card.parentElement

                notificationManager.createNotification('Успешно!', 5000, true)

                card.remove()

                if (block && block.querySelector('.event__card') === null) {
                    block.remove()
                }
            }

            return response
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    function addEventAwardListeners() {
        document.querySelectorAll('.get__award__button:not([data-listener-attached])').forEach(button => {
            button.addEventListener('click', handleGetEventAward)
            button.setAttribute('data-listener-attached', 'true')
        })
    }

    addEventAwardListeners()

    const observer = new MutationObserver(() => {
        addEventAwardListeners()
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
})
