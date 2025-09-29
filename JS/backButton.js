document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp.BackButton
    alert('tessbs')
    function initBackButton() {
        backButton.show()
        backButton.onClick(() => {
            history.back()
            alert(window.location.pathname)
        })
    }

    if (window.location.pathname === "/home.html") {
        backButton.hide()
    } else {
        initBackButton()
    }
    document.querySelector('.hide__back__button').addEventListener('click', () => backButton.hide())
})

document.addEventListener('pageshow', () => {
    alert('show')
})