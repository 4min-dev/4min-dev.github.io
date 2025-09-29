document.addEventListener('DOMContentLoaded', () => {
    initializePage()
})

window.addEventListener('pageshow', (event) => {
    const currentPath = window.location.pathname
    const lastPath = sessionStorage.getItem('lastPath')

    if (!sessionStorage.getItem('hasReloaded') || lastPath !== currentPath) {
        sessionStorage.setItem('hasReloaded', 'true')
        sessionStorage.setItem('lastPath', currentPath)
        alert('reload')
        window.location.reload()
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
        initBackButton()
    }

    document.querySelector('.hide__back__button').addEventListener('click', () => backButton.hide())
}