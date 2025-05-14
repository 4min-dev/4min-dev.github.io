document.addEventListener('DOMContentLoaded', () => {
    const backButton = Telegram.WebApp.BackButton

    backButton.show()

    backButton.onClick(() => {
        window.location.href = '/templates/main.html'
    })
})