function isMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const previewContainer = document.querySelector('.page__preview__container')
    const sliderContainer = document.querySelector('.page__preview__swiper__container')
    const slides = Array.from(previewContainer.children)
    const prevButton = sliderContainer.querySelector('.prev__preview__button')
    const nextButton = sliderContainer.querySelector('.next__preview__button')
    const indicator = sliderContainer.querySelector('.page__preview__progressbar__indicator')

    let currentIndex = 0
    const totalSlides = slides.length

    function updateSlider() {
        const percentage = (currentIndex / totalSlides) * 100
        previewContainer.style.transform = `translateX(-${percentage}%)`
        indicator.style.width = `${(currentIndex + 1) / (totalSlides - 2) * 100}%`
    }

    function moveSlide(direction) {

        if (isMobileDevice()) {
            if (direction === 'right' && currentIndex < totalSlides - 1) {
                currentIndex++
                updateSlider()
            }
        } else {
            if (direction === 'right' && currentIndex < totalSlides - 5) {
                currentIndex++
                updateSlider()
            }
        }

        if (direction === 'left' && currentIndex > 0) {
            currentIndex--
            updateSlider()
        }
    }

    prevButton.addEventListener('click', () => moveSlide('left'))
    nextButton.addEventListener('click', () => moveSlide('right'))

    let startX = 0
    let endX = 0

    previewContainer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX
    })

    previewContainer.addEventListener('touchmove', e => {
        endX = e.touches[0].clientX
    })

    previewContainer.addEventListener('touchend', () => {
        const distance = startX - endX
        if (Math.abs(distance) > 50) {
            if (distance > 0) moveSlide('right')
            else moveSlide('left')
        }
        startX = 0
        endX = 0
    })

    updateSlider()
})