document.addEventListener('DOMContentLoaded', () => {
    const webApp = window.Telegram.WebApp
    const themeParams = webApp.themeParams
    console.log(webApp)
    if (webApp.colorScheme === 'dark') {
        document.documentElement.style.setProperty('--primary__body__bg', themeParams.secondary_bg_color)
        document.documentElement.style.setProperty('--primary__theme__card__bg', themeParams.bg_color)
        document.documentElement.style.setProperty('--tg__theme__text__color', webApp.text_color)
        document.documentElement.style.setProperty('--color__primary', themeParams.button_color)
        document.documentElement.style.setProperty('--tg__theme__button__color', themeParams.button_color)
        document.documentElement.style.setProperty('--tg__theme__link__color', themeParams.button_color)
        document.documentElement.style.setProperty('--color__background', themeParams.bg_color)
        document.documentElement.style.setProperty('--primary__hint', themeParams.hint_color)
        document.documentElement.style.setProperty('--primary__input__background', themeParams.text_color)
        document.documentElement.style.setProperty('--primary__theme__border__color', themeParams.secondary_bg_color)
        document.documentElement.style.setProperty('--agreement__card__title__color', '#101828')
        document.documentElement.style.setProperty('--agreement__card__description__color', '#364153')
        document.documentElement.style.setProperty('--agreement__card__link__color', '#101828')
    }
})