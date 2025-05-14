import NotificationManager from "./notifications.js"
const notification = new NotificationManager()
import { applyFilter } from "./filterWrapper.js"
import { getGardenItems } from "./getGardenItems.js"
import { getUserBonsai } from "./bonsai.js"
import { getUserWater } from "./tap.js"

async function handlePurchaseItem(productUuid) {
    try {
        const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/garden/purchase?product_uuid=${productUuid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })

        const data = await response.json()

        if (!response.ok) {
            notification.createNotification(data.detail, 5000, false)
        }

        if (data.user_garden_product) {
            document.querySelector('.buy__element__popup__overlay').classList.remove('visible')
            notification.createNotification('Предмет был успешно приобретён!', 5000, true)

            await getUserBonsai()
            await getGardenItems()
            await getUserWater()
        }

        return data
    } catch (error) {
        console.log(`Error: ${error}`)
        notification.createNotification('Ошибка при приобретении предмета!', 5000, false)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlays = document.querySelectorAll('.popup__overlay')
    const navbarButtons = document.querySelectorAll('.navbar__panel__button')
    const closeAllButtons = document.querySelectorAll('.close__all__button')
    const filterButtons = document.querySelectorAll('.events__filter__button')
    const dailyRewardsContainer = document.querySelector('.daily__rewards__container')

    document.querySelector('.accept__buy__item__button')?.addEventListener('click', () => {
        const popup = document.querySelector('.buy__element__popup')
        const productUuid = popup?.getAttribute('data-current-product-uuid')

        if (productUuid) {
            handlePurchaseItem(productUuid)
        }
    })

    function addPopupHandlers(buttons) {
        buttons.forEach((button) => {
            if (!button.hasAttribute('data-handled')) {
                button.addEventListener('click', getPopupHandler)
                button.setAttribute('data-handled', 'true')
            }
        })
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                const newButtons = Array.from(mutation.addedNodes)
                    .filter(node => node.nodeType === Node.ELEMENT_NODE && node.matches('.get__popup__button'))
                    .concat(
                        Array.from(mutation.target.querySelectorAll('.get__popup__button'))
                    )

                addPopupHandlers(newButtons)
            }
        })
    })

    const container = document.querySelector('.store__cards__container')
    if (container) {
        observer.observe(container, { childList: true, subtree: true })
    }

    const initialButtons = document.querySelectorAll('.get__popup__button')
    addPopupHandlers(initialButtons)

    function getPopupHandler(event) {
        const getPopupButton = event.currentTarget
        const popupFilterDefault = event.currentTarget.getAttribute('data-filter-for')

        if (popupFilterDefault) {
            filterButtons.forEach((filterButton) => {
                if (filterButton.getAttribute('data-filter') === popupFilterDefault) {
                    filterButton.classList.add('active')
                } else {
                    filterButton.classList.remove('active')
                }
            })

            applyFilter(popupFilterDefault)
        }

        const popupId = getPopupButton.getAttribute('data-popup-id')

        disableScroll()

        const targetPopupOverlay = Array.from(popupOverlays).find(
            (popupOverlay) => popupOverlay.getAttribute('data-id') === popupId
        )

        if (!targetPopupOverlay) return

        if (targetPopupOverlay.classList.contains('visible')) {
            return
        }

        const activeProfileOverlay = Array.from(popupOverlays).find(
            (popupOverlay) =>
                popupOverlay.classList.contains('visible') &&
                popupOverlay.classList.contains('profile__overlay') &&
                popupOverlay.classList.contains('without__close__overlay')
        )

        console.log(popupId)

        if (
            activeProfileOverlay &&
            popupId !== 'settings__popup__overlay' &&
            popupId !== 'change__username__popup__overlay' &&
            popupId !== 'delete__account__popup__overlay'
        ) {
            console.log('close')
            closePopupHandler(activeProfileOverlay)
            return
        }

        if (
            popupId !== 'about__events__popup' &&
            popupId !== 'settings__popup__overlay' &&
            popupId !== 'change__username__popup__overlay' &&
            popupId !== 'delete__account__popup__overlay'
        ) {
            const activePopup = Array.from(popupOverlays).find(
                (popupOverlay) => popupOverlay.classList.contains('visible')
            )

            if (activePopup && activePopup !== targetPopupOverlay && !targetPopupOverlay.classList.contains('selected__store__card__overlay') && !targetPopupOverlay.classList.contains('selected__event__popup__overlay') && !targetPopupOverlay.classList.contains('buy__element__popup__overlay')) {
                if (Array.from(popupOverlays).some((popupOverlay) => !popupOverlay.classList.contains('visible'))) {
                    closePopupHandler(activePopup, true)
                } else {
                    closePopupHandler(activePopup, false)
                }
            }
        }

        targetPopupOverlay.classList.add('visible')
        disableScroll()

        makeButtonActive(getPopupButton)
    }

    function closePopupHandler(popupOverlay, isNotMakeFirst) {
        if (popupOverlay.classList.contains('visible') && !popupOverlay.classList.contains('bonsai__popup__overlay')) {
            popupOverlay.classList.remove('visible')
            enableScroll()
            resetInputsInPopup(popupOverlay)

            if (!Array.from(navbarButtons).some((btn) => btn.classList.contains('active')) && !isNotMakeFirst) {
                makeFirstNavbarButtonActive()
            }
        }
    }

    function resetInputsInPopup(popupOverlay) {
        const inputs = popupOverlay.querySelectorAll('input, textarea, select')
        inputs.forEach((input) => {
            switch (input.type) {
                case 'checkbox':
                case 'radio':
                    input.checked = false
                    break
                default:
                    input.value = ''
                    break
            }
        })

        document.querySelector('.save__username__button')?.setAttribute('disabled', 'true')
    }

    function disableScroll() {
        document.querySelector('#main__page').style.overflow = 'hidden'
    }

    function enableScroll() {
        document.querySelector('#main__page').style.overflow = 'auto'
    }

    function makeButtonActive(button) {
        if (
            button.classList.contains('about__events__button') ||
            button.classList.contains('home__page__events__card') ||
            button.classList.contains('get__store__card__button')
        )
            return

        navbarButtons.forEach((btn) => btn.classList.remove('active'))
        button.classList.add('active')
    }

    function makeFirstNavbarButtonActive() {
        setTimeout(() => {
            navbarButtons.forEach((button) => button.classList.remove('active'))
            const firstNavbarButton = navbarButtons[0]
            if (firstNavbarButton) {
                firstNavbarButton.classList.add('active')
            }
        }, 20)
    }

    closeAllButtons.forEach((closeAllButton) => {
        closeAllButton.addEventListener('click', () => {
            popupOverlays.forEach((popupOverlay) => {
                if (
                    popupOverlay.classList.contains('visible') &&
                    !popupOverlay.classList.contains('bonsai__popup__overlay')
                ) {
                    closePopupHandler(popupOverlay)
                }
            })
        })
    })

    popupOverlays.forEach((popupOverlay) => {
        popupOverlay.addEventListener('click', (e) => {
            if (
                e.target === popupOverlay &&
                !popupOverlay.classList.contains('without__close__overlay')
            ) {
                closePopupHandler(popupOverlay)
            }
        })

        const closePopupButtons = popupOverlay.querySelectorAll('.close__popup__button')
        closePopupButtons.forEach((closePopupButton) => {
            closePopupButton.addEventListener('click', () => {
                closePopupHandler(popupOverlay)
            })
        })

        const popupContent = popupOverlay.querySelector('.popup')
        if (popupContent) {
            popupContent.addEventListener('click', (e) => {
                e.stopPropagation()
            })
        }
    })
})