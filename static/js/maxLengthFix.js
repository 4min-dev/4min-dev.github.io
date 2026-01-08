document.addEventListener("DOMContentLoaded", () => {
    const limited__inputs = document.querySelectorAll('.limited__input')

    limited__inputs.forEach((input) => {
        const inputLimit = Number(input.getAttribute('maxLength'))

        input.addEventListener('input', function (e) {

            if (this.value.length > inputLimit) {
                this.value = this.value.slice(0, inputLimit)
            }
        })
    })
})
