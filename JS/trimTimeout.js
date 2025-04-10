document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.querySelector('.trim__timeout__value')
    const timeoutPopup = document.querySelector('.timeout__block__popup__overlay')

    if (!timerElement || !timerElement.hasAttribute('data-timeout')) {
        console.log('Атрибут data-timeout отсутствует. Таймер не запущен.')
        return
    }

    function startTimer() {
        const timeoutValue = timerElement.getAttribute('data-timeout')

        const [minutes, seconds] = timeoutValue.split(':').map(Number)

        let totalSeconds = minutes * 60 + seconds

        if (window.timerInterval) {
            clearInterval(window.timerInterval)
        }

        function updateTimer() {
            if (totalSeconds <= 0) {
                clearInterval(window.timerInterval)

                timeoutPopup.classList.remove('visible')

                return
            }


            const mins = Math.floor(totalSeconds / 60)
            const secs = totalSeconds % 60

            timerElement.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

            totalSeconds--
        }

        window.timerInterval = setInterval(updateTimer, 1000)

        updateTimer()
    }

    startTimer()

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-timeout') {
                console.log('Атрибут data-timeout изменен. Перезапуск таймера.')
                startTimer()
            }
        }
    })

    if (timerElement) {
        observer.observe(timerElement, {
            attributes: true,
        })
    }
})