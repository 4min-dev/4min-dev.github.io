document.addEventListener("DOMContentLoaded", () => {

    const addressPopupOverlay = document.getElementById('address__popup__overlay')
    const addressPopup = document.getElementById('address__popup')

    const getAddressPopupButtons = document.querySelectorAll('.add__button ')

    function handleaddressPopupOverlay() {
        const isPopupOpen = () => {
            return addressPopupOverlay.classList.contains('visible') || addressPopupOverlay.classList.contains('closing')
        }

        if (isPopupOpen()) {
            addressPopupOverlay.classList.add('closing')
            addressPopupOverlay.classList.remove('visible')

            setTimeout(() => {
                addressPopupOverlay.classList.remove('closing')
            }, 700)
        } else {
            addressPopupOverlay.classList.add('visible')
        }
    }

    addressPopupOverlay.addEventListener('click', () => handleaddressPopupOverlay())

    addressPopup.addEventListener('click', (event) => event.stopPropagation())
    getAddressPopupButtons.forEach((getAddressPopupButton) => getAddressPopupButton.addEventListener('click', handleaddressPopupOverlay))
})
