document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp.BackButton
    alert('tesss')
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

    document.addEventListener('pageshow', () => {
        alert('show')
    })
    document.querySelector('.hide__back__button').addEventListener('click', () => backButton.hide())
})