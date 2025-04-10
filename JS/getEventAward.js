import NotificationManager from "./notifications.js"
const notificationManager = new NotificationManager()

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.get__award__button').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.event__card')
            if (!card) return

            const block = card.parentElement
    
            notificationManager.createNotification('Успешно!')

            card.remove()

            if (block && block.querySelector('.event__card') === null) {
                block.remove()
            }
        })
    })
})