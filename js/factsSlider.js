function isMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const factsSliderContainer = document.querySelector('.facts__slider__heading__container')
    const indicator = factsSliderContainer.querySelector('.facts__slider__indicator')
    const prevButtons = factsSliderContainer.querySelectorAll('.to__prev__button')
    const nextButtons = factsSliderContainer.querySelectorAll('.to__next__button')
    const currentIndexElement = factsSliderContainer.querySelector('.current__slide__value')
    const currentMobileIndexElement = factsSliderContainer.querySelector('.current__slide__value.adaptive')
    const totalIndexElements = factsSliderContainer.querySelector('.total_slide__value')
    const totalMobileIndexElements = factsSliderContainer.querySelector('.total_slide__value.adaptive')
    const factCardsContainer = document.querySelector('.facts__card__container')
    const factCards = document.querySelectorAll('.fact__card')

    let currentIndex = 0
    const totalSlides = factCards.length

    function updateSlider() {
        const percentage = (currentIndex / totalSlides) * 100
        factCardsContainer.style.transform = `translateX(-${percentage}%)`

        if (isMobileDevice()) {
            indicator.style.width = `${(currentIndex + 1) / (totalSlides) * 100}%`
        } else {
            indicator.style.width = `${(currentIndex + 1) / (totalSlides - 3) * 100}%`
        }

    }

    function moveSlide(direction) {

        if (isMobileDevice()) {
            if (direction === 'right' && currentIndex < totalSlides - 1) {
                currentIndex++
                updateSlider()
            }
        } else {
            if (isMobileDevice()) {
                if (direction === 'right' && currentIndex < totalSlides) {
                    currentIndex++
                    updateSlider()
                }
            } else {
                if (direction === 'right' && currentIndex < totalSlides - 4) {
                    currentIndex++
                    updateSlider()
                }
            }
        }

        if (direction === 'left' && currentIndex > 0) {
            currentIndex--
            updateSlider()
        }

        if (isMobileDevice()) {
            currentMobileIndexElement.textContent = currentIndex + 1
        } else {
            currentIndexElement.textContent = currentIndex + 1
        }

        if ((currentIndex + 1) >= (totalSlides) && isMobileDevice()) {
            setTimeout(() => {
                nextButtons.forEach(button => button.setAttribute('disabled', ''))
                prevButtons.forEach(button => button.removeAttribute('disabled'))
            }, 300)
        } else if (currentIndex >= (totalSlides - 4) && !isMobileDevice()) {
            nextButtons.forEach(button => button.setAttribute('disabled', ''))
            prevButtons.forEach(button => button.removeAttribute('disabled'))
        } else if (currentIndex <= 0) {
            if (isMobileDevice()) {
                setTimeout(() => {
                    prevButtons.forEach(button => button.setAttribute('disabled', ''))
                    nextButtons.forEach(button => button.removeAttribute('disabled'))
                }, 300)
            } else {
                prevButtons.forEach(button => button.setAttribute('disabled', ''))
                nextButtons.forEach(button => button.removeAttribute('disabled'))
            }
        } else {
            prevButtons.forEach(button => button.removeAttribute('disabled'))
            nextButtons.forEach(button => button.removeAttribute('disabled'))
        }
    }

    prevButtons.forEach((prevButton) => prevButton.addEventListener('click', () => moveSlide('left')))
    nextButtons.forEach((nextButton) => nextButton.addEventListener('click', () => moveSlide('right')))
    // let startX = 0
    // let endX = 0

    // factCardsContainer.addEventListener('touchstart', e => {
    //     startX = e.touches[0].clientX
    // })

    // factCardsContainer.addEventListener('touchmove', e => {
    //     endX = e.touches[0].clientX
    // })

    // factCardsContainer.addEventListener('touchend', () => {
    //     const distance = startX - endX
    //     if (Math.abs(distance) > 50) {
    //         if (distance > 0) moveSlide('right')
    //         else moveSlide('left')
    //     }
    //     startX = 0
    //     endX = 0
    // })

    updateSlider()

    if (isMobileDevice()) {
        totalMobileIndexElements.textContent = `/${totalSlides}`
    } else {
        totalIndexElements.textContent = `/${totalSlides - 3}`
    }

})