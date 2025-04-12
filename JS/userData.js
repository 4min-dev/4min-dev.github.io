import formatNumberWithZeros from "./formatNumbersWithZeros.js"
import { retrieveLaunchParams } from 'https://cdn.jsdelivr.net/npm/@telegram-apps/sdk/+esm';
const { initDataRaw, initData } = retrieveLaunchParams();

const userHeadingAvatarElements = document.querySelectorAll('.user__avatar__container')
const userLevelValues = document.querySelectorAll('.user__num__value')
const userNicknames = document.querySelectorAll('.username')
const userExperienceStages = document.querySelectorAll('.user__profile__stage')
const currentBalance = document.querySelector('.total__tokens__value')
const tapToken = document.querySelector('.tap__token')
const secondToken = document.querySelector('.perSecondToken')

function getTokenValue(tokenValue) {
    if (tokenValue === 1) {
        return `${tokenValue} Токен`
    } else if (tokenValue > 1 && tokenValue <= 4) {
        return `${tokenValue} Токена`
    } else {
        return `${tokenValue} Токенов`
    }
}

async function fetchUserData() {
    try {
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
        const userTokenPerTap = data.tokens_per_tap

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
        currentBalance.innerHTML = userTokens
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

    fetchUserData()

export { fetchUserData }