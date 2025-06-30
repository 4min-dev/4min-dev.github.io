import isMobileDevice from "./isMobileDevice.js"

document.addEventListener('DOMContentLoaded', () => {
    const selectedCategoryCardsContainer = document.querySelector('.selected__category__cards__container')
    const changeContainerDisplayButtons = document.querySelectorAll('.change__container__display__button')
    const changedCategoryHeading = document.querySelector('.changed__category__heading')
    const visitedPlacesDefaultHeading = document.querySelector('.visited__places__header__default')
    const defaultChangeCategoryIcon = document.querySelector('.default__change__category__icon')
    const changedCategoryIcon = document.querySelector('.changedCategoryIcon')

    function changeContainerDisplayHandler() {
        if (selectedCategoryCardsContainer.classList.contains('column')) {
            selectedCategoryCardsContainer.classList.remove('column')
            selectedCategoryCardsContainer.classList.add('row')
            changedCategoryHeading.classList.add('visible')

            if (!isMobileDevice()) {
                visitedPlacesDefaultHeading.style.display = 'none'
            } else {
                defaultChangeCategoryIcon.classList.add('hidden')
                changedCategoryIcon.classList.remove('hidden')
            }
        } else {
            selectedCategoryCardsContainer.classList.add('column')
            selectedCategoryCardsContainer.classList.remove('row')
            changedCategoryHeading.classList.remove('visible')

            if (!isMobileDevice()) {
                visitedPlacesDefaultHeading.style.display = 'flex'
            } else {
                defaultChangeCategoryIcon.classList.remove('hidden')
                changedCategoryIcon.classList.add('hidden')
            }
        }
    }

    changeContainerDisplayButtons.forEach((changeContainerDisplayButton) => changeContainerDisplayButton.addEventListener('click', changeContainerDisplayHandler))
})