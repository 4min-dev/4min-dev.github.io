document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector(".footer__copyright")

    const steps = [
        `Алеша <span class="italic">эстейт</span>`,
        `<span class="italic">Алеша</span> эстейт`,
        `<span class="italic">Ал</span>еш<span class="italic">а</span><span class="italic">Эст</span>ейт`,
        `<span class="italic">Алеша эстейт</span>`
    ]

    let currentStep = 0

    function updateFooter(step) {
        footer.innerHTML = steps[step]
    }

    function runAnimation() {
        updateFooter(0)
        setTimeout(() => {
            updateFooter(1)
            setTimeout(() => {
                updateFooter(2)
                setTimeout(() => {
                    updateFooter(3)
                    setTimeout(() => {
                        // Reset and restart
                        footer.innerHTML = `Алеша <span class="italic">эстейт</span>`
                        setTimeout(runAnimation, 150)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }

    runAnimation()

})