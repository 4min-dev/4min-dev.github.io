import { formatPrice } from "./formatPrice.js"
import Preloader from './preloader.js'
const preloader = new Preloader()

const initData = window.Telegram.WebApp.initData

function getBoostHeadingIcon(product) {
    if (product.effect_type === 'water_boost') {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1.66663C10 1.66663 15.8334 5.92945 15.8334 11.4102C15.8334 13.0253 15.2187 14.5741 14.1248 15.7161C13.0308 16.8582 11.5472 17.4995 10.0001 17.4995C8.45299 17.4995 6.96919 16.8585 5.87523 15.7164C4.78127 14.5744 4.16669 13.0253 4.16669 11.4102C4.16669 5.92945 10 1.66663 10 1.66663Z" fill="white" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3335 11.1541C13.3335 12.1741 12.9384 13.1524 12.2351 13.8737C11.8359 14.2832 11.3558 14.591 10.8334 14.7804" stroke="#6F92C4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    } else {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8.72001 7.28842C8.90918 7.13842 9.13418 7.02925 9.37501 6.96008V9.28925C9.13729 9.22415 8.91472 9.11287 8.72001 8.96175C8.39168 8.70092 8.26501 8.39425 8.26501 8.12508C8.26501 7.85592 8.39168 7.54925 8.72001 7.28842ZM10.625 13.0517V10.6984C10.9142 10.7692 11.1783 10.8884 11.3925 11.0492C11.7483 11.3159 11.875 11.6209 11.875 11.8751C11.875 12.1292 11.7483 12.4342 11.3925 12.7009C11.1628 12.868 10.9018 12.9879 10.625 13.0517Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM10.625 5C10.625 4.83424 10.5592 4.67527 10.4419 4.55806C10.3247 4.44085 10.1658 4.375 10 4.375C9.83424 4.375 9.67527 4.44085 9.55806 4.55806C9.44085 4.67527 9.375 4.83424 9.375 5V5.68C8.85239 5.76794 8.35984 5.98443 7.94167 6.31C7.34833 6.78167 7.015 7.435 7.015 8.125C7.015 8.81583 7.34833 9.46833 7.9425 9.94C8.36083 10.2733 8.86083 10.4792 9.375 10.57V13.0517C9.09818 12.9875 8.83715 12.8682 8.6075 12.7008L7.875 12.1508C7.80934 12.1016 7.73462 12.0658 7.65511 12.0454C7.5756 12.025 7.49286 12.0205 7.41161 12.0321C7.24752 12.0556 7.09946 12.1432 7 12.2758C6.90054 12.4084 6.85784 12.5751 6.88128 12.7392C6.90472 12.9033 6.99239 13.0514 7.125 13.1508L7.8575 13.7008C8.30167 14.0342 8.83167 14.2383 9.375 14.3258V15C9.375 15.1658 9.44085 15.3247 9.55806 15.4419C9.67527 15.5592 9.83424 15.625 10 15.625C10.1658 15.625 10.3247 15.5592 10.4419 15.4419C10.5592 15.3247 10.625 15.1658 10.625 15V14.325C11.1738 14.2425 11.6945 14.0284 12.1425 13.7008C12.7633 13.235 13.125 12.5808 13.125 11.875C13.125 11.1692 12.7633 10.515 12.1425 10.0492C11.6946 9.72128 11.1739 9.50683 10.625 9.42417V6.96167C10.8667 7.03 11.0908 7.13917 11.28 7.28917L11.6258 7.56417C11.7557 7.66727 11.9212 7.71457 12.0859 7.69566C12.2506 7.67675 12.4011 7.59318 12.5042 7.46333C12.6073 7.33349 12.6546 7.168 12.6357 7.00328C12.6167 6.83856 12.5332 6.6881 12.4033 6.585L12.0575 6.31C11.6395 5.98486 11.1472 5.76866 10.625 5.68083V5Z" fill="white"/>
        </svg>`
    }
}

function getBoostIcon(product) {
    let svgString
    if (product.effect_type === 'water_boost') {
        svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1.66663C10 1.66663 15.8334 5.92945 15.8334 11.4102C15.8334 13.0253 15.2187 14.5741 14.1248 15.7161C13.0308 16.8582 11.5472 17.4995 10.0001 17.4995C8.45299 17.4995 6.96919 16.8585 5.87523 15.7164C4.78127 14.5744 4.16669 13.0253 4.16669 11.4102C4.16669 5.92945 10 1.66663 10 1.66663Z" fill="white" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3335 11.1541C13.3335 12.1741 12.9384 13.1524 12.2351 13.8737C11.8359 14.2832 11.3558 14.591 10.8334 14.7804" stroke="#6F92C4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    } else {
        svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8.72001 7.28842C8.90918 7.13842 9.13418 7.02925 9.37501 6.96008V9.28925C9.13729 9.22415 8.91472 9.11287 8.72001 8.96175C8.39168 8.70092 8.26501 8.39425 8.26501 8.12508C8.26501 7.85592 8.39168 7.54925 8.72001 7.28842ZM10.625 13.0517V10.6984C10.9142 10.7692 11.1783 10.8884 11.3925 11.0492C11.7483 11.3159 11.875 11.6209 11.875 11.8751C11.875 12.1292 11.7483 12.4342 11.3925 12.7009C11.1628 12.868 10.9018 12.9879 10.625 13.0517Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM10.625 5C10.625 4.83424 10.5592 4.67527 10.4419 4.55806C10.3247 4.44085 10.1658 4.375 10 4.375C9.83424 4.375 9.67527 4.44085 9.55806 4.55806C9.44085 4.67527 9.375 4.83424 9.375 5V5.68C8.85239 5.76794 8.35984 5.98443 7.94167 6.31C7.34833 6.78167 7.015 7.435 7.015 8.125C7.015 8.81583 7.34833 9.46833 7.9425 9.94C8.36083 10.2733 8.86083 10.4792 9.375 10.57V13.0517C9.09818 12.9875 8.83715 12.8682 8.6075 12.7008L7.875 12.1508C7.80934 12.1016 7.73462 12.0658 7.65511 12.0454C7.5756 12.025 7.49286 12.0205 7.41161 12.0321C7.24752 12.0556 7.09946 12.1432 7 12.2758C6.90054 12.4084 6.85784 12.5751 6.88128 12.7392C6.90472 12.9033 6.99239 13.0514 7.125 13.1508L7.8575 13.7008C8.30167 14.0342 8.83167 14.2383 9.375 14.3258V15C9.375 15.1658 9.44085 15.3247 9.55806 15.4419C9.67527 15.5592 9.83424 15.625 10 15.625C10.1658 15.625 10.3247 15.5592 10.4419 15.4419C10.5592 15.3247 10.625 15.1658 10.625 15V14.325C11.1738 14.2425 11.6945 14.0284 12.1425 13.7008C12.7633 13.235 13.125 12.5808 13.125 11.875C13.125 11.1692 12.7633 10.515 12.1425 10.0492C11.6946 9.72128 11.1739 9.50683 10.625 9.42417V6.96167C10.8667 7.03 11.0908 7.13917 11.28 7.28917L11.6258 7.56417C11.7557 7.66727 11.9212 7.71457 12.0859 7.69566C12.2506 7.67675 12.4011 7.59318 12.5042 7.46333C12.6073 7.33349 12.6546 7.168 12.6357 7.00328C12.6167 6.83856 12.5332 6.6881 12.4033 6.585L12.0575 6.31C11.6395 5.98486 11.1472 5.76866 10.625 5.68083V5Z" fill="white"/>
        </svg>`
    }

    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml')
    return svgDoc.documentElement
}

