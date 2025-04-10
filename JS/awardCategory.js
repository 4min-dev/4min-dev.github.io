document.addEventListener('DOMContentLoaded', () => {
    const eventCategoryItems = document.querySelectorAll('.event__category')

    eventCategoryItems.forEach(item => {
        item.addEventListener('click', (event) => {
            if (event.target.closest('.event__category')) {
                eventCategoryItems.forEach(category => {
                    category.classList.remove('active')
                })

                item.classList.add('active')
            }
        })
    })
})