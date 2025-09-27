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
        document.documentElement.style.setProperty('--primary__hint', '#AAAAAA')
        document.documentElement.style.setProperty('--primary__input__background', '#212121')
        document.documentElement.style.setProperty('--primary__theme__border__color', '#0f0f0f')
        document.documentElement.style.setProperty('--agreement__card__title__color', '#364153')
        document.documentElement.style.setProperty('--agreement__card__description__color', '#101828')
        document.documentElement.style.setProperty('--agreement__card__link__color', '#101828')
    }
})