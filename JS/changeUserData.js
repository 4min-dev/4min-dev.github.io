document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.change__username__input')
    const saveButton = document.querySelector('.save__username__button')
    const usernameDisplay = document.querySelector('.profile__user__fullname__value')

    function validateInput() {
        if (input.value.trim() === '') {
            saveButton.disabled = true
        } else {
            saveButton.disabled = false
        }
    }

    input.addEventListener('input', () => {
        validateInput()
    })

    saveButton.addEventListener('click', () => {
        if (!saveButton.disabled) {
            const newUsername = input.value.trim()
            usernameDisplay.textContent = newUsername
        }
    })
})