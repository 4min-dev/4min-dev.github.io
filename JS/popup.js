document.addEventListener('DOMContentLoaded', () => {
    const popupOverlays = document.querySelectorAll('.popup__overlay')

    function handlePopupOverlay(overlay) {
        overlay.classList.remove('active')
    }

    popupOverlays.forEach(overlay => {
        overlay.querySelector('.popup').addEventListener('click', (e) => e.stopPropagation())
        overlay.querySelectorAll('.close__popup__button').forEach(button => button.addEventListener('click', () => handlePopupOverlay(overlay)))
        overlay.addEventListener('click', () => handlePopupOverlay(overlay))
    })
})