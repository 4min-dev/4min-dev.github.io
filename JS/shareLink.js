const shareButton = document.querySelector('.tg__navigate__button')

function shareLink() {

    if (window.Telegram && window.Telegram.WebApp) {
        const url = document.querySelector('.referal__link').getAttribute('data-link')
        const shareText = 'Присоединяйся и зарабатывай со мной!'

        const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`

        window.Telegram.WebApp.openTelegramLink(shareUrl)
    } else {
        console.error('Telegram Web App is not available')
        alert('Ошибка: Telegram Web App недоступен')
    }
}

shareButton.addEventListener('click', shareLink)