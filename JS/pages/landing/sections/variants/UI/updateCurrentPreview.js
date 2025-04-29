
export function updateCurrentPreview(activeCardIndex) {
    const preivewElements = document.querySelectorAll('.variants__section__current__preview__container')

    preivewElements.forEach((previewContainer) => {
        previewContainer.querySelectorAll('.preview__image').forEach((image) => {
            if (image.getAttribute('data-id') == activeCardIndex) {
                image.classList.add('active')
            } else {
                image.classList.remove('active')
            }
        })
    })
}