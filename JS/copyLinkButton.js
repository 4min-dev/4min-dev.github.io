import NotificationManager from './notifications.js'
const notificationManager = new NotificationManager()


document.addEventListener('DOMContentLoaded', () => {
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
    }

    function setupCopyButtons() {
        document.querySelectorAll('.copy__link__button').forEach(button => {
            button.addEventListener('click', () => {
                const linkElement = button.closest('.link__with__copy__container')
                    ?.querySelector('.link__to__copy')

                if (linkElement && linkElement.hasAttribute('data-link')) {
                    const link = linkElement.getAttribute('data-link')
                    copyToClipboard(link)

                    notificationManager.createNotification('Ссылка сохранена', 5000, true)
                }
            })
        })
    }

    setupCopyButtons()
})