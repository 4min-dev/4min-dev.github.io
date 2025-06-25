import { categoryStatsMap } from "./categoryStatsMap.js"
import { questsData } from "./questsData.js"

function rebuildCategoryStatsMap() {
    categoryStatsMap.clear()

    questsData.value.forEach((quest) => {
        const category = quest.quest.category
        const key = category.id

        if (!categoryStatsMap.has(key)) {
            categoryStatsMap.set(key, {
                title: category.name,
                value: category.value,
                quests: 1
            })
        } else {
            categoryStatsMap.get(key).quests += 1
        }
    })
}

export { rebuildCategoryStatsMap }