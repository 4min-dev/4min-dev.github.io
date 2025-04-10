import { applyFilter } from "./filterWrapper.js"
import { getProfileData } from "./getProfileData.js"
import { getUserData } from "./getUserData.js"

function createProductCard(product) {
    const card = document.createElement('div')
    card.className = 'store__card flex column justify__space__between'
    card.setAttribute('data-level', product.level_info.length > 0 ? product.level_info[0].level : 1)
    card.setAttribute('data-max-limit', product.max_limit)
    card.setAttribute('data-title', product.name)
    card.setAttribute('data-preview-image', product.image_url)
    card.setAttribute('data-description', product.description)
    card.setAttribute('data-price-to-improve', formatPrice(product.base_cost))

    const inner = document.createElement('div')
    inner.className = 'store__card__inner flex column justify__space__between'

    const background = document.createElement('div')
    background.className = 'store__card__background'
    inner.appendChild(background)

    const preview = document.createElement('div')
    preview.className = 'store__card__item__preview'
    const img = document.createElement('img')
    // img.src = product.image_url
    img.src = '/static/img/lamp.png'
    img.alt = product.name
    preview.appendChild(img)
    inner.appendChild(preview)

    const heading = document.createElement('div')
    heading.className = 'store__card__heading flex align__center'
    const title = document.createElement('span')
    const levelValue = document.createElement('span')
    levelValue.className = 'store__card__heading__num__value flex align__center justify__center'
    const blurElement = document.createElement('div')
    blurElement.className = 'store__card__blur'
    const levelSpanElement = document.createElement('span')
    levelSpanElement.textContent = '2'
    const boostEffect = document.createElement('div')
    boostEffect.className = 'heading__card flex align__center'
    boostEffect.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M10 1.66663C10 1.66663 15.8334 5.92945 15.8334 11.4102C15.8334 13.0253 15.2187 14.5741 14.1248 15.7161C13.0308 16.8582 11.5472 17.4995 10.0001 17.4995C8.45299 17.4995 6.96919 16.8585 5.87523 15.7164C4.78127 14.5744 4.16669 13.0253 4.16669 11.4102C4.16669 5.92945 10 1.66663 10 1.66663Z"
                                            fill="white" stroke="white" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M13.3335 11.1541C13.3335 12.1741 12.9384 13.1524 12.2351 13.8737C11.8359 14.2832 11.3558 14.591 10.8334 14.7804"
                                            stroke="#6F92C4" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
`
    const boostEffectTextContainer = document.createElement('div')
    boostEffectTextContainer.className = 'heading__card__text__container flex column'
    const boostEffectTitle = document.createElement('span')
    boostEffectTitle.className = 'heading__card__title'
    boostEffectTitle.textContent = '+920'
    const boostEffectDescription = document.createElement('span')
    boostEffectDescription.className = 'heading__card__description'
    boostEffectDescription.textContent = 'Ёмкость воды'

    boostEffectTextContainer.appendChild(boostEffectTitle)
    boostEffectTextContainer.appendChild(boostEffectDescription)

    boostEffect.appendChild(boostEffectTextContainer)

    levelValue.appendChild(blurElement)
    levelValue.appendChild(levelSpanElement)
    title.className = 'store__card__title'
    title.textContent = product.name
    heading.appendChild(levelValue)
    heading.appendChild(boostEffect)
    inner.appendChild(heading)
    inner.appendChild(title)

    const effectContainer = document.createElement('div')
    effectContainer.className = 'store__card__footer__cards__container flex align__center'
    product.level_info.forEach((level, index) => {
        if (index < 2) {
            const effectCard = document.createElement('div')
            effectCard.className = 'footer__card flex align__center'
            const effectText = document.createElement('div')
            effectText.className = 'store__card__footer__text__container flex column'
            const effectDescription = document.createElement('span')
            effectDescription.className = 'store__card__footer__description'
            effectDescription.textContent = `На ${level.level} ур.`
            const effectTitle = document.createElement('span')
            effectTitle.className = 'store__card__footer__title'
            effectTitle.textContent = `+${level.effect_value}`
            effectText.appendChild(effectDescription)
            effectText.appendChild(effectTitle)
            effectCard.appendChild(effectText)
            effectContainer.appendChild(effectCard)
        }
    })

    const footer = document.createElement('div')
    footer.className = 'store__card__footer flex align__center justify__space__between'
    const button = document.createElement('button')
    button.className = 'get__popup__button get__store__card__button flex align__center'
    button.setAttribute('data-popup-id', 'selected__store__card__popup')
    button.type = 'button'
    const buttonText = document.createElement('span')
    buttonText.textContent = formatPrice(product.base_cost)
    button.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"
                                        fill="none">
                                        <path
                                            d="M1.66667 13.6507V2.55479H5.55608C6.18371 2.55479 6.71054 2.69863 7.13659 2.9863C7.56264 3.27397 7.88332 3.6464 8.09864 4.1036C8.31395 4.55565 8.42161 5.03339 8.42161 5.53682C8.42161 6.14812 8.28646 6.67209 8.01617 7.10873C7.75047 7.54538 7.39084 7.84332 6.93731 8.00257L6.92356 7.625C7.55577 7.79966 8.04137 8.14127 8.38038 8.64983C8.71939 9.15325 8.88889 9.74144 8.88889 10.4144C8.88889 11.0668 8.77207 11.6344 8.53843 12.1173C8.30937 12.6002 7.97265 12.9777 7.52828 13.25C7.08849 13.5171 6.55478 13.6507 5.92716 13.6507H1.66667ZM3.12348 12.1173H5.70726C6.03253 12.1173 6.32343 12.0479 6.57998 11.9092C6.8411 11.7705 7.04497 11.5728 7.19156 11.3159C7.34274 11.0539 7.41833 10.7432 7.41833 10.3836C7.41833 10.0497 7.3519 9.74914 7.21905 9.48202C7.09078 9.20976 6.90295 8.99658 6.65557 8.84247C6.41276 8.68322 6.12644 8.6036 5.7966 8.6036H3.12348V12.1173ZM3.12348 7.08562H5.53547C5.80118 7.08562 6.0394 7.02654 6.25013 6.90839C6.46545 6.7851 6.63495 6.61045 6.75864 6.38442C6.88692 6.15325 6.95105 5.87586 6.95105 5.55223C6.95105 5.12072 6.82278 4.76627 6.56623 4.48887C6.30969 4.21147 5.9661 4.07277 5.53547 4.07277H3.12348V7.08562Z"
                                            fill="#222222" />
                                        <path d="M0 5.22603H2.77778V6.04795H0V5.22603Z" fill="#222222" />
                                        <path d="M0 10.363H2.77778V11.1849H0V10.363Z" fill="#222222" />
                                        <path d="M4.44444 0.5H5.18519V3.58219H4.44444V0.5Z" fill="#222222" />
                                        <path d="M4.44444 12.4178H5.18519V15.5H4.44444V12.4178Z" fill="#222222" />
                                        <path d="M7.22222 5.22603H10V6.04795H7.22222V5.22603Z" fill="#222222" />
                                        <path d="M7.59259 10.363H10V11.1849H7.59259V10.363Z" fill="#222222" />
                                    </svg>`
    button.appendChild(buttonText)
    footer.appendChild(effectContainer)
    footer.appendChild(button)
    inner.appendChild(footer)

    card.appendChild(inner)

    return card
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlays = document.querySelectorAll('.popup__overlay')
    const navbarButtons = document.querySelectorAll('.navbar__panel__button')
    const closeAllButtons = document.querySelectorAll('.close__all__button')
    const filterButtons = document.querySelectorAll('.events__filter__button')
    const referalLinkValue = document.querySelector('.referal__link')

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

    async function getGardenItems() {
        try {
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/garden/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            const data = await response.json()

            data.garden_products.forEach((gardenProduct) => {
                const product = {
                    base_cost: gardenProduct.base_cost,
                    description: gardenProduct.description,
                    effect_type: gardenProduct.effect_type,
                    // image_url: gardenProduct.image_url,
                    image_url: '/static/img/lamp.png',
                    level_info: gardenProduct.level_info,
                    max_level: gardenProduct.max_level,
                    name: gardenProduct.name,
                    product_uuid: gardenProduct.product_uuid,
                }

                document.querySelector('.store__cards__container').appendChild(createProductCard(product))
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }

    async function getReferals() {
        try {
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/referrals', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            const data = await response.json()
            const userReferalLink = await getUserData().referral_link

            referalLinkValue.setAttribute('data-link', userReferalLink)
            referalLinkValue.textContent = userReferalLink
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }

    function checkApiPopup(popupClassname, event) {
        return event.currentTarget.getAttribute('data-popup-id') === popupClassname
    }

    function getPopupHandler(event) {
        const getPopupButton = event.currentTarget
        const popupFilterDefault = event.currentTarget.getAttribute('data-filter-for')

        if (checkApiPopup('store__popup__overlay', event)) {
            getGardenItems()
        } else if (checkApiPopup('ref__popup__overlay', event)) {
            getReferals()
        } else if (checkApiPopup('profile__overlay', event)) {
            getProfileData()
        }

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

        if (
            activeProfileOverlay &&
            popupId !== 'settings__popup__overlay' &&
            popupId !== 'change__username__popup__overlay' &&
            popupId !== 'delete__account__popup__overlay'
        ) {
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

            if (activePopup && activePopup !== targetPopupOverlay && !targetPopupOverlay.classList.contains('selected__store__card__overlay') && !targetPopupOverlay.classList.contains('selected__event__popup__overlay')) {
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