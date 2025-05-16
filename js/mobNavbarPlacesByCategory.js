document.addEventListener('DOMContentLoaded', () => {
    const navbarCards = document.querySelectorAll('.navbar__card')

    function handleActiveNavbarCard(event) {
        const clickedCard = event.currentTarget

        navbarCards.forEach((navbarCard) => {
            if (navbarCard === clickedCard) {
                navbarCard.classList.add('active')
            } else {
                navbarCard.classList.remove('active')
            }
        })
    }

    navbarCards.forEach((navbarCard) => navbarCard.addEventListener('click', handleActiveNavbarCard))
})