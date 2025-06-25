import { getUserBonsai } from "./bonsai.js"
import { handleGetBoostItems } from "./getBoosters.js"
import NotificationManager from "./notifications.js"
import { fetchUserData } from "./userData.js"
const notificationManager = new NotificationManager()

document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.querySelector('.selected__store__card__overlay')
    const closeButton = document.querySelector('.close__popup__button')
    const selectedNote = document.querySelector('.selected__Cart__item__note__message')
    const noteContainer = document.querySelector('.selected__cart__item__note')
    let currentBoosterId = null

    async function handleBuyItem() {
        try {
            const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/boosters/purchase?boost_id=${currentBoosterId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })

            console.log(response)

            const data = await response.json()

            console.log(data)

            if (response.status === 200 && data.message) {
                notificationManager.createNotification(data.message, 5000, true)
            } else if (data.detail) {
                notificationManager.createNotification(data.detail, 5000, false)
            }

            await handleGetBoostItems()

            getUserBonsai()
            fetchUserData()

            document.querySelector('.selected__store__card__overlay').classList.remove('visible')
            return data
        } catch (error) {
            console.log(`Error: ${error}`)
            notificationManager.createNotification('Произошла ошибка! ', 5000, false)
        }
    }

    async function fillPopupData(card) {
        const boostCard = card.closest('.boost__card')

        const boostValue = boostCard.getAttribute('data-boost-value')
        const workTimeline = boostCard.getAttribute('data-work-timeline')
        const title = boostCard.getAttribute('data-title')
        const description = boostCard.getAttribute('data-description')
        const note = boostCard.getAttribute('data-note')
        const imageSrc = boostCard.querySelector('img').src
        const boostPrice = boostCard.getAttribute('data-price')
        const boosterId = boostCard.getAttribute('data-id')

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

        currentBoosterId = boosterId

        if (boostCard.classList.contains('isBought')) {
            document.querySelector('.buy__item__button').querySelector('.improve__price__container').querySelector('.price__value').textContent = `Предмет активирован`
            document.querySelector('.buy__item__button').setAttribute('disabled', '')
        } else {
            document.querySelector('.buy__item__button').removeAttribute('disabled')
            document.querySelector('.buy__item__button').querySelector('.improve__price__container').querySelector('.price__value').textContent = boostPrice
            document.querySelector('.buy__item__button').addEventListener('click', handleBuyItem)
        }

        if (note !== 'null') {
            selectedNote.textContent = note
            noteContainer.style.display = 'flex'
        } else {
            noteContainer.style.display = 'none'
        }
    }

    function attachClickHandler(button) {
        fillPopupData(button.currentTarget.closest('.store__card'))
    }


    closeButton.addEventListener('click', () => {
        popupOverlay.style.display = 'none'
    })

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none'
        }
    })

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.matches('.boost__card')) {
                        const boostButtons = document.querySelectorAll('.get__boost__button')
                        boostButtons.forEach((button) => button.addEventListener('click', attachClickHandler))
                    } else {
                        const boostButtons = document.querySelectorAll('.get__boost__button')
                        boostButtons.forEach((button) => button.addEventListener('click', attachClickHandler))
                    }
                }
            })
        }
    })

    observer.observe(document.body, { childList: true, subtree: true })
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