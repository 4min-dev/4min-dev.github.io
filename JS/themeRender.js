document.addEventListener('DOMContentLoaded', () => {
    const webApp = window.Telegram.WebApp
    console.log(webApp)
    if (webApp.colorScheme === 'dark') {
        document.documentElement.style.setProperty('--primary__body__bg', '#0f0f0f')
        document.documentElement.style.setProperty('--primary__theme__card__bg', '#212121')
        document.documentElement.style.setProperty('--tg__theme__text__color', '#FFFFFF')
        document.documentElement.style.setProperty('--color__primary', 'rgba(135,116,225)')
        document.documentElement.style.setProperty('--tg__theme__button__color', 'rgba(135,116,225)')
        document.documentElement.style.setProperty('--tg__theme__link__color', 'rgba(135,116,225)')
        document.documentElement.style.setProperty('--color__background', '#212121')
    }
})