document.addEventListener('DOMContentLoaded', () => {
    const webApp = window.Telegram.WebApp
    console.log(webApp)
    if (webApp.colorScheme === 'dark') {
        document.documentElement.style.setProperty('--primary__body__bg', webApp.secondary_bg_color)
        document.documentElement.style.setProperty('--primary__theme__card__bg', webApp.bg_color)
        document.documentElement.style.setProperty('--tg__theme__text__color', webApp.text_color)
        document.documentElement.style.setProperty('--color__primary', webApp.button_color)
        document.documentElement.style.setProperty('--tg__theme__button__color', webApp.button_color)
        document.documentElement.style.setProperty('--tg__theme__link__color', webApp.button_color)
        document.documentElement.style.setProperty('--color__background', webApp.bg_color)
        document.documentElement.style.setProperty('--primary__hint', webApp.hint_color)
        document.documentElement.style.setProperty('--primary__input__background', webApp.text_color)
        document.documentElement.style.setProperty('--primary__theme__border__color', webApp.secondary_bg_color)
        document.documentElement.style.setProperty('--agreement__card__title__color', '#101828')
        document.documentElement.style.setProperty('--agreement__card__description__color', '#364153')
        document.documentElement.style.setProperty('--agreement__card__link__color', '#101828')
    }
})