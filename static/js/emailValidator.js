document.addEventListener("DOMContentLoaded", () => {
    const emailInputContainer = document.querySelectorAll('.named__input__container')

    function validateEmail(email) {
        // Простой regex для проверки email (не идеальный, но рабочий для большинства случаев)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    emailInputContainer.forEach((emailInputContainer) => {
        const emailInputs = emailInputContainer.querySelectorAll('.email__input')
        const emailInputsTitle = emailInputContainer.querySelectorAll('.element__title')

        emailInputs.forEach((input) => {
            input.addEventListener('input', function (event) {
                const email = event.target.value
                handleValidation(email, input, emailInputsTitle)
            })

            input.addEventListener('focus', function (event) {
                const email = event.target.value
                handleValidation(email, input, emailInputsTitle)
            })

            document.addEventListener('click', function (event) {
                if (!emailInputContainer.contains(event.target)) {
                    emailInputsTitle.forEach((emailInputTitle) => {
                        emailInputTitle.classList.remove('successMessage')

                    })
                    input.classList.remove('successInputValue')
                }
            })
        })
    })

    function handleValidation(email, input, emailInputsTitle) {
        emailInputsTitle.forEach((emailInputTitle) => {
            if (email === '') {
                emailInputTitle.classList.remove('successMessage')
                emailInputTitle.classList.remove('errorMessage')

                input.classList.remove('invalidInputValue')
                input.classList.remove('successInputValue')

            } else if (validateEmail(email)) {
                emailInputTitle.classList.remove('errorMessage')
                emailInputTitle.classList.add('successMessage')
                input.classList.remove('invalidInputValue')
                input.classList.add('successInputValue')
            } else {
                emailInputTitle.classList.remove('successMessage')
                emailInputTitle.classList.add('errorMessage')
                input.classList.remove('successInputValue')
                input.classList.add('invalidInputValue')
            }
        })
    }
})
