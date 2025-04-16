import NotificationManager from "./notifications.js"
const notificationManager = new NotificationManager()

function setupRewardButtons(container = document) {
    container.querySelectorAll('.get__reward__button').forEach(button => {
        if (button.dataset.bound) return
        button.dataset.bound = true

        button.addEventListener('click', (event) => {
            const card = event.target.closest('.daily__reward__card')
            if (!card || !card.classList.contains('ready__to__get')) {
                return
            }

            const day = card.getAttribute('data-day')
            button.textContent = `День ${day}`
            card.classList.remove('ready__to__get')

            const rewardValue = card.querySelector('.daily__reward__value')

            if (rewardValue) {
                const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                newSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
                newSvg.setAttribute('width', '31')
                newSvg.setAttribute('height', '24')
                newSvg.setAttribute('viewBox', '0 0 31 24')
                newSvg.setAttribute('fill', 'none')

                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                g.setAttribute('filter', 'url(#filter0_d_508_283)')
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                path.setAttribute('d', 'M6.5 12L12.5004 17.6842L24.5 6.3158')
                path.setAttribute('stroke', '#17C8B6')
                path.setAttribute('stroke-width', '3')
                path.setAttribute('stroke-linecap', 'round')
                path.setAttribute('stroke-linejoin', 'round')
                g.appendChild(path)
                newSvg.appendChild(g)

                const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
                const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter')
                filter.setAttribute('id', 'filter0_d_508_283')
                filter.setAttribute('x', '0.3')
                filter.setAttribute('y', '0.115796')
                filter.setAttribute('width', '30.4')
                filter.setAttribute('height', '23.7684')
                filter.setAttribute('filterUnits', 'userSpaceOnUse')
                filter.setAttribute('color-interpolation-filters', 'sRGB')

                const feFlood = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood')
                feFlood.setAttribute('flood-opacity', '0')
                feFlood.setAttribute('result', 'BackgroundImageFix')
                const feColorMatrix1 = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix')
                feColorMatrix1.setAttribute('in', 'SourceAlpha')
                feColorMatrix1.setAttribute('type', 'matrix')
                feColorMatrix1.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0')
                feColorMatrix1.setAttribute('result', 'hardAlpha')
                const feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset')
                const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur')
                feGaussianBlur.setAttribute('stdDeviation', '2.35')
                const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite')
                feComposite.setAttribute('in2', 'hardAlpha')
                feComposite.setAttribute('operator', 'out')
                const feColorMatrix2 = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix')
                feColorMatrix2.setAttribute('type', 'matrix')
                feColorMatrix2.setAttribute('values', '0 0 0 0 0.0901961 0 0 0 0 0.784314 0 0 0 0 0.713726 0 0 0 0.35 0')
                const feBlend1 = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend')
                feBlend1.setAttribute('mode', 'normal')
                feBlend1.setAttribute('in2', 'BackgroundImageFix')
                feBlend1.setAttribute('result', 'effect1_dropShadow_508_283')
                const feBlend2 = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend')
                feBlend2.setAttribute('mode', 'normal')
                feBlend2.setAttribute('in', 'SourceGraphic')
                feBlend2.setAttribute('in2', 'effect1_dropShadow_508_283')
                feBlend2.setAttribute('result', 'shape')

                filter.appendChild(feFlood)
                filter.appendChild(feColorMatrix1)
                filter.appendChild(feOffset)
                filter.appendChild(feGaussianBlur)
                filter.appendChild(feComposite)
                filter.appendChild(feColorMatrix2)
                filter.appendChild(feBlend1)
                filter.appendChild(feBlend2)
                defs.appendChild(filter)
                newSvg.appendChild(defs)

                rewardValue.replaceWith(newSvg)

                notificationManager.createNotification(`Получено ${rewardValue.textContent} монет`)
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setupRewardButtons()

    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList.contains('daily__reward__card') || node.querySelector('.daily__reward__card')) {
                        setupRewardButtons(node)
                    }
                }
            })
        }
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
})