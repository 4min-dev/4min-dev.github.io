document.addEventListener('DOMContentLoaded', () => {
    const errorPopupOverlay = document.querySelector('.error__popup__overlay')
    const emailInput = document.querySelector('.donate__email__input')
    const donateButton = document.getElementById('donate-button')

    function handleValidate(event) {
        if (!emailInput.value && document.querySelector('.email__block').classList.contains('active')) {
            errorPopupOverlay.classList.add('active')
            return event.preventDefault()
        }
    }

    donateButton.addEventListener('click', handleValidate)
})