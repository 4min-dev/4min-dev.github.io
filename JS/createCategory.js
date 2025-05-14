import { handleSortByCategory } from "./handleSortByCategory.js"

const caregoriesNavbar = document.querySelector('.event__navbar__menu')

async function createCategory(categoryData, isActive = false) {
    const li = document.createElement('li')
    li.classList.add('event__category', 'flex', 'align__center')
    if (isActive) li.classList.add('active')
    li.setAttribute('value', categoryData.title)

    li.innerHTML = `
        <span class="event__category__name text__uppercase ${isActive ? 'active' : ''}">
            ${categoryData.value}
        </span>
        <span class="event__category__value">
            ${categoryData.quests}
        </span>
    `

    li.addEventListener('click', handleSortByCategory)
    caregoriesNavbar.appendChild(li)
}


export { createCategory }