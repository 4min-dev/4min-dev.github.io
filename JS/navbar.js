document.addEventListener('DOMContentLoaded', () => {
    const navbarButtons = document.querySelectorAll('.navbar__panel__button')

    navbarButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            if (button.classList.contains('bonuses__navbar__button')) {
                return
            }

            navbarButtons.forEach(btn => btn.classList.remove('active'))

            button.classList.add('active')
        })
    })
})