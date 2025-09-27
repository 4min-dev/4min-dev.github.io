document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp.BackButton

    function initBackButton() {
        backButton.show()
        backButton.onClick(() => history.back())
    }

    if (window.location.pathname === "/templates/home.html") {
        backButton.hide()
    } else {
        initBackButton()
    }
})