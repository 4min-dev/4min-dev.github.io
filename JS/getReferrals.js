import { getFormattedTokens } from "./getFormattedTokens.js"
import { getUserData } from "./getUserData.js"
import Preloader from './preloader.js'
const preloader = new Preloader()

const referalLinkValue = document.querySelector('.referal__link')
const referralsContainer = document.querySelector('.leaderboard__container')
const initData = window.Telegram.WebApp.initData

function createReferral(referral) {
    const id = referral.tg_id
    const avatar = referral.avatar_url
    const username = referral.first_name
    const tokens = referral.tokens
    const formattedTokens = getFormattedTokens(tokens)
    const level = referral.level
    const isRewardTaken = referral.reward_taken
    const referralCard = document.createElement('div')

    referralCard.setAttribute('data-id', id)
    referralCard.classList.add('leaderboard__card', 'flex', 'align__center', 'justify__space__between')

    referralCard.innerHTML = `
<div class="leaderboard__card__content flex align__center">
                        <div class="leaderboard__user__avatar">
                            <img src="${avatar}" alt="User avatar" />
                        </div>

                        <div class="leaderboard__card__text__container flex align__center">
                            <div class="leaderboard__card__personal__text__container flex column">
                                <span class="leaderboard__username">${username}</span>
                                <div class="leaderboard__summ__container flex align__center">
                                    <div class="leaderboard__summ__content flex align__end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M6.73967 5.33009C6.92592 5.1824 7.14746 5.07491 7.38459 5.00681V7.30015C7.15053 7.23605 6.93138 7.12648 6.73967 6.97768C6.41638 6.72086 6.29167 6.41891 6.29167 6.15389C6.29167 5.88886 6.41638 5.58691 6.73967 5.33009ZM8.61536 11.0048V8.68763C8.90008 8.75738 9.16018 8.87471 9.37105 9.03307C9.72141 9.29563 9.84613 9.59594 9.84613 9.8462C9.84613 10.0965 9.72141 10.3968 9.37105 10.6593C9.14489 10.8239 8.88787 10.9419 8.61536 11.0048Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8 0C3.58154 0 0 3.58154 0 8C0 12.4185 3.58154 16 8 16C12.4185 16 16 12.4185 16 8C16 3.58154 12.4185 0 8 0ZM8.61539 3.07692C8.61539 2.91371 8.55055 2.75719 8.43514 2.64178C8.31974 2.52637 8.16321 2.46154 8 2.46154C7.83679 2.46154 7.68027 2.52637 7.56486 2.64178C7.44945 2.75719 7.38462 2.91371 7.38462 3.07692V3.74646C6.87004 3.83305 6.38507 4.04621 5.97333 4.36677C5.38913 4.83118 5.06092 5.47446 5.06092 6.15385C5.06092 6.83405 5.38913 7.47651 5.97415 7.94092C6.38605 8.26913 6.87836 8.4718 7.38462 8.56123V11.0047C7.11206 10.9415 6.85504 10.8241 6.62892 10.6593L5.90769 10.1177C5.84304 10.0693 5.76947 10.034 5.69119 10.0139C5.6129 9.99386 5.53143 9.98942 5.45143 10.0009C5.28986 10.0239 5.14408 10.1103 5.04615 10.2408C4.94823 10.3714 4.90618 10.5355 4.92926 10.6971C4.95234 10.8587 5.03866 11.0044 5.16923 11.1024L5.89046 11.6439C6.3278 11.9721 6.84964 12.1731 7.38462 12.2593V12.9231C7.38462 13.0863 7.44945 13.2428 7.56486 13.3582C7.68027 13.4736 7.83679 13.5385 8 13.5385C8.16321 13.5385 8.31974 13.4736 8.43514 13.3582C8.55055 13.2428 8.61539 13.0863 8.61539 12.9231V12.2585C9.15575 12.1773 9.66842 11.9664 10.1095 11.6439C10.7208 11.1852 11.0769 10.5411 11.0769 9.84615C11.0769 9.15118 10.7208 8.50708 10.1095 8.04841C9.66853 7.72557 9.15584 7.51441 8.61539 7.43303V5.00841C8.85333 5.07569 9.07405 5.18318 9.26031 5.33087L9.60082 5.60164C9.72867 5.70316 9.89161 5.74973 10.0538 5.73111C10.216 5.71249 10.3641 5.63021 10.4656 5.50236C10.5672 5.37451 10.6137 5.21157 10.5951 5.04939C10.5765 4.8872 10.4942 4.73906 10.3664 4.63754L10.0258 4.36677C9.61426 4.04663 9.12959 3.83376 8.61539 3.74728V3.07692Z"
                                                fill="white" />
                                        </svg>

                                        <span class="leaderboard__user__summ__value">
                                        ${formattedTokens}
                                        </span>
                                    </div>

                                    <span class="leaderboard__card__level__value">${level}ур.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    ${isRewardTaken ? `
                        <button type="button" class="received__award__button">
                        Получено
                    </button>
                        ` : `
                                                <button type="button" class="get__award__button">
                        Забрать
                    </button>
                        `
        }
`

    referralsContainer.appendChild(referralCard)
}

async function getReferals() {
    try {
        preloader.setActive()
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/referrals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': initData
            },
        })
        const data = await response.json()
        console.log(data)
        const userReferalLink = await getUserData().referral_link

        data.map((referral) => createReferral(referral))

        referalLinkValue.setAttribute('data-link', userReferalLink)
        referalLinkValue.textContent = userReferalLink
    } catch (error) {
        console.error(`Error: ${error}`)
    } finally {
        preloader.setInactive()
    }
}

getReferals()