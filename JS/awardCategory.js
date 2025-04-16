document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.event__navbar__menu')

    container.addEventListener('click', (event) => {
        const clickedCategory = event.target.closest('.event__category')

        if (clickedCategory) {
            const allCategories = container.querySelectorAll('.event__category')

            allCategories.forEach(category => {
                category.classList.remove('active')
            })

            clickedCategory.classList.add('active')
        }
    })
})