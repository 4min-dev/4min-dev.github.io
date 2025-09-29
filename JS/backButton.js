document.addEventListener('DOMContentLoaded', () => {
    initializePage()
    alert('loaded')
    alert(location.pathname)
})

window.addEventListener('pageshow', (event) => {
    alert('page show')
    alert(location.pathname)
    if (event.persisted) {
        alert('persisted')
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