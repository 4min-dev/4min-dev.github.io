import { isMobileDevice } from "../../../../../isMobileDevice.js"

export function updateCurrentPreview(activeCardIndex, YPosition) {
    const preivewElements = document.querySelectorAll('.variants__section__current__preview__container')

    preivewElements.forEach((previewContainer) => {
        if(!isMobileDevice()) {
            previewContainer.style.marginTop = `${YPosition}px`
        }

        previewContainer.querySelectorAll('.preview__image').forEach((image) => {
            if (image.getAttribute('data-id') == activeCardIndex) {
                image.classList.add('active')
            } else {
                image.classList.remove('active')
            }
        })
    })
}