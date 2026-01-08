document.addEventListener("DOMContentLoaded", () => {
    const passportSeriesInput = document.getElementById('passport_series')
    const passportNumberInput = document.getElementById('passport_number')
    const innInput = document.getElementById('inn')
    const emailInput = document.querySelector('.email__input')

    const saveDataForm = document.querySelector('.all__data__form')

    function checkToValid() {
        const isSeriesInvalid = passportSeriesInput.classList.contains('invalidInputValue')
        const isNumberInvalid = passportNumberInput.classList.contains('invalidInputValue')
        const isInnInvalid = innInput.classList.contains('invalidInputValue')
        const isEmailInvalid = emailInput.classList.contains('invalidInputValue')


        if (isSeriesInvalid || isNumberInvalid || isInnInvalid || isEmailInvalid) {
            return false
        }

        return true
    }

    saveDataForm.addEventListener('submit', (event) => {
        if (!checkToValid()) {
            alert('Укажите корректные данные')
            event.preventDefault()
        }
    })
})