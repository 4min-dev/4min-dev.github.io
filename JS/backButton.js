document.addEventListener('DOMContentLoaded', () => {
    const backButton = window.Telegram?.WebApp?.BackButton

    function initBackButton() {
        if (backButton) {
            backButton.show()
            backButton.onClick(() => {
                history.back()
            })
        }
    }

    function updateBackButton() {
        if (backButton) {
            if (window.location.pathname === "/home.html") {
                backButton.hide()
            } else {
                backButton.show()
                initBackButton()
            }
        }
    }

    updateBackButton()

    document.querySelectorAll('a[href^="/"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const href = link.getAttribute('href')
            history.pushState(null, null, href)
            updateBackButton()
        })
    })

    window.addEventListener('popstate', () => {
        updateBackButton()
    })

    document.querySelector('.hide__back__button')?.addEventListener('click', () => {
        if (backButton) {
            backButton.hide()
        }
    })
})