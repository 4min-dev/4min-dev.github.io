document.addEventListener("DOMContentLoaded", () => { 
    const cancelInputsContainer = document.querySelectorAll('.input__with__cancel__container')

    function checkIsEmptyHandler(inputValue, cancelButton) {
        if(inputValue) {
            cancelButton.classList.add('visible')
        } else {
            cancelButton.classList.remove('visible')
        }
    } 

    function clearInputValue(input, cancelButton) {
        input.value = ''

        checkIsEmptyHandler(input.value, cancelButton)
    }

    cancelInputsContainer.forEach((cancelInputContainer) => {
        const cancelButton = cancelInputContainer.querySelector('.cancel__button')
        const cancelInput = cancelInputContainer.querySelector('.input__with__cancel')

        cancelButton.addEventListener('click', () => clearInputValue(cancelInput, cancelButton))

        cancelInput.addEventListener('input', (event) => checkIsEmptyHandler(event.target.value, cancelButton))
    })
})