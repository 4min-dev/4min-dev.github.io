document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp.BackButton

    function initBackButton() {
        backButton.show()
        backButton.onClick(() => history.back())
    }
    alert(window.location.pathname)
    if (window.location.pathname === "/templates/home.html") {
        backButton.hide()
    } else {
        initBackButton()
    }
})