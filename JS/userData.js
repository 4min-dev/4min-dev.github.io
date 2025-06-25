import formatNumberWithZeros from "./formatNumbersWithZeros.js"
import Preloader from "./preloader.js"

const preloader = new Preloader()

const userHeadingAvatarElements = document.querySelectorAll('.user__avatar__container')
const userLevelValues = document.querySelectorAll('.user__num__value')
const userNicknames = document.querySelectorAll('.username')
const userExperienceStages = document.querySelectorAll('.user__profile__stage')
const currentBalance = document.querySelector('.total__tokens__value')
const tapToken = document.querySelector('.tap__token')
const secondToken = document.querySelector('.perSecondToken')

const backButton = Telegram.WebApp.BackButton;
backButton.hide()

function getTokenValue(tokenValue) {
    if (tokenValue === 1) {
        return `${tokenValue} Токен`
    } else if (tokenValue > 1 && tokenValue <= 4) {
        return `${tokenValue} Токена`
    } else {
        return `${tokenValue} Токенов`
    }
}

async function fetchUserData(isPreloaderSkip, isTimeout) {
    try {

        if (!isPreloaderSkip) {
            preloader.setActive()
        }

        const initData = window.Telegram.WebApp.initData

        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/users/me', {
            method: 'GET',
            headers: {
                'initData': initData
            }
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)

        const userAvatar = data.avatar_url
        const userLevel = data.level
        const userNickname = data.first_name
        const userTokens = formatNumberWithZeros(data.tokens)
        const userTokenPerSecond = data.tokens_per_second
        const userTokenPerTap = data.tokens_per_tap.toFixed(2)
        const userWaterPerMinute = data.water_per_minute.toFixed(2)

        userHeadingAvatarElements.forEach((userHeadingAvatar) => {
            const imgElement = userHeadingAvatar.querySelector('img')

            if (imgElement) {
                imgElement.setAttribute('src', userAvatar)
            }
        })
        userLevelValues.forEach((userLevelValue) => userLevelValue.textContent = userLevel)
        userNicknames.forEach((userNicknameElement) => userNicknameElement.textContent = userNickname)
        tapToken.textContent = getTokenValue(userTokenPerTap)
        secondToken.textContent = getTokenValue(userTokenPerSecond)

        if (!isPreloaderSkip) {
            currentBalance.innerHTML = userTokens
        }
        document.querySelector('.increment__water__value').textContent = userWaterPerMinute
    } catch (error) {
        console.error(`Error: ${error}`)
    } finally {
        if (!isPreloaderSkip) {
            preloader.setInactive(isTimeout)
        }
    }
}

if (window.Telegram && window.Telegram.WebApp) {
    fetchUserData()
} else {
    console.error('Telegram WebApp is not available')
}

export { fetchUserData }