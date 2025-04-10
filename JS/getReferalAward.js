import NotificationManager from "./notifications.js"
const notificationManager = new NotificationManager()

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.get__award__button').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.leaderboard__card')
            if (!card) return

            notificationManager.createNotification('Успешно!')

            const getAwardButton = card.querySelector('.get__award__button')
            if (getAwardButton) {
                getAwardButton.outerHTML = `
                    <button type="button" class="received__award__button">
                        Получено
                    </button>
                `
            }
        })
    })
})