document.addEventListener('DOMContentLoaded', () => {
    let animationSlider
    let vibrationSlider

    if (document.querySelector('.animations__settings__card')) {
        animationSlider = document.querySelector('.animations__settings__card').querySelector('.switch').querySelector('.checkbox')
    }

    if (document.querySelector('.vibration__settings__card')) {
        vibrationSlider = document.querySelector('.vibration__settings__card').querySelector('.switch').querySelector('.checkbox')
    }

    const isAnimations = localStorage.getItem('animations-value')
    const isVibration = localStorage.getItem('vibration-value')

    if ((isAnimations && isAnimations === 'false') || !isAnimations) {
        if (animationSlider) {
            animationSlider.removeAttribute('checked')
        }

        document.body.classList.add('no-animations')
    }

    if (isAnimations && isAnimations === 'true') {
        if (animationSlider) {
            animationSlider.setAttribute('checked', true)
        }

        document.body.classList.remove('no-animations')
    }

    if (isVibration && isVibration === 'true') {
        vibrationSlider.setAttribute('checked', true)
    } else {
        vibrationSlider.removeAttribute('checked')
    }

    function handleAnimationSlider(event) {
        const isChecked = event.target.checked

        if (isChecked) {
            localStorage.setItem('animations-value', true)
            document.body.classList.remove('no-animations')
        } else {
            localStorage.setItem('animations-value', false)
            document.body.classList.add('no-animations')
        }
    }

    function handleVibrationSlider(event) {
        const isChecked = event.target.checked

        if (isChecked) {
            localStorage.setItem('vibration-value', true)
        } else {
            localStorage.setItem('vibration-value', false)
        }
    }

    if (animationSlider) {
        animationSlider.addEventListener('input', handleAnimationSlider)
    }

    if (vibrationSlider) {
        vibrationSlider.addEventListener('input', handleVibrationSlider)
    }
})