import { createEvents } from "./createEvents.js"
import { filteredQuests } from "./filteredQuestsData.js"
import { questsData } from "./questsData.js"
import Preloader from './preloader.js'
const preloader = new Preloader()

const homePageQuestsValue = document.querySelector('.events__card__amount')

async function getEvents() {
    try {
        preloader.setActive()
        const response = await fetch('https://tapalka.wizardstech.ru:8443/api/quests', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'initData': window.Telegram.WebApp.initData
            }
        })
        const data = await response.json()

        questsData.value = data.quests
        filteredQuests.value = data.quests

        homePageQuestsValue.textContent = data.quests.length

        createEvents()
    } catch (error) {
        console.error(`Error: ${error}`)
    } finally {
        preloader.setInactive()
    }
}

document.addEventListener('DOMContentLoaded', () => getEvents())