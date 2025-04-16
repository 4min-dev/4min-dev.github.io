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

let questsData
let filteredQuests
let dailyCombo
let nextDailyReward

document.addEventListener("DOMContentLoaded", function () {
    const popupOverlays = document.querySelectorAll('.popup__overlay')
    const navbarButtons = document.querySelectorAll('.navbar__panel__button')
    const closeAllButtons = document.querySelectorAll('.close__all__button')
    const filterButtons = document.querySelectorAll('.events__filter__button')
    const referalLinkValue = document.querySelector('.referal__link')
    const dailyEventsBlock = document.querySelector('.daily__events__block')
    const eventsBlock = document.querySelector('.default__events__block')
    const caregoriesNavbar = document.querySelector('.event__navbar__menu')
    const defaultCategoryValue = document.querySelector('.default__category__value')
    const defaultCategory = document.querySelector('.default__category')
    const dailyRewardsContainer = document.querySelector('.daily__rewards__container')

    function addPopupHandlers(buttons) {
        buttons.forEach((button) => {
            if (!button.hasAttribute('data-handled')) {
                button.addEventListener('click', getPopupHandler)
                button.setAttribute('data-handled', 'true')
            }
        })
    }

    const categoryStatsMap = new Map();

    function createQuest(quest) {

        const questCard = document.createElement('div')
        questCard.setAttribute('data-title', quest.quest.card.title)
        questCard.setAttribute('data-description', quest.quest.card.description)
        questCard.setAttribute('data-link', quest.quest.card.link_to_complete)
        questCard.setAttribute('data-note', quest.quest.card.note)
        questCard.setAttribute('data-preview', quest.quest.card.image)
        questCard.setAttribute('data-etaps', JSON.stringify(quest.quest.card.stages))
        questCard.setAttribute('data-award', `+${formatPrice(quest.quest.card.reward)}`)
        questCard.setAttribute('data-id', quest.quest.quest_id)

        questCard.classList.add('event__card', 'flex', 'align__start', 'justify__space__between')
        questCard.innerHTML = `
         <div class="about__event__container flex align__start">
                                    <div class="event__card__image flex align__center justify__center">
                                        <img src=${quest.quest.card.image} alt="Event icon">
                                    </div>
                                    <div class="event__card__text__container flex column">
                                        <span class="event__card__title">
                                            ${quest.quest.card.title}
                                        </span>
                                        <span class="event__card__award__container flex align__center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24"
                                                viewBox="0 0 22 24" fill="none">
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11Z"
                                                            fill="url(#paint0_linear_493_601)"></path>
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M8.71528 14.6998V7.1484H11.5513C12.009 7.1484 12.3931 7.24629 12.7038 7.44207C13.0144 7.63784 13.2483 7.8913 13.4053 8.20245C13.5623 8.5101 13.6408 8.83522 13.6408 9.17783C13.6408 9.59386 13.5422 9.95045 13.3451 10.2476C13.1514 10.5448 12.8892 10.7475 12.5585 10.8559L12.5484 10.599C13.0094 10.7178 13.3635 10.9503 13.6107 11.2964C13.8579 11.639 13.9815 12.0393 13.9815 12.4973C13.9815 12.9413 13.8963 13.3276 13.7259 13.6562C13.5589 13.9848 13.3134 14.2418 12.9894 14.4271C12.6687 14.6089 12.2795 14.6998 11.8219 14.6998H8.71528ZM9.77754 13.6562H11.6615C11.8987 13.6562 12.1108 13.609 12.2979 13.5146C12.4883 13.4202 12.637 13.2856 12.7438 13.1108C12.8541 12.9325 12.9092 12.721 12.9092 12.4763C12.9092 12.2491 12.8608 12.0446 12.7639 11.8628C12.6704 11.6775 12.5334 11.5324 12.353 11.4275C12.176 11.3191 11.9672 11.2649 11.7267 11.2649H9.77754V13.6562ZM9.77754 10.2319H11.5363C11.73 10.2319 11.9037 10.1917 12.0574 10.1113C12.2144 10.0274 12.338 9.9085 12.4282 9.75467C12.5217 9.59735 12.5685 9.40857 12.5685 9.18832C12.5685 8.89466 12.4749 8.65343 12.2879 8.46465C12.1008 8.27586 11.8503 8.18147 11.5363 8.18147H9.77754V10.2319Z"
                                                            fill="url(#paint1_linear_493_601)"></path>
                                                        <path d="M7.5 8.96632H9.52546V9.52569H7.5V8.96632Z"
                                                            fill="url(#paint2_linear_493_601)"></path>
                                                        <path d="M7.5 12.4623H9.52546V13.0217H7.5V12.4623Z"
                                                            fill="url(#paint3_linear_493_601)"></path>
                                                        <path d="M10.7407 5.75H11.2809V7.8476H10.7407V5.75Z"
                                                            fill="url(#paint4_linear_493_601)"></path>
                                                        <path d="M10.7407 13.8607H11.2809V15.9583H10.7407V13.8607Z"
                                                            fill="url(#paint5_linear_493_601)"></path>
                                                        <path d="M12.7662 8.96632H14.7917V9.52569H12.7662V8.96632Z"
                                                            fill="url(#paint6_linear_493_601)"></path>
                                                        <path d="M13.0363 12.4623H14.7917V13.0217H13.0363V12.4623Z"
                                                            fill="url(#paint7_linear_493_601)"></path>
                                                    </g>
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_493_601" x1="11" y1="4" x2="11"
                                                        y2="18" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FA84AF"></stop>
                                                        <stop offset="1" stop-color="#FA84AF"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_493_601" x1="11.1458" y1="5.75"
                                                        x2="11.1458" y2="15.9583" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFFFF"></stop>
                                                        <stop offset="1" stop-color="#CDF1ED"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_493_601" x1="11.1458" y1="5.75"
                                                        x2="11.1458" y2="15.9583" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFFFF"></stop>
                                                        <stop offset="1" stop-color="#CDF1ED"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_493_601" x1="11.1458" y1="5.75"
                                                        x2="11.1458" y2="15.9583" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFFFF"></stop>
                                                        <stop offset="1" stop-color="#CDF1ED"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint4_linear_493_601" x1="11.1458" y1="5.75"
                                                        x2="11.1458" y2="15.9583" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFFFF"></stop>
                                                        <stop offset="1" stop-color="#CDF1ED"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint5_linear_493_601" x1="11.1458" y1="5.75"
                                                        x2="11.1458" y2="15.9583" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFFFF"></stop>
                                                        <stop offset="1" stop-color="#CDF1ED"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint6_linear_493_601" x1="11.1458" y1="5.75"
                                                        x2="11.1458" y2="15.9583" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFFFF"></stop>
                                                        <stop offset="1" stop-color="#CDF1ED"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint7_linear_493_601" x1="11.1458" y1="5.75"
                                                        x2="11.1458" y2="15.9583" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FBFFFF"></stop>
                                                        <stop offset="1" stop-color="#CDF1ED"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
    
                                            <span class="event__card__award__value">
                                                +${formatPrice(quest.quest.card.reward)}
                                            </span>
                                        </span>
    
                                    </div>
                                </div>
    
                                ${quest.status.is_completed ? `
                                    <button type="button" class="get__award__button">
                                    Забрать
                                </button>` : `
                                <button type="button" class="get__event__button get__popup__button"
                                    data-popup-id="selected__event__popup">
                                    <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g clip-path="url(#clip0_508_299)">
                                            <path d="M10 17L15 12" stroke="white" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15 12L10 7" stroke="white" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_508_299">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                `
            }
        `

        const category = quest.quest.category;
        const key = category.id;

        if (!categoryStatsMap.has(key)) {
            categoryStatsMap.set(key, {
                title: category.name,
                value: category.value,
                quests: 1
            });
        } else {
            categoryStatsMap.get(key).quests += 1;
        }

        quest.quest.card.one_time ? dailyEventsBlock.appendChild(questCard) : eventsBlock.appendChild(questCard)
    }

    function handleSortByCategory(event) {
        const clickedCategory = event.currentTarget

        if (clickedCategory.classList.contains('active')) return

        const clickedCategoryValue = clickedCategory.getAttribute('value')

        filteredQuests = questsData.filter((quest) => quest.quest.category.name !== clickedCategoryValue)
        createEvents()
    }

    function createCategory(category) {
        const categoryContainer = document.createElement('li')

        categoryContainer.classList.add('event__category', 'flex', 'align__center')
        categoryContainer.setAttribute('value', category.title)
        categoryContainer.innerHTML = `
         <span class="event__category__name active text__uppercase">
                                ${category.value}
                            </span>
         <span class="event__category__value">${category.quests}</span>
        `
        categoryContainer.addEventListener('click', handleSortByCategory)
        caregoriesNavbar.appendChild(categoryContainer)
    }

    function getFormattedTokensAward(value) {
        if (value < 1000) {
            return value.toString()
        } else {
            return `${Math.floor(value / 1000)}К`
        }
    }

    async function handleGetDailyReward() {
        try {
            const response = await fetch('https://tapalka.wizardstech.ru:8443/api/daily-rewards/claim', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((res) => res.json())
            console.log(response)
            return response
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    function createDailyReward(dailyReward, nextDailyReward) {
        const dailyRewardContainer = document.createElement('div')
        dailyRewardContainer.classList.add('daily__reward__card', 'flex', 'column', 'align__center', 'justify__space__between')
        if (nextDailyReward.can_claim_reward && dailyReward.combo_days === nextDailyReward.reward.combo_days) {
            dailyRewardContainer.classList.add('ready__to__get')

            dailyRewardContainer.addEventListener('click', handleGetDailyReward)
        }

        dailyRewardContainer.setAttribute('data-day', dailyReward.combo_days)

        dailyReward.combo_days < 31 ? dailyRewardContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
                          <path
                              d="M3.16667 21.9178V3.42466H10.5566C11.749 3.42466 12.75 3.66438 13.5595 4.14384C14.369 4.62329 14.9783 5.24401 15.3874 6.00599C15.7965 6.75942 16.0011 7.55565 16.0011 8.39469C16.0011 9.41353 15.7443 10.2868 15.2307 11.0146C14.7259 11.7423 14.0426 12.2389 13.1809 12.5043L13.1548 11.875C14.356 12.1661 15.2786 12.7354 15.9227 13.583C16.5668 14.4221 16.8889 15.4024 16.8889 16.524C16.8889 17.6113 16.6669 18.5574 16.223 19.3622C15.7878 20.167 15.148 20.7962 14.3037 21.25C13.4681 21.6952 12.4541 21.9178 11.2616 21.9178H3.16667ZM5.93461 19.3622H10.8438C11.4618 19.3622 12.0145 19.2466 12.502 19.0154C12.9981 18.7842 13.3854 18.4546 13.664 18.0265C13.9512 17.5899 14.0948 17.0719 14.0948 16.4726C14.0948 15.9161 13.9686 15.4152 13.7162 14.97C13.4725 14.5163 13.1156 14.161 12.6456 13.9041C12.1843 13.6387 11.6402 13.506 11.0135 13.506H5.93461V19.3622ZM5.93461 10.976H10.5174C11.0222 10.976 11.4749 10.8776 11.8752 10.6807C12.2843 10.4752 12.6064 10.1841 12.8414 9.80736C13.0851 9.42209 13.207 8.95976 13.207 8.42038C13.207 7.7012 12.9633 7.11044 12.4758 6.64812C11.9884 6.18579 11.3356 5.95462 10.5174 5.95462H5.93461V10.976Z"
                              fill="white" />
                          <path d="M0 7.87671H5.27778V9.24658H0V7.87671Z" fill="white" />
                          <path d="M0 16.4384H5.27778V17.8082H0V16.4384Z" fill="white" />
                          <path d="M8.44444 0H9.85185V5.13699H8.44444V0Z" fill="white" />
                          <path d="M8.44444 19.863H9.85185V25H8.44444V19.863Z" fill="white" />
                          <path d="M13.7222 7.87671H19V9.24658H13.7222V7.87671Z" fill="white" />
                          <path d="M14.4259 16.4384H19V17.8082H14.4259V16.4384Z" fill="white" />
                      </svg>

                      ${(dailyReward.combo_days < nextDailyReward.reward.combo_days)
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                  <g filter="url(#filter0_d_940_1839)">
                      <path d="M6.5 12L12.5004 17.6842L24.5 6.3158" stroke="#17C8B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                      <filter id="filter0_d_940_1839" x="0.3" y="0.115796" width="30.4" height="23.7684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.35" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.784314 0 0 0 0 0.713726 0 0 0 0.35 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_940_1839" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_940_1839" result="shape" />
                      </filter>
                  </defs>
              </svg>`
                : `<span class="daily__reward__value text__uppercase">
                  ${getFormattedTokensAward(dailyReward.value)}
              </span>`}


                      <div
                          class="get__reward__button flex align__center justify__center daily__button text__uppercase">
                          ${(dailyReward.combo_days === nextDailyReward.reward.combo_days && nextDailyReward.can_claim_reward)
                ? `Собрать`
                : `День ${dailyReward.combo_days}`
            }
                      </div>
      ` : (
            dailyRewardContainer.classList.add('finally__reward'),
            dailyRewardContainer.innerHTML = `
      <div class="finally__reward__value flex column">
                            <span class="finally__reward__content flex align__center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                    fill="none">
                                    <g filter="url(#filter0_d_604_1812)">
                                        <path
                                            d="M7.33333 16.8973V7.28082H10.4449C10.947 7.28082 11.3684 7.40548 11.7093 7.65479C12.0501 7.90411 12.3067 8.22688 12.4789 8.62312C12.6512 9.0149 12.7373 9.42894 12.7373 9.86524C12.7373 10.395 12.6292 10.8491 12.4129 11.2276C12.2004 11.606 11.9127 11.8642 11.5498 12.0022L11.5389 11.675C12.0446 11.8264 12.4331 12.1224 12.7043 12.5632C12.9755 12.9995 13.1111 13.5092 13.1111 14.0925C13.1111 14.6579 13.0177 15.1498 12.8307 15.5683C12.6475 15.9868 12.3781 16.314 12.0226 16.55C11.6708 16.7815 11.2438 16.8973 10.7417 16.8973H7.33333ZM8.49878 15.5683H10.5658C10.826 15.5683 11.0587 15.5082 11.264 15.388C11.4729 15.2678 11.636 15.0964 11.7533 14.8738C11.8742 14.6467 11.9347 14.3774 11.9347 14.0658C11.9347 13.7764 11.8815 13.5159 11.7752 13.2844C11.6726 13.0485 11.5224 12.8637 11.3245 12.7301C11.1302 12.5921 10.9012 12.5231 10.6373 12.5231H8.49878V15.5683ZM8.49878 11.2075H10.4284C10.6409 11.2075 10.8315 11.1563 11.0001 11.0539C11.1724 10.9471 11.308 10.7957 11.4069 10.5998C11.5095 10.3995 11.5608 10.1591 11.5608 9.8786C11.5608 9.50462 11.4582 9.19743 11.253 8.95702C11.0477 8.71661 10.7729 8.5964 10.4284 8.5964H8.49878V11.2075Z"
                                            fill="white" />
                                        <path d="M6 9.59589H8.22222V10.3082H6V9.59589Z" fill="white" />
                                        <path d="M6 14.0479H8.22222V14.7603H6V14.0479Z" fill="white" />
                                        <path d="M9.55556 5.5H10.1481V8.17123H9.55556V5.5Z" fill="white" />
                                        <path d="M9.55556 15.8288H10.1481V18.5H9.55556V15.8288Z" fill="white" />
                                        <path d="M11.7778 9.59589H14V10.3082H11.7778V9.59589Z" fill="white" />
                                        <path d="M12.0741 14.0479H14V14.7603H12.0741V14.0479Z" fill="white" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_604_1812" x="0.7" y="0.2" width="18.6" height="23.6"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="2.65" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix"
                                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                result="effect1_dropShadow_604_1812" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_604_1812"
                                                result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <span class="mono">${getFormattedTokensAward(dailyReward.value)}</span>
                            </span>

                            <span class="plus">+</span>

                            <span class="finally__reward__content additionally__reward flex align__center">
                                <img src="/static/img/money__2.png" alt="Reward preview" />
                                <span>3 Boost</span>
                            </span>
                        </div>

                        <div
                            class="get__reward__button flex align__center justify__center daily__button text__uppercase">
                            <span>День 31</span>
                        </div>
    `
        )

dailyRewardsContainer.appendChild(dailyRewardContainer)
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

        console.log(data)

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

async function createEvents() {
    dailyEventsBlock.innerHTML = ''
    eventsBlock.innerHTML = `<span class="event__block__title">Постоянные задания️</span`

    filteredQuests.map(async (questData) => await createQuest(questData))
    const questCategories = Array.from(categoryStatsMap.values())

    defaultCategoryValue.textContent = questsData.length

    questCategories.map((questCategory) => createCategory(questCategory))
}

defaultCategory.addEventListener('click', () => {
    if (defaultCategory.classList.contains('active')) return

    filteredQuests = questsData
    createEvents()
})

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

        console.log(data)

        referalLinkValue.setAttribute('data-link', userReferalLink)
        referalLinkValue.textContent = userReferalLink
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

async function getEvents() {
    try {
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/quests', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': window.Telegram.WebApp.initData
            }
        })
        const data = await response.json()
        questsData = data.quests
        filteredQuests = data.quests

        createEvents()
    } catch (error) {
        console.error(`Error: ${error}`)
    }

    document.querySelector('.daily__rewards__button').addEventListener('click', getDailyRewards)
}

async function getDailyRewards() {
    try {
        const responseToDailyRewardsData = await fetch('https://tapalka.wizardstech.ru:8443/api/daily-rewards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': window.Telegram.WebApp.initData
            }
        }).then((res) => res.json())
        const responseToUserStats = await fetch('https://tapalka.wizardstech.ru:8443/api/daily-rewards/user-info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': window.Telegram.WebApp.initData
            }
        }).then((res) => res.json())

        dailyRewardsContainer.innerHTML = ``

        dailyCombo = responseToUserStats.current_combo
        nextDailyReward = responseToUserStats.next_reward

        responseToDailyRewardsData.rewards.map((dailyReward) => createDailyReward(dailyReward, nextDailyReward))

        console.log(responseToDailyRewardsData)
        console.log(responseToUserStats)
    } catch (error) {
        console.log(`Error: ${error}`)
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
    } else if (checkApiPopup('events__popup', event)) {
        getEvents()
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