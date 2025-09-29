document.addEventListener('DOMContentLoaded', () => {
    alert('loaded')
    initializePage()
})

function initializePage() {
    const backButton = window.Telegram.WebApp.BackButton

    function initBackButton() {
        backButton.show()
        backButton.onClick(() => {
            history.back()
            window.location.reload()
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