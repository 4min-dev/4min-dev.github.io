document.addEventListener('DOMContentLoaded', () => {
    const navbarButton = document.querySelector('.mobile__header__aside__button')
    const navbarPopup = document.querySelector('.navbar__popup__overlay')

    function handleMobileNavbarButtonClick() {
        navbarPopup.classList.toggle('active')
    }
    
    navbarButton.addEventListener('click', handleMobileNavbarButtonClick)
    navbarPopup.addEventListener('click', handleMobileNavbarButtonClick)
})