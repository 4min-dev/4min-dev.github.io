document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp.BackButton

    function initBackButton() {
        backButton.show()
        backButton.onClick(() => {
            alert(window.location.pathname)
            history.back()
        })
    }

    if (window.location.pathname === "/home.html") {
        backButton.hide()
    } else {
        initBackButton()
    }
})