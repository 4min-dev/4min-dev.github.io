document.addEventListener('DOMContentLoaded', () => {
    alert('Initial')
    initializePage()
})

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload()
    } else {
        initializePage()
    }
})

function initializePage() {
    const backButton = window.Telegram.WebApp.BackButton

    function initBackButton() {
        backButton.show()
        backButton.onClick(() => {
            history.back()
        })
    }

    if (window.location.pathname === "/home.html") {
        backButton.hide()
    } else {
        backButton.hide()
        initBackButton()
    }

    document.querySelector('.hide__back__button').addEventListener('click', () => backButton.hide())
}