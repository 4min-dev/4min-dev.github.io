const boostersContainer = document.querySelector('.boosts__block__cards__container')
import Preloader from './preloader.js'
const preloader = new Preloader()

async function createBooster(booster, isBought) {
    console.log(isBought)
    await (() => {
        boostersContainer.innerHTML = ``
    })()

    const boosterCard = document.createElement('div')
    boosterCard.classList.add('boost__card', 'store__card', 'flex', 'column', 'justify__space__between')

    if (isBought) {
        boosterCard.classList.add('isBought')
    }

    function getBoostValue() {
        if (booster.booster_type === "water_restore") {
            return `-${booster.effect_value}%`
        } else if (booster.booster_type === "click_income") {
            return `-${booster.effect_value}%`
        }
    }

    function getBoostDescription() {
        if (booster.booster_type === "water_restore") {
            return `Уск.`
        } else if (booster.booster_type === "click_income") {
            return `Увел.`
        }
    }

    function getBoosterCardTitle() {
        const title = booster.name
        const words = title.trim().split(/\s+/)

        if (words.length > 1) {
            return `<span class="opacity">${words[0]}</span> ${words.slice(1).join(' ')}`
        } else {
            return title
        }
    }


    boosterCard.setAttribute('data-boost-value', getBoostValue())
    boosterCard.setAttribute('data-work-timeline', `${booster.duration_hours}ч`)
    boosterCard.setAttribute('data-title', `${booster.name}`)
    boosterCard.setAttribute('data-description', `${booster.description}`)
    boosterCard.setAttribute('data-note', `${booster.note ? booster.note : null}`)
    boosterCard.setAttribute('data-price', booster.cost.toLocaleString('en-US'))
    boosterCard.setAttribute('data-id', booster.booster_uuid)

    boosterCard.innerHTML = `
    <div class="store__card__inner flex column justify__space__between">
                        <div class="store__card__background"></div>
                        <div class="store__card__item__preview">
                            <img src=${booster.image_url} alt="Boost preview" />
                        </div>
                        <div class="boost__card__heading flex align__center">
                            <div class="boost__heading__card flex align__center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M9.99996 1.66663C9.99996 1.66663 15.8333 5.92945 15.8333 11.4102C15.8333 13.0253 15.2187 14.5741 14.1247 15.7161C13.0308 16.8582 11.5471 17.4995 10 17.4995C8.45293 17.4995 6.96913 16.8585 5.87517 15.7164C4.78121 14.5744 4.16663 13.0253 4.16663 11.4102C4.16663 5.92945 9.99996 1.66663 9.99996 1.66663Z"
                                        fill="white" stroke="white" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M13.3335 11.1541C13.3335 12.1741 12.9384 13.1524 12.2351 13.8737C11.8359 14.2832 11.3558 14.591 10.8334 14.7804"
                                        stroke="#9BA2EE" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <div class="boost__heading__card__text__container flex column">
                                    <span class="boost__heading__card__title">
                                        ${getBoostValue()}
                                    </span>
                                    <span class="boost__heading__card__description">
                                        ${getBoostDescription()}
                                    </span>
                                </div>
                            </div>

                            <div class="boost__heading__card flex align__center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM10.625 5C10.625 4.83424 10.5592 4.67527 10.4419 4.55806C10.3247 4.44085 10.1658 4.375 10 4.375C9.83424 4.375 9.67527 4.44085 9.55806 4.55806C9.44085 4.67527 9.375 4.83424 9.375 5V10C9.375 10.345 9.655 10.625 10 10.625H13.75C13.9158 10.625 14.0747 10.5592 14.1919 10.4419C14.3092 10.3247 14.375 10.1658 14.375 10C14.375 9.83424 14.3092 9.67527 14.1919 9.55806C14.0747 9.44085 13.9158 9.375 13.75 9.375H10.625V5Z"
                                        fill="white" />
                                </svg>

                                <div class="boost__heading__card__text__container flex column">
                                    <span class="boost__heading__card__title">
                                        ${booster.duration_hours}ч
                                    </span>
                                    <span class="boost__heading__card__description">
                                        Время
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="boost__card__footer__wrapper flex column">
                            <span class="store__card__title">
                                ${getBoosterCardTitle()}
                            </span>

                            <div class="boost__card__footer__container flex align__center">
                                <div class="boost__card__price__container flex align__center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                        viewBox="0 0 11 16" fill="none">
                                        <path
                                            d="M2.16667 13.6507V2.55479H6.05608C6.68371 2.55479 7.21054 2.69863 7.63659 2.9863C8.06264 3.27397 8.38332 3.6464 8.59864 4.1036C8.81395 4.55565 8.92161 5.03339 8.92161 5.53682C8.92161 6.14812 8.78646 6.67209 8.51617 7.10873C8.25047 7.54538 7.89084 7.84332 7.43731 8.00257L7.42356 7.625C8.05577 7.79966 8.54137 8.14127 8.88038 8.64983C9.21939 9.15325 9.38889 9.74144 9.38889 10.4144C9.38889 11.0668 9.27207 11.6344 9.03843 12.1173C8.80937 12.6002 8.47265 12.9777 8.02828 13.25C7.58849 13.5171 7.05478 13.6507 6.42716 13.6507H2.16667ZM3.62348 12.1173H6.20726C6.53253 12.1173 6.82343 12.0479 7.07998 11.9092C7.3411 11.7705 7.54497 11.5728 7.69156 11.3159C7.84274 11.0539 7.91833 10.7432 7.91833 10.3836C7.91833 10.0497 7.8519 9.74914 7.71905 9.48202C7.59078 9.20976 7.40295 8.99658 7.15557 8.84247C6.91276 8.68322 6.62644 8.6036 6.2966 8.6036H3.62348V12.1173ZM3.62348 7.08562H6.03547C6.30118 7.08562 6.5394 7.02654 6.75013 6.90839C6.96545 6.7851 7.13495 6.61045 7.25864 6.38442C7.38692 6.15325 7.45105 5.87586 7.45105 5.55223C7.45105 5.12072 7.32278 4.76627 7.06623 4.48887C6.80969 4.21147 6.4661 4.07277 6.03547 4.07277H3.62348V7.08562Z"
                                            fill="white" />
                                        <path d="M0.5 5.22603H3.27778V6.04795H0.5V5.22603Z" fill="white" />
                                        <path d="M0.5 10.363H3.27778V11.1849H0.5V10.363Z" fill="white" />
                                        <path d="M4.94444 0.5H5.68519V3.58219H4.94444V0.5Z" fill="white" />
                                        <path d="M4.94444 12.4178H5.68519V15.5H4.94444V12.4178Z" fill="white" />
                                        <path d="M7.72222 5.22603H10.5V6.04795H7.72222V5.22603Z" fill="white" />
                                        <path d="M8.09259 10.363H10.5V11.1849H8.09259V10.363Z" fill="white" />
                                    </svg>

                                    <span class="boost__card__price__value">
                                        ${booster.cost.toLocaleString('en-US')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
    `

    const selectedStoreButton = document.createElement('button')

    selectedStoreButton.addEventListener('click', () => document.querySelector('.boosters__popup').classList.add('visible'))

    selectedStoreButton.classList.add('get__popup__button', 'get__boost__button', 'flex', 'align__center', 'justify__center')
    selectedStoreButton.setAttribute('data-popup-id', 'selected__store__boost__popup')
    selectedStoreButton.setAttribute('type', 'button')
    selectedStoreButton.innerHTML = `
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.25006 5V5.625H4.59423C3.79423 5.625 3.12423 6.22833 3.04006 7.02417L1.98756 17.0242C1.96467 17.242 1.98782 17.4621 2.05549 17.6704C2.12317 17.8787 2.23387 18.0704 2.38041 18.2331C2.52696 18.3958 2.70607 18.5259 2.90613 18.615C3.1062 18.704 3.32274 18.75 3.54173 18.75H16.4584C16.6774 18.75 16.8939 18.704 17.094 18.615C17.2941 18.5259 17.4732 18.3958 17.6197 18.2331C17.7663 18.0704 17.877 17.8787 17.9446 17.6704C18.0123 17.4621 18.0355 17.242 18.0126 17.0242L16.9601 7.02417C16.9197 6.64012 16.7385 6.28463 16.4516 6.02626C16.1646 5.76789 15.7921 5.62494 15.4059 5.625H13.7501V5C13.7501 4.00544 13.355 3.05161 12.6517 2.34835C11.9485 1.64509 10.9946 1.25 10.0001 1.25C9.0055 1.25 8.05168 1.64509 7.34841 2.34835C6.64515 3.05161 6.25006 4.00544 6.25006 5ZM10.0001 2.5C9.33702 2.5 8.70114 2.76339 8.2323 3.23223C7.76346 3.70107 7.50006 4.33696 7.50006 5V5.625H12.5001V5C12.5001 4.33696 12.2367 3.70107 11.7678 3.23223C11.299 2.76339 10.6631 2.5 10.0001 2.5ZM7.50006 9.375C7.50006 10.038 7.76346 10.6739 8.2323 11.1428C8.70114 11.6116 9.33702 11.875 10.0001 11.875C10.6631 11.875 11.299 11.6116 11.7678 11.1428C12.2367 10.6739 12.5001 10.038 12.5001 9.375V8.75C12.5001 8.58424 12.5659 8.42527 12.6831 8.30806C12.8003 8.19085 12.9593 8.125 13.1251 8.125C13.2908 8.125 13.4498 8.19085 13.567 8.30806C13.6842 8.42527 13.7501 8.58424 13.7501 8.75V9.375C13.7501 10.3696 13.355 11.3234 12.6517 12.0266C11.9485 12.7299 10.9946 13.125 10.0001 13.125C9.0055 13.125 8.05168 12.7299 7.34841 12.0266C6.64515 11.3234 6.25006 10.3696 6.25006 9.375V8.75C6.25006 8.58424 6.31591 8.42527 6.43312 8.30806C6.55033 8.19085 6.7093 8.125 6.87506 8.125C7.04082 8.125 7.1998 8.19085 7.31701 8.30806C7.43422 8.42527 7.50006 8.58424 7.50006 8.75V9.375Z"
                                            fill="#222222" />
                                    </svg>
    `

    boosterCard.querySelector('.boost__card__footer__container').appendChild(selectedStoreButton)

    boostersContainer.appendChild(boosterCard)
}

async function handleGetBoostItems() {
    try {
        preloader.setActive()
        const boostersData = await fetch('https://tapalka.wizardstech.ru:8443/api/boosters', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then((res) => res.json())
        const userBoostersData = await fetch('https://tapalka.wizardstech.ru:8443/api/boosters/active', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then((res) => res.json())

        const boosters = boostersData.boosters
        const userBoosters = userBoostersData.boosters

        const activeBoosterUUIDs = userBoosters.map(b => String(b.booster_id))

        const inactiveBoosters = boosters.filter(b => !activeBoosterUUIDs.includes(String(b.booster_uuid)))
        const activeBoosters = boosters.filter(b => activeBoosterUUIDs.includes(String(b.booster_uuid)))

        console.log('Inactive Boosters:', inactiveBoosters)
        console.log('Active Boosters:', activeBoosters)

        inactiveBoosters.forEach(b => createBooster(b, false))
        activeBoosters.forEach(b => createBooster(b, true))
    } catch (error) {
        console.log(`Error: ${error}`)
    } finally {
        preloader.setInactive()
    }
}

handleGetBoostItems()

export { handleGetBoostItems }