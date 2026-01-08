document.addEventListener("DOMContentLoaded", () => {
    const numberInputs = document.querySelectorAll('.number__input')

    numberInputs.forEach((input) => {
        input.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '')
        })

        input.addEventListener('keydown', function (e) {
            if (e.key === '-' || e.key === '+') {
                e.preventDefault()
            }
        })
    })
})
