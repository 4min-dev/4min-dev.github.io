export default class NotificationManager {
    constructor(containerSelector = '.notifications__container') {
        this.container = document.querySelector(containerSelector)
        if (!this.container) {
            throw new Error('Указанного контейнера для уведомлений не существует')
        }
    }

    createNotification(message, duration = 5000) {
        const notification = this.createNotificationElement(message)
        this.container.prepend(notification)

        setTimeout(() => this.hideNotification(notification), duration)
    }

    createNotificationElement(message) {
        const notification = document.createElement('div')
        notification.className = 'notification flex align__center justify__space__between'
        notification.style.opacity = '1'
        notification.style.transform = 'translateY(0)'
        notification.innerHTML = `
            <div class="notification__container flex align__center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="6.375" y="7.125" width="11.625" height="9.375" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM15.61 10.186C15.67 10.1061 15.7134 10.0149 15.7377 9.91795C15.762 9.82098 15.7666 9.72014 15.7514 9.62135C15.7361 9.52257 15.7012 9.42782 15.6489 9.3427C15.5965 9.25757 15.5276 9.18378 15.4463 9.12565C15.3649 9.06753 15.2728 9.02624 15.1753 9.00423C15.0778 8.98221 14.9769 8.97991 14.8785 8.99746C14.7801 9.01501 14.6862 9.05205 14.6023 9.10641C14.5184 9.16077 14.4462 9.23135 14.39 9.314L11.154 13.844L9.53 12.22C9.38783 12.0875 9.19978 12.0154 9.00548 12.0188C8.81118 12.0223 8.62579 12.101 8.48838 12.2384C8.35097 12.3758 8.27225 12.5612 8.26882 12.7555C8.2654 12.9498 8.33752 13.1378 8.47 13.28L10.72 15.53C10.797 15.6069 10.8898 15.6662 10.992 15.7036C11.0942 15.7411 11.2033 15.7559 11.3118 15.7469C11.4202 15.738 11.5255 15.7055 11.6201 15.6519C11.7148 15.5982 11.7967 15.5245 11.86 15.436L15.61 10.186Z"
                        fill="#0AC20A" />
                </svg>
                <span class="notification__message">${message}</span>
            </div>
            <button type="button" class="close__notification__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7L17 17M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        `

        const closeButton = notification.querySelector('.close__notification__button')
        closeButton.addEventListener('click', () => this.hideNotification(notification))

        return notification
    }

    hideNotification(notification) {
        notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
        notification.style.opacity = '0'
        notification.style.transform = 'translateY(20px)'
        setTimeout(() => {
            notification.remove()
        }, 300)
    }
}