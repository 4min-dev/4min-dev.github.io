document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp.BackButton

    function initBackButton() {
        backButton.show()
        backButton.onClick(() => {
            history.back()
        })
    }

    if (window.location.pathname === "/home.html") {
        backButton.hide()
    } else {
        initBackButton()
    }

    document.querySelector('.hide__back__button').addEventListener('click', () => backButton.hide())
})