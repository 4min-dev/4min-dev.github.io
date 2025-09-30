document.addEventListener('DOMContentLoaded', () => {
    initializePage()
})

function initializePage() {
    const backButton = window.Telegram.WebApp.BackButton

    function initBackButton() {
        backButton.show()

        if (window.location.pathname === '/userAgreement.html') {
            backButton.onClick(() => {
                window.history.back()
            })
        } else {
            backButton.onClick(() => {

                const previousPage = document.referrer || window.history.state?.url || '/'
                const urlWithNoCache = previousPage.includes('?')
                    ? `${previousPage}&nocache=${Date.now()}`
                    : `${previousPage}?nocache=${Date.now()}`
                window.location.replace(urlWithNoCache)
            })
        }
    }

    if (window.location.pathname === "/home.html") {
        backButton.hide()
    } else {
        backButton.hide()
        initBackButton()
    }

    document.querySelector('.hide__back__button').addEventListener('click', () => backButton.hide())
}