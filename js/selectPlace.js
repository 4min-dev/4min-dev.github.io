document.addEventListener('DOMContentLoaded', () => {
    const selectableCards = document.querySelectorAll('.selected__category__card')
    const asideBlocks = document.querySelectorAll('.categories__block')

    function handleSelectPlace() {
        asideBlocks.forEach((asideBlock) => {
            if (asideBlock.classList.contains('selected__place__block')) {
                asideBlock.classList.add('active')
            } else {
                asideBlock.classList.remove('active')
            }
        })
    }

    selectableCards.forEach((selectableCard) => selectableCard.querySelector('.selected__category__card__preview').addEventListener('click', handleSelectPlace))
})