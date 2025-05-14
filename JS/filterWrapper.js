document.addEventListener('DOMContentLoaded', () => {
    initializeFilter()

    document.querySelectorAll('.filter__wrapper').forEach(wrapper => {
        wrapper.querySelectorAll('.filter__button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault()

                wrapper.querySelectorAll('.filter__button').forEach(btn => {
                    btn.classList.remove('active')
                })

                button.classList.add('active')

                const filterValue = button.getAttribute('data-filter')

                applyFilter(filterValue)
            })
        })
    })
})

function initializeFilter() {
    const firstWrapper = document.querySelector('.filter__wrapper')
    if (!firstWrapper) return

    const firstButton = firstWrapper.querySelector('.filter__button')
    if (!firstButton) return

    firstButton.classList.add('active')

    const defaultFilterValue = firstButton.getAttribute('data-filter')
    applyFilter(defaultFilterValue)
}

setTimeout(() => {
    document.querySelector('.events__block').style.display = 'block'
    document.querySelector('.garden__block').style.display = 'block'
}, 100)

export function applyFilter(filterValue) {
    document.querySelectorAll('.filter__block[data-filter]').forEach(block => {
        const blockFilterValue = block.getAttribute('data-filter')

        if (filterValue === 'all' || blockFilterValue === filterValue) {
            block.style.display = 'block'
        } else {
            block.style.display = 'none'
        }

        setTimeout(() => {
            if (document.querySelector('.events__block').style.display == 'none' && document.querySelector('.daily__block').style.display == 'none') {
                document.querySelector('.events__block').style.display = 'block'
            }

            if (document.querySelector('.garden__block').style.display == 'none' && document.querySelector('.boosts__block').style.display == 'none') {
                document.querySelector('.garden__block').style.display = 'block'
            }
        }, 100)
    })
}