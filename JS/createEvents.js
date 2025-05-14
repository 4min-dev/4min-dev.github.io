import { categoryStatsMap } from "./categoryStatsMap.js"
import { createCategory } from "./createCategory.js"
import { createQuest } from "./createQuest.js"
import { filteredQuests } from "./filteredQuestsData.js"
import { handleSortByCategory } from "./handleSortByCategory.js"
import { questsData } from "./questsData.js"
import { rebuildCategoryStatsMap } from "./rebuildCategoryStatsMap.js"
import { selectedCategory } from "./selectedCategory.js"

const dailyEventsBlock = document.querySelector('.daily__events__block')
const eventsBlock = document.querySelector('.default__events__block')
const defaultCategoryValue = document.querySelector('.default__category__value')
const caregoriesNavbar = document.querySelector('.event__navbar__menu')
const categories = document.querySelectorAll('.event__category')

async function createEvents() {
    const permanentEventsBlock = document.querySelector('.default__events__block')

    dailyEventsBlock.innerHTML = ''
    eventsBlock.innerHTML = `<span class="event__block__title">Постоянные задания️</span`

    rebuildCategoryStatsMap()

    filteredQuests.value.map(async (questData) => await createQuest(questData))
    const hasNonOneTimeQuest = filteredQuests.value.some(q => q.quest && q.quest.one_time === false)

    if (!hasNonOneTimeQuest && permanentEventsBlock) {
        permanentEventsBlock.innerHTML = `
         <span class="event__block__title">Постоянные задания️</span>
         <span class="no__found__message">Заданий пока нет ;(</span>
        `
    }

    defaultCategoryValue.textContent = questsData.value.length

    caregoriesNavbar.innerHTML = `<li class="event__category flex align__center default__category ${selectedCategory.value === 'Все' ? 'active' : ''}">
    <span class="event__category__name text__uppercase ${selectedCategory.value === 'Все' ? 'active' : ''}">
        Все
    </span>
    <span class="event__category__value default__category__value">
        ${questsData.value.length}
    </span>
</li>`

    const questCategories = Array.from(categoryStatsMap.values())
    
    questCategories.map((questCategory) => {
        const isActive = selectedCategory.value === questCategory.title

        const defaultCategory = document.querySelector('.default__category')

        defaultCategory.addEventListener('click', () => {
            if (defaultCategory.classList.contains('active')) return
            filteredQuests.value = questsData.value

            categories.forEach((category) => {
                if (category.classList.contains('default__category')) {
                    category.classList.add('active')
                } else {
                    category.classList.remove('active')
                }
            })

            handleSortByCategory(defaultCategory)
        })

        createCategory(questCategory, isActive)
    })
}

export { createEvents }
