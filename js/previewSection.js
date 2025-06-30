import isMobileDevice from "./isMobileDevice.js"
import { lockScroll } from "./lockScroll.js"
import { unlockScroll } from "./unlockScroll.js"

document.addEventListener('DOMContentLoaded', () => {
    const targetSection = document.getElementById('preview__section')
    const scrollContainer = targetSection.querySelector('.preview__section__cards__container')
    const textContainers = Array.from(targetSection.querySelectorAll('.preview__section__text__container'))
        .filter(element => window.getComputedStyle(element).display !== 'none')
    let previews
    const scrollSectionContainer = document.querySelector('.preview__section__scroll__container')
    const defaultVideo = document.querySelector('.default__preview__section__video')
    const defaultTitle = document.querySelector('.default__preview__section__title')
    const defaultDescription = document.querySelector('.default__preview__section__description')
    const previewContent = document.querySelector('.preview__content')
    const currentImagePreview = document.querySelector('.current__image__preview')

    if (isMobileDevice()) {
        previews = targetSection.querySelector('.adaptive').querySelectorAll('.preview')
    } else {
        previews = targetSection.querySelector('.desktop').querySelectorAll('.preview')
    }

    const totalSlides = textContainers.length
    let currentIndex = -1
    let scrollLocked = false
    let fullscreenActive = false
    let hasEnteredFullscreen = false
    let isThrottled = false
    let delta
    let touchStartY = 0
    let lastTouchMoveY = 0

    const isInView = (elem) => {
        const rect = elem.getBoundingClientRect()
        return (
            rect.top < window.innerHeight - 500 &&
            rect.bottom > 200
        )
    }

    const updateTransform = () => {

        if (currentIndex === 0 && isMobileDevice() && delta > 0) {
            currentIndex = 1
        }

        if (currentIndex === -1 || currentIndex === totalSlides) {
            scrollSectionContainer.classList.remove('active')
            scrollContainer.style.transform = `translate(-50%, 20%)`

            if (currentIndex === -1) {
                defaultDescription.classList.add('active')
                defaultDescription.textContent = ''
                currentImagePreview.classList.remove('active')
                defaultTitle.textContent = `Твой Крым начинается здесь: выбирай место для незабываемых эмоций`
            }
        } else {
            defaultVideo.classList.remove('active')
            let translateY

            if (isMobileDevice()) {
                translateY = -(currentIndex * 10)
            } else {
                translateY = -(currentIndex * 10)
            }

            scrollContainer.style.transform = `translate(-50%, ${translateY}%)`
        }
    }

    const updateTextClasses = () => {
        if (currentIndex === -1 && isMobileDevice()) {
            scrollSectionContainer.classList.add('active')
            previewContent.classList.remove('active')
            textContainers[0].classList.remove('next')
            textContainers[0].classList.add('active')
            previews[0].classList.add('active')
            scrollContainer.style.transform = `translate(-50%, -3%)`
            return
        } else if (currentIndex === 0 && !isMobileDevice()) {
            scrollSectionContainer.classList.add('active')
        }

        textContainers.forEach((el, index) => {
            el.classList.remove('active', 'prev', 'next')
            if (index === currentIndex) {
                el.classList.add('active')
            } else if (index < currentIndex) {
                el.classList.add('prev')
            } else {
                el.classList.add('next')
            }
        })
    }

    const updatePreviewImages = () => {
        if (currentIndex === -1 && isMobileDevice()) {

            return
        }

        previews.forEach((preview, index) => {
            preview.classList.toggle('active', index === currentIndex)
        })

        if (currentIndex >= 0 && previews[currentIndex]) {
            const currentSrc = previews[currentIndex].getAttribute('src')
            currentImagePreview.setAttribute('src', currentSrc)
            currentImagePreview.classList.add('active')
        } else {
            currentImagePreview.classList.remove('active')
        }
    }

    const handleWheel = (e) => {
        delta = e.deltaY
        if (!fullscreenActive || isThrottled) return

        isThrottled = true
        setTimeout(() => isThrottled = false, 600)

        if (delta < 0 && currentIndex === -1) {
            unlockScroll()
            fullscreenActive = false
            targetSection.classList.remove('isFullscreen')

            if (!previewContent.classList.contains('active')) {
                previewContent.classList.add('active')
            }

        } else if (delta > 0 && currentIndex < totalSlides - 1) {
            currentIndex++
        } else if (delta < 0 && currentIndex > 0) {
            currentIndex--
            scrollSectionContainer.classList.add('active')
            defaultTitle.classList.remove('active')
        } else if (delta < 0 && currentIndex === 0) {
            previewContent.classList.add('active')
            currentIndex = -1
            defaultVideo.classList.add('active')
            defaultTitle.classList.add('active', 'default')
            scrollSectionContainer.classList.remove('active')
            scrollContainer.style.transform = `translate(-50%, 20%)`
            targetSection.classList.remove('isFullscreen')
            fullscreenActive = false
            hasEnteredFullscreen = false
            unlockScroll()
        } else if (delta > 0 && currentIndex === totalSlides - 1) {
            previewContent.classList.add('active')
            defaultTitle.classList.add('active')
            defaultTitle.classList.remove('default')
            defaultDescription.classList.add('active')
            currentImagePreview.classList.add('active')
            const latestPreview = previews[previews.length - 1].getAttribute('src')
            currentImagePreview.setAttribute('src', latestPreview)
            defaultTitle.textContent = textContainers[totalSlides - 1].querySelector('.preview__section__title').textContent
            defaultDescription.textContent = textContainers[totalSlides - 1].querySelector('.preview__section__description').textContent
            scrollSectionContainer.classList.remove('active')
            unlockScroll()
            fullscreenActive = false
            targetSection.classList.remove('isFullscreen')
        } else {
            return
        }

        updateTransform()
        updateTextClasses()
        updatePreviewImages()
    }

    const handleScroll = () => {
        setTimeout(() => {
            if (isInView(targetSection) && !scrollLocked) {
                if ((currentIndex === -1 && delta < 0) || (currentIndex === totalSlides - 1 && delta > 0)) {
                    return
                }

                targetSection.classList.add('isFullscreen')
                fullscreenActive = true

                window.scrollTo({
                    top: targetSection.getBoundingClientRect().top + window.scrollY - (window.innerHeight - targetSection.offsetHeight) / 2,
                    behavior: 'smooth'
                })

                scrollSectionContainer.classList.add('active')

                if (delta > 0 && currentIndex < totalSlides - 1 && currentIndex > 0) {
                    if (isMobileDevice()) {
                        setTimeout(() => {
                            scrollSectionContainer.classList.add('active')
                            previewContent.classList.remove('active')
                            textContainers[0].classList.remove('next')
                            textContainers[0].classList.add('active')
                            previews[0].classList.add('active')
                            scrollContainer.style.transform = `translate(-50%, -3%)`
                        }, 200)
                    } else {
                        scrollSectionContainer.classList.add('active')
                        previewContent.classList.remove('active')
                    }
                } else if (delta < 0 && currentIndex === totalSlides - 1) {
                    previewContent.classList.remove('active')
                }

                setTimeout(() => {
                    if (isMobileDevice()) {
                        scrollSectionContainer.classList.add('active')
                        previewContent.classList.remove('active')
                    }
                }, 200)
                lockScroll()

                setTimeout(() => {
                    document.addEventListener('scroll', () => {
                        if (fullscreenActive && !hasEnteredFullscreen) {
                            hasEnteredFullscreen = true
                            scrollContainer.classList.add('active')
                        }
                    }, { once: true })
                }, 400)

                updateTransform()
                updateTextClasses()
                updatePreviewImages()
            } else if (fullscreenActive && !isInView(targetSection)) {
                unlockScroll()
                fullscreenActive = false
                targetSection.classList.remove('isFullscreen')
            }
        }, 250)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchstart', e => {
        touchStartY = e.touches[0].clientY
    }, { passive: true })

    window.addEventListener('touchmove', e => {
        lastTouchMoveY = e.touches[0].clientY
    }, { passive: true })

    window.addEventListener('touchend', () => {
        delta = touchStartY - lastTouchMoveY
        const fakeWheelEvent = { deltaY: delta }
        handleScroll()
        handleWheel(fakeWheelEvent)
    })

    window.addEventListener('wheel', handleWheel, { passive: false })
})