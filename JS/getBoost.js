import NotificationManager from "./notifications.js"
const notificationManager = new NotificationManager()

document.addEventListener('DOMContentLoaded', () => {
    const boostCards = document.querySelectorAll('.get__boost__button')
    const popupOverlay = document.querySelector('.selected__store__card__overlay')
    const closeButton = document.querySelector('.close__popup__button')
    const selectedNote = document.querySelector('.selected__Cart__item__note__message')
    const noteContainer = document.querySelector('.selected__cart__item__note')

    function handleBuyItem() {
        notificationManager.createNotification('Предмет был успешно приобретён! ')
    }

    function fillPopupData(card) {
        const boostValue = card.closest('.boost__card').getAttribute('data-boost-value')
        const workTimeline = card.closest('.boost__card').getAttribute('data-work-timeline')
        const title = card.closest('.boost__card').getAttribute('data-title')
        const description = card.closest('.boost__card').getAttribute('data-description')
        const note = card.closest('.boost__card').getAttribute('data-note')
        const imageSrc = card.closest('.boost__card').querySelector('img').src

        const lightEllipse = popupOverlay.querySelector('.light__ellipse')
        const darkEllipse = popupOverlay.querySelector('.dark__ellipse')

        if (imageSrc && lightEllipse && darkEllipse) {
            const tempImg = new Image()
            tempImg.crossOrigin = 'Anonymous'
            tempImg.src = imageSrc

            tempImg.onload = () => {
                const colorThief = new ColorThief()
                const dominantColor = colorThief.getColor(tempImg)

                const lighterColor = lightenColor(dominantColor, 0.6)
                const darkerColor = darkenAndSaturate(dominantColor, 0.2, 1)

                lightEllipse.style.backgroundColor = `rgb(${lighterColor.join(',')})`
                darkEllipse.style.backgroundColor = `rgb(${darkerColor.join(',')})`
            }

            tempImg.onerror = () => {
                console.error('Не удалось загрузить изображение:', imageSrc)
            }
        }

        document.querySelector('.item__level').textContent = boostValue
        document.querySelector('.item__water__limit__value').textContent = `${workTimeline} работы`
        document.querySelector('.item__title').textContent = title
        document.querySelector('.item__description').textContent = description
        document.querySelector('.selected__store__card__item__preview img').src = imageSrc
        document.querySelector('.buy__item__button').addEventListener('click', handleBuyItem)

        if (note) {
            selectedNote.textContent = note
            noteContainer.style.display = 'flex'
        } else {
            noteContainer.style.display = 'none'
        }
    }

    boostCards.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
            fillPopupData(button)
            popupOverlay.style.display = 'flex'
        })
    })

    closeButton.addEventListener('click', () => {
        popupOverlay.style.display = 'none'
    })

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none'
        }
    })
})

function lightenColor([r, g, b], amount) {
    return [
        Math.min(255, r + (255 - r) * amount),
        Math.min(255, g + (255 - g) * amount),
        Math.min(255, b + (255 - b) * amount)
    ].map(Math.round)
}

function darkenAndSaturate(color, amount, saturationBoost) {
    const adjustedColor = adjustColor(color, -amount)
    return increaseSaturation(adjustedColor, saturationBoost)
}

function adjustColor([r, g, b], amount) {
    return [
        Math.max(0, Math.min(255, r + r * amount)),
        Math.max(0, Math.min(255, g + g * amount)),
        Math.max(0, Math.min(255, b + b * amount))
    ].map(Math.round)
}

function rgbToHsl(r, g, b) {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max === min) {
        h = s = 0
    } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6
    }

    return [h, s, l]
}

function hslToRgb(h, s, l) {
    let r, g, b
    if (s === 0) {
        r = g = b = l
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hueToRgb(p, q, h + 1 / 3)
        g = hueToRgb(p, q, h)
        b = hueToRgb(p, q, h - 1 / 3)
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

function hueToRgb(p, q, t) {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
}

function increaseSaturation([r, g, b], saturationBoost) {
    const [h, s, l] = rgbToHsl(r, g, b)
    const newS = Math.min(s + saturationBoost, 1)
    return hslToRgb(h, newS, l)
}