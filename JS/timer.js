document.addEventListener('DOMContentLoaded', () => {
    const timerInput = document.querySelector('.timer__slider')

    if (!sessionStorage.getItem('isTimerActive')) {
        sessionStorage.setItem('isTimerActive', 'false')
    }

    const isTimerActive = sessionStorage.getItem('isTimerActive') === 'true'
    timerInput.checked = isTimerActive

    function adviceBlockHandler() {
        if (sessionStorage.getItem('isTimerActive') === 'true') {
            document.querySelector('.advice__cards__block').classList.remove('hidden')
        } else {
            document.querySelector('.advice__cards__block').classList.add('hidden')
        }
    }
    adviceBlockHandler()

    timerInput.addEventListener('change', () => {
        sessionStorage.setItem('isTimerActive', timerInput.checked)
        adviceBlockHandler()
    })
})