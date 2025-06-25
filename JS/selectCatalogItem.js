import { getUserBonsai } from "./bonsai.js"
import { getGardenItems } from "./getGardenItems.js"
import NotificationManager from "./notifications.js"
import { getUserWater } from "./tap.js"
import { fetchUserData } from "./userData.js"
const notificationManager = new NotificationManager()

document.addEventListener("DOMContentLoaded", () => {
    function setupButtonHandlers() {
        document.querySelectorAll(".get__store__card__button").forEach((button) => {
            if (!button.hasAttribute("data-event-listener-added")) {
                button.addEventListener("click", handleButtonClick)
                button.setAttribute("data-event-listener-added", "true")
            }
        })
    }

    function handleButtonClick() {
        const popupId = this.dataset.popupId
        const storeCard = this.closest(".store__card")
        const previewImageSrc = storeCard.dataset.previewImage

        const popup = document.querySelector(`[data-id="${popupId}"]`)
        if (!popup) return

        const lightEllipse = popup.querySelector(".light__ellipse")
        const darkEllipse = popup.querySelector(".dark__ellipse")

        if (lightEllipse && darkEllipse && previewImageSrc) {
            const tempImg = new Image()
            tempImg.crossOrigin = "Anonymous"
            tempImg.src = previewImageSrc

            tempImg.onload = () => {
                const colorThief = new ColorThief()
                const dominantColor = colorThief.getColor(tempImg)

                const lighterColor = lightenColor(dominantColor, 0.6)
                const darkerColor = darkenAndSaturate(dominantColor, 0.2, 1)

                lightEllipse.style.backgroundColor = `rgb(${lighterColor.join(",")})`
                darkEllipse.style.backgroundColor = `rgb(${darkerColor.join(",")})`
            }

            tempImg.onerror = () => {
                console.error("Не удалось загрузить изображение:", previewImageSrc)
            }
        }

        console.log(storeCard)

        const level = storeCard.dataset.level
        const boostEffect = storeCard.dataset.boostEffect
        const maxLimit = storeCard.dataset.maxLimit
        const title = storeCard.dataset.title
        const description = storeCard.dataset.description
        const etaps = JSON.parse(storeCard.dataset.etaps)
        const priceToImprove = storeCard.dataset.priceToImprove
        const middleLevel = etaps[Math.floor(etaps.length / 2)].level
        const lastLevel = etaps[Math.floor(etaps.length - 1)].level
        const levelInfo = JSON.parse(storeCard.dataset.levelInfo)

        const currentPopupLevel = popup.querySelector(".current__level")
        const middlePopupLevel = popup.querySelector('.middle__level')
        const lastPopupLevel = popup.querySelector('.last__level')

        const waterLimitValue = popup.querySelector(".item__water__limit__value")
        currentPopupLevel.textContent = `${level} ур.`
        middlePopupLevel.textContent = `${middleLevel} ур.`
        lastPopupLevel.textContent = `${lastLevel} ур.`

        if (level >= middleLevel) {
            middlePopupLevel.classList.add('achieved')
        }

        if (level === lastLevel) {
            lastPopupLevel.classList.add('achieved')
        }

        const popupDotsContainer = document.querySelector('.item__experience__path__wrapper')
        popupDotsContainer.innerHTML = ``

        function createDot(etap) {
            const dotElement = document.createElement('div')
            dotElement.classList.add('experience__dot')
            console.log(etap.level)
            console.log(level)

            if (level >= etap.level - 1) {

                dotElement.classList.add('achieved')
            }

            popupDotsContainer.appendChild(dotElement)
        }

        levelInfo.forEach((etap, index) => {
            if (index >= 2 && index <= levelInfo.length - 2) {
                createDot(etap)
            }
        })

        const itemLevel = popup.querySelector(".item__level")
        itemLevel.textContent = `${level} ур.`

        waterLimitValue.innerHTML = `<span class="mono">+${boostEffect}</span>`

        const itemTitle = popup.querySelector(".item__title")
        itemTitle.textContent = title

        const itemDescription = popup.querySelector(".item__description")
        itemDescription.textContent = description

        const improvePrice = popup.querySelector(".improve__price__container span")
        improvePrice.textContent = priceToImprove

        const itemPreview = popup.querySelector(".selected__store__card__item__preview img")
        itemPreview.src = previewImageSrc
        itemPreview.alt = title

        const experienceEtapPreviews = document.querySelectorAll(".item__experience__etap__preview")

        etaps.forEach((etap, index) => {

            experienceEtapPreviews[index].querySelector('.preview').setAttribute('src', etap.imgUrl)
        })

        popup.setAttribute('data-item-id', storeCard.getAttribute('data-item-id'))
        popup.querySelector(".improve__item__button").addEventListener("click", handleImproveItem)

        popup.classList.add("active")
    }

    async function handleImproveItem() {

        const selectedStoreItemPopup = document.querySelector('.garden__popup__overlay')
        const productUuid = selectedStoreItemPopup.getAttribute('data-item-id')

        try {
            const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/garden/upgrade?user_garden_product_id=${productUuid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            const data = await response.json()
            fetchUserData()
            getUserBonsai()
            getUserWater()

            if (data.detail) {
                if (!response.ok) {
                    notificationManager.createNotification(`${data.detail}`, 5000, false)
                } else if (response.ok) {
                    getGardenItems(true)
                    notificationManager.createNotification("Предмет был успешно улучшен!", 5000, true)
                }
            }

            return data
        } catch (error) {
            console.error(`Error: ${error}`)
            notificationManager.createNotification("При улучшении произошла ошибка!", 5000, false)
        } finally {
            selectedStoreItemPopup.classList.remove('visible')
        }
    }

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
                setupButtonHandlers()
            }
        }
    })

    const container = document.body
    observer.observe(container, { childList: true, subtree: true })

    setupButtonHandlers()
})

function lightenColor([r, g, b], amount) {
    return [
        Math.min(255, r + (255 - r) * amount),
        Math.min(255, g + (255 - g) * amount),
        Math.min(255, b + (255 - b) * amount),
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
        Math.max(0, Math.min(255, b + b * amount)),
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
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
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