document.addEventListener('DOMContentLoaded', () => {
    const etaps = Array.from(document.querySelectorAll('[data-etap]'))
    let currentEtapIndex = 0

    const returnButtons = Array.from(document.querySelectorAll('.return__button'))
    const buttons = Array.from(document.querySelectorAll('.horizontal__touch__slide__button'))
    const containers = Array.from(document.querySelectorAll('.horizontal__touch__slide__button__container'))
    const buttonTexts = Array.from(document.querySelectorAll('.horizontal__touch__slide__button__container .button__text'))
    const arrowsContainers = Array.from(document.querySelectorAll('.horizontal__touch__slide__button__container .arrows__container'))

    let isDragging = false
    let startX = 0
    let currentX = 0

    function handleTouchStart(event, index) {
        const container = containers[index]
        const buttonText = buttonTexts[index]
        const arrowsContainer = arrowsContainers[index]

        buttonText.classList.add('hidden')
        arrowsContainer.classList.add('hidden')

        isDragging = true
        startX = event.touches[0].clientX
        currentX = buttons[index].offsetLeft

        buttons[index].style.transition = 'none'
    }

    function handleTouchMove(event, index) {
        if (!isDragging) return

        const containerWidth = containers[index].offsetWidth
        const touchX = event.touches[0].clientX
        const deltaX = touchX - startX
        const newLeft = Math.max(0, Math.min(currentX + deltaX, containerWidth - buttons[index].offsetWidth))

        buttons[index].style.left = `${newLeft}px`
    }

    function handleTouchEnd(index) {
        if (!isDragging) return

        const containerWidth = containers[index].offsetWidth
        const buttonPosition = buttons[index].offsetLeft
        const middlePoint = containerWidth / 2

        buttons[index].style.transition = 'left 0.3s ease-in-out'
        const buttonText = buttonTexts[index]
        const arrowsContainer = arrowsContainers[index]

        if (buttonPosition > (middlePoint - 50)) {
            buttons[index].style.left = `${containerWidth - buttons[index].offsetWidth - 8}px`

            setTimeout(() => {
                 buttons[index].style.left = `0px`
                 buttonText.classList.remove('hidden')
                 arrowsContainer.classList.remove('hidden')
            }, 400);

            if (currentEtapIndex < etaps.length - 1) {
                switchEtap(currentEtapIndex + 1)
            }
        } else {
            buttonText.classList.remove('hidden')
            arrowsContainer.classList.remove('hidden')
            buttons[index].style.left = '0px'
        }

        isDragging = false
    }

    function switchEtap(nextIndex) {
        const currentEtap = etaps[currentEtapIndex]
        const nextEtap = etaps[nextIndex]

        currentEtap.classList.remove('active')
        currentEtap.classList.add('out-left')


        nextEtap.classList.add('active')


        currentEtapIndex = nextIndex
    }

    function returnEtap(prevIndex) {
        const currentEtap = etaps[currentEtapIndex]
        const prevEtap = etaps[prevIndex]

        currentEtap.classList.remove('active')
        prevEtap.classList.remove('out-left')

        prevEtap.classList.add('active')

        currentEtapIndex = prevIndex
    }

    buttons.forEach((button, index) => {
        button.addEventListener('touchstart', (event) => handleTouchStart(event, index))
        button.addEventListener('touchmove', (event) => handleTouchMove(event, index))
        button.addEventListener('touchend', () => handleTouchEnd(index))
    })

    returnButtons.forEach((returnButton, index) => {
        returnButton.addEventListener('click', () => returnEtap(currentEtapIndex - 1))
    })
})