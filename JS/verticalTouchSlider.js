document.addEventListener('DOMContentLoaded', () => {
    const tutorPageContainer = document.querySelector('.tutor__page__container')
    const sliderContainers = document.querySelectorAll('.vertical__touch__slide__button__container')

    sliderContainers.forEach(container => {
        const arrowsContainer = container.querySelector('.arrows__container')
        const button = container.querySelector('.vertical__touch__slide__button')
        let isDragging = false
        let initialY = 0

        function updateButtonPosition(currentTransform, deltaY) {
            const containerHeight = container.offsetHeight
            const buttonHeight = button.offsetHeight

            const newTransform = currentTransform - deltaY

            const minY = -(containerHeight - buttonHeight)
            const maxY = 0

            button.style.transform = `translateY(${Math.max(minY, Math.min(maxY, newTransform))}px)`
        }

        container.addEventListener('touchstart', (e) => {
            arrowsContainer.classList.add('hidden')
            isDragging = true
            const touch = e.touches[0]
            initialY = touch.clientY

            const currentTransform = parseInt(button.style.transform.match(/translateY\(([-\d]+)px\)/)?.[1]) || 0

            button.dataset.initialTransform = currentTransform
        })

        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return

            const touch = e.touches[0]
            const currentY = touch.clientY
            const deltaY = initialY - currentY

            const initialTransform = parseInt(button.dataset.initialTransform) || 0

            updateButtonPosition(initialTransform, deltaY)
        })

        container.addEventListener('touchend', () => {
            isDragging = false

            const containerHeight = container.offsetHeight
            const buttonHeight = button.offsetHeight

            const currentTransform = parseInt(button.style.transform.match(/translateY\(([-\d]+)px\)/)?.[1]) || 0

            const threshold = -(containerHeight - buttonHeight) * 0.5

            if (currentTransform < threshold) {
                tutorPageContainer.classList.remove('visible')
                tutorPageContainer.classList.add('closing')
                // Если кнопка выше 50%, перемещаем её вверх
                button.style.transform = `translateY(${- (containerHeight - buttonHeight)}px)`

                setTimeout(() => {
                    tutorPageContainer.classList.remove('closing')
                }, 400)
            } else {
                button.style.transform = 'translateY(0px)'
                arrowsContainer.classList.remove('hidden')
            }
        })
    })
})