import { formatPrice } from "./formatPrice.js"

const dailyEventsBlock = document.querySelector('.daily__events__block')
const eventsBlock = document.querySelector('.default__events__block')

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

    quest.quest.card.one_time ? dailyEventsBlock.appendChild(questCard) : eventsBlock.appendChild(questCard)
}

export { createQuest }