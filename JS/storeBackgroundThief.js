document.addEventListener('DOMContentLoaded', () => {
    const colorThief = new ColorThief()

    window.processStoreCards = function (cards) {
        cards.forEach(card => {
            const previewImage = card.querySelector('.store__card__item__preview img')
            if (!previewImage) {
                console.log('Изображение не найдено в карточке')
                return
            }

            const imgSrc = previewImage.src
            const tempImg = new Image()
            tempImg.crossOrigin = 'Anonymous'
            tempImg.src = imgSrc + '?t=' + Date.now()

            tempImg.onload = () => {
                try {
                    const dominantColor = colorThief.getColor(tempImg)
                    const lighterColor = lightenColor(dominantColor, 0.6)
                    const darkerColor = darkenAndSaturate(dominantColor, 0.2, 1)

                    const gradient = `linear-gradient(128.05deg, rgb(${lighterColor.join(',')}) 3.45%, rgb(${darkerColor.join(',')}) 88.77%)`
                    card.style.background = gradient
                } catch (error) {
                    console.log(`Ошибка при обработке цвета изображения: ${imgSrc}\n${error.message}`)
                }
            }

            tempImg.onerror = () => {
                console.log(`Не удалось загрузить изображение: ${imgSrc}`)
            }
        })
    }

    const storeContainers = document.querySelectorAll('.thief__container')
    if (!storeContainers) {
        return
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length > 0) {
                console.log('Добавленные узлы:', Array.from(mutation.addedNodes))
                const newCards = Array.from(mutation.addedNodes)
                    .filter(node => node.nodeType === Node.ELEMENT_NODE && node.matches('.card-with-background'))
                if (newCards.length > 0) {
                    window.processStoreCards(newCards)
                }
            }
        })
    })

    storeContainers.forEach((storeContainer) => observer.observe(storeContainer, { childList: true, subtree: true }))

    const existingCards = document.querySelectorAll('.card-with-background')
    window.processStoreCards(existingCards)
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
            case r: h = (g - b) / d + (g < b ? 6 : 0); break
            case g: h = (b - r) / d + 2; break
            case b: h = (r - g) / d + 4; break
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