function createProductCard(product, productId) {
    console.log(product)
    const isBought = product.isBought
    const card = document.createElement('div')
    card.className = 'store__card card-with-background flex column justify__space__between'
    card.setAttribute('data-level', product.currentLevel)
    card.setAttribute('data-max-limit', product.max_limit)
    card.setAttribute('data-title', product.name)
    card.setAttribute('data-boost-effect', product.currentEffectValue)

    if (productId) {
        card.setAttribute('data-item-id', productId)
    } else {
        card.setAttribute('data-item-id', product.productUuid)
    }

    if (product.etaps) {
        card.setAttribute('data-etaps', JSON.stringify(product.etaps))
    }

    if (product.level_info) {
        card.setAttribute('data-level-info', JSON.stringify(product.level_info))
    }

    console.log(product)
    card.setAttribute('data-preview-image', product.image_url)
    card.setAttribute('data-description', product.description)

    if (product.base_cost) {
        card.setAttribute('data-price-to-improve', formatPrice(product.base_cost))
    }

    const inner = document.createElement('div')
    inner.className = 'store__card__inner flex column justify__space__between'

    const background = document.createElement('div')
    background.className = 'store__card__background'
    inner.appendChild(background)

    const preview = document.createElement('div')
    preview.className = 'store__card__item__preview'
    const img = document.createElement('img')
    img.src = product.image_url
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
    levelSpanElement.textContent = product.currentLevel
    const boostEffect = document.createElement('div')
    boostEffect.className = 'heading__card flex align__center'
    boostEffect.innerHTML = getBoostHeadingIcon(product)

    const boostEffectTextContainer = document.createElement('div')
    boostEffectTextContainer.className = 'heading__card__text__container flex column'
    const boostEffectTitle = document.createElement('span')
    boostEffectTitle.className = 'heading__card__title'
    boostEffectTitle.textContent = product.currentEffectValue
    const boostEffectDescription = document.createElement('span')
    boostEffectDescription.className = 'heading__card__description'
    boostEffectDescription.textContent = product.effectName

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

    const effectCardsContainer = document.createElement('div')
    effectCardsContainer.className = 'store__card__footer__cards__container flex align__center'

    const effectCurrentCard = document.createElement('div')
    effectCurrentCard.className = 'footer__card flex align__center'
    const effectCurrentText = document.createElement('div')
    effectCurrentText.className = 'store__card__footer__text__container flex column'
    const effectCurrentDescription = document.createElement('span')
    effectCurrentDescription.className = 'store__card__footer__description'
    effectCurrentDescription.textContent = `На ${product.currentLevel} ур.`
    const effectCurrentTitle = document.createElement('span')
    effectCurrentTitle.className = 'store__card__footer__title'
    effectCurrentTitle.textContent = `+${product.currentEffectValue}`
    effectCurrentCard.appendChild(getBoostIcon(product))
    effectCurrentText.appendChild(effectCurrentDescription)
    effectCurrentText.appendChild(effectCurrentTitle)
    effectCurrentCard.appendChild(effectCurrentText)
    effectCardsContainer.appendChild(effectCurrentCard)
    const effectNextCard = document.createElement('div')
    effectNextCard.appendChild(getBoostIcon(product))


    if (product.base_cost) {
        effectNextCard.className = 'footer__card flex align__center'
    }

    const effectNextText = document.createElement('div')
    effectNextText.className = 'store__card__footer__text__container flex column'
    const effectNextDescription = document.createElement('span')
    effectNextDescription.className = 'store__card__footer__description'
    effectNextDescription.textContent = `На ${product.nextLevel} ур.`
    const effectNextTitle = document.createElement('span')
    effectNextTitle.className = 'store__card__footer__title'
    effectNextTitle.textContent = `+${product.nextEffectValue}`
    effectNextText.appendChild(effectNextDescription)
    effectNextText.appendChild(effectNextTitle)
    if (product.base_cost) {
        effectNextCard.appendChild(effectNextText)

        effectCardsContainer.appendChild(effectNextCard)
    }

    const footer = document.createElement('div')
    footer.className = 'store__card__footer flex align__center justify__space__between'
    const button = document.createElement('button')

    if (product.base_cost) {
        button.className = 'get__popup__button get__store__card__button flex align__center'
        button.setAttribute('data-popup-id', isBought ? 'selected__store__card__popup' : 'buy__element__popup')
        button.setAttribute('data-product-uuid', product.product_uuid)

        button.addEventListener('click', () => {
            document.querySelector('.buy__element__popup').setAttribute('data-current-product-uuid', product.product_uuid)
        })

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
    }

    footer.appendChild(effectCardsContainer)

    if (product.base_cost) {
        footer.appendChild(button)
    }

    inner.appendChild(footer)

    card.appendChild(inner)
    return card
}

