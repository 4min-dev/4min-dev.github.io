document.addEventListener('DOMContentLoaded', () => {
    const landingTextContainer = document.querySelector(".landing__title")

    const steps = [
        `<span class="symbol">
                        /
                    </span>
                    <span class="top">Алёша <span class="first">Эстейт</span></span>
                    <br/>Строительное дело`,
        `
                    <span class="symbol">
                        /
                    </span>
                    <span class="top"><span class="italic">Алёша</span> <span class="first">Эстейт</span></span>
                    <br/>Строительное <span class="italic">дело</span>
                    `,
        `
                     <span class="symbol">
                        /
                    </span>
                    <span class="top"><span class="italic">Алёша <span class="first italic">Эстейт</span></span></span>
                    <br/>Строительное дело
                    `,
        `
                     <span class="symbol">
                        /
                    </span>
                    <span class="top">Алёша <span class="italic first">Эстейт</span></span>
                    <br/><span class="italic">Строительное</span> дело
                    `
    ]

    let currentStep = 0

    function updateLandingText(step) {
        landingTextContainer.innerHTML = steps[step]
    }

    function runAnimation() {
        updateLandingText(0)
        setTimeout(() => {
            updateLandingText(1)
            setTimeout(() => {
                updateLandingText(2)
                setTimeout(() => {
                    updateLandingText(3)
                    setTimeout(() => {
                        landingTextContainer.innerHTML = `<span class="symbol">
                        /
                    </span>
                    <span class="top">Алёша <span class="first">Эстейт</span></span>
                    <br/>Строительное дело`
                        setTimeout(runAnimation, 150)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }

    runAnimation()

})