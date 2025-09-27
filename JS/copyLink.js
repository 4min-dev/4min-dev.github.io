document.addEventListener('DOMContentLoaded', () => {
    const copyContainers = document.querySelectorAll('.copy__input__container')

    function handleCopyLink(link) {
        navigator.clipboard.writeText(link)
        document.querySelector('.copy__message__popup__overlay').classList.add('active')
    }

    copyContainers.forEach(container => {
        const copyInput = container.querySelector('.copy__input')
        console.log(copyInput)
        if (copyInput) {
            const link = copyInput.getAttribute('value')
            const copyButton = container.querySelector('.copy__link__button')

            copyButton.addEventListener('click', () => handleCopyLink(link))
        }
    })
})