async function getGardenItems(isTimeout) {
    try {
        preloader.setActive()
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/garden/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': initData
            },
        })
        const userGardenItems = await fetch('https://tapalka.wizardstech.ru:8443/api/garden/active', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': initData
            },
        }).then((res) => res.json())

        const data = await response.json()

        let foundedGardenDataElement

        if (userGardenItems.garden_products.length > 0) {
            userGardenItems.garden_products.forEach((userGardenItem) => {
                foundedGardenDataElement = data.garden_products.find((product) => product.product_uuid === userGardenItem.product_uuid)

                foundedGardenDataElement.base_cost = userGardenItem.upgrade_cost
                foundedGardenDataElement.isBought = true
            })
        }

        console.log(data.garden_products)

        data.garden_products.forEach(async (gardenProduct) => {
            const userGardenItem = await userGardenItems.garden_products.find(
                (item) => item.product_uuid === gardenProduct.product_uuid
            )

            let product
            if (userGardenItem) {
                console.log(userGardenItem)
                console.log(gardenProduct)
                product = {
                    effectName: gardenProduct.effect_name,
                    productUuid: userGardenItem.id,
                    base_cost: userGardenItem.current_level === gardenProduct.max_level ? null : gardenProduct.base_cost,
                    description: gardenProduct.description,
                    effect_type: gardenProduct.effect_type,
                    image_url: gardenProduct.image_url,
                    etaps: [
                        {
                            "level": userGardenItem.current_level,
                            "imgUrl": userGardenItem.current_image_url
                        },

                        {
                            "level": userGardenItem.level_info[Math.floor(userGardenItem.level_info.length / 2)].level,
                            "imgUrl": userGardenItem.level_info[Math.floor(userGardenItem.level_info.length / 2)].image_url
                        },

                        {
                            "level": userGardenItem.level_info.at(-1).level,
                            "imgUrl": userGardenItem.level_info.at(-1).image_url
                        }
                    ],
                    image_url: gardenProduct.image_url,
                    currentLevel: userGardenItem.current_level,
                    nextLevel: userGardenItem.current_level + 1,
                    currentEffectValue: userGardenItem.current_effect_value,
                    nextEffectValue: gardenProduct.level_info[userGardenItem.current_level] ? gardenProduct.level_info[userGardenItem.current_level].effect_value : userGardenItem.current_level,
                    level_info: gardenProduct.level_info,
                    max_level: gardenProduct.level_info.at(-1).level,
                    name: gardenProduct.name,
                    product_uuid: gardenProduct.product_uuid,
                    isBought: gardenProduct.isBought
                }
            } else {
                product = {
                    effectName: gardenProduct.effect_name,
                    productUuid: gardenProduct.product_uuid,
                    base_cost: gardenProduct.base_cost,
                    description: gardenProduct.description,
                    effect_type: gardenProduct.effect_type,
                    image_url: gardenProduct.image_url,
                    currentLevel: 1,
                    nextLevel: 2,
                    currentEffectValue: gardenProduct.level_info[0].effect_value,
                    nextEffectValue: gardenProduct.level_info[1].effect_value,
                    level_info: gardenProduct.level_info,
                    max_level: gardenProduct.level_info.at(-1).level,
                    name: gardenProduct.name,
                    product_uuid: gardenProduct.product_uuid,
                    isBought: gardenProduct.isBought
                }
            }

            await (() => {
                document.querySelector('.store__cards__container').innerHTML = ``
            })()

            if (userGardenItem) {
                document.querySelector('.store__cards__container').appendChild(createProductCard(product, userGardenItem.id))
            } else {
                document.querySelector('.store__cards__container').appendChild(createProductCard(product))
            }
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    } finally {
        preloader.setInactive(isTimeout)
    }
}

getGardenItems()

export { getGardenItems }