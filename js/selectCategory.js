document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.categories__block')
    const categoryCards = document.querySelectorAll('.place__category__card')

    function handleSelectCategory() {
        categories.forEach((category) => {
            if(category.classList.contains('selected__category__block')) {
                category.classList.add('active')
            } else {
                category.classList.remove('active')
            }
        })
    }

    categoryCards.forEach((categoryCard) => categoryCard.addEventListener('click', handleSelectCategory))
})