import { getUserData } from "./getUserData.js"

const userLevel = document.querySelector('.profile__level')
const userFullname = document.querySelector('.profile__user__fullname__value')
const currentLevelValue = document.querySelector('.curr__level__value')
const nextLevelValue = document.querySelector('.next__level__value')
const levelIndicator = document.querySelector('.user__experience__indicator')
const profilePopupAvatar = document.querySelector('.popup__profile__avatar')
const userBoardCard = document.querySelector('.my__profile')
const boardProfileAvatar = userBoardCard.querySelector('.leaderboard__user__avatar__value')
const boardProfileUserfullname = userBoardCard.querySelector('.leaderboard__username')
const boardProfileUserTokens = userBoardCard.querySelector('.leaderboard__user__summ__value')

async function getProfileData() {
    try {
        const userData = await getUserData()

        const currentUserExperience = userData.experience
        const experienceToNextLevel = userData.experience_to_next_level
        const level = userData.level
        const avatar = userData.avatar_url
        const username = userData.first_name
        const tokens = userData.tokens
        const progressPercentage = currentUserExperience >= experienceToNextLevel
            ? 100
            : (currentUserExperience / experienceToNextLevel) * 100

        userLevel.textContent = `${level} Уровень`
        userFullname.textContent = username
        boardProfileUserfullname.textContent = username
        currentLevelValue.textContent = `${level}ур.`
        nextLevelValue.textContent = `${level + 1}ур.`
        levelIndicator.style.width = `${progressPercentage}%`
        profilePopupAvatar.setAttribute('src', avatar)
        boardProfileAvatar.setAttribute('src', avatar)

        const tokensString = tokens.toLocaleString('en-US')
        const parts = tokensString.split(',')

        let formattedTokens = '';
        for (let i = 0; i < parts.length; i++) {
            if (i > 0) {
                formattedTokens += `<span class="opacity">,</span>`
            }
            if (i === parts.length - 1) {
                formattedTokens += `<span class="opacity">${parts[i]}</span>`
            } else {
                formattedTokens += parts[i]
            }
        }

        boardProfileUserTokens.innerHTML = formattedTokens

        console.log(userData)
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export { getProfileData }