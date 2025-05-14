import { createEvents } from "./createEvents.js"
import { filteredQuests } from "./filteredQuestsData.js"
import { questsData } from "./questsData.js"
import { rebuildCategoryStatsMap } from "./rebuildCategoryStatsMap.js"
import { selectedCategory } from "./selectedCategory.js"

const defaultCategory = document.querySelector('.default__category')

async function handleSortByCategory(event) {
    let clickedCategory = event.currentTarget

    if (!clickedCategory) {
        clickedCategory = defaultCategory
    }
    console.log(clickedCategory)

    if (clickedCategory.classList.contains('active') && !clickedCategory.classList.contains('default__category')) return

    const clickedCategoryValue = clickedCategory.getAttribute('value')

    selectedCategory.value = clickedCategoryValue

    if (clickedCategory.classList.contains('default__category')) {
        setTimeout(() => {
            document.querySelector('.default__category').classList.add('active')
        }, 0)
        filteredQuests.value = questsData.value
    } else {
        filteredQuests.value = questsData.value.filter(
            (quest) => quest.quest.category.name === clickedCategoryValue
        )
    }

    rebuildCategoryStatsMap()
    createEvents()
}


export { handleSortByCategory }