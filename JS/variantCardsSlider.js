import { updateCurrentPreview } from "./pages/landing/sections/variants/UI/updateCurrentPreview.js"

document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector('.variants__section__cards__container')
    const variantCards = cardsContainer.querySelectorAll('.variants__section__card')
    const variantsSection = document.querySelector('.variants__section__main__ui__container')

    function handleSelectCard(event) {
        variantCards.forEach((card) => card.classList.remove('active'))

        const currentCard = event.currentTarget
        currentCard.classList.add('active')

        const cardRect = currentCard.getBoundingClientRect()
        const sectionRect = variantsSection.getBoundingClientRect()

        const relativeY = cardRect.top - sectionRect.top

        updateCurrentPreview(currentCard.getAttribute('data-id'), relativeY)
    }

    variantCards.forEach((card) => card.addEventListener('click', handleSelectCard))
})