document.addEventListener("DOMContentLoaded", () => {
    const personalInputsContainer = document.querySelectorAll('.named__input__container')
    const requiredPopupForms = document.querySelectorAll('.required__popup__form')

    let activeTitleClassname
    let activeInputClassname

    const addressRegex = /^Инд\.\s*\d{6},\s*субъект\.\s*.+?,\s*г\.\s*.+?,\s*ул\.\s*.+?,\s*д\.\s*.+?/i

    function validateSaveButtons() {
        const activePopup = document.querySelector('.required__popup__form.active, .required__popup__form.visible') ||
            Array.from(requiredPopupForms).find(p => p.offsetParent !== null)

        if (!activePopup) {
            console.log('No active popup found – validation skipped')
            return
        }

        let allRequiredFilled = true
        let hasInvalidInput = false
        let allAddressesValid = true

        const emptyRequired = []
        const invalidInputs = []
        const invalidAddresses = []

        activePopup.querySelectorAll('.required__input').forEach(input => {
            if (!input.value.trim()) {
                allRequiredFilled = false
                emptyRequired.push(input.id || input.name || 'unnamed required input')
            }
        })

        activePopup.querySelectorAll('.invalidInputValue').forEach(input => {
            hasInvalidInput = true
            invalidInputs.push(input.id || input.name || 'unnamed invalid input')
        })

        activePopup.querySelectorAll('.address__input').forEach(input => {
            const value = input.value.trim()
            if (!value) {
                allAddressesValid = false
                invalidAddresses.push({ id: input.id || 'unnamed address', reason: 'empty' })
            } else if (!addressRegex.test(value)) {
                allAddressesValid = false
                invalidAddresses.push({ id: input.id || 'unnamed address', reason: 'does not match regex', value: value })
            }
        })

        const isFormValid = allRequiredFilled && !hasInvalidInput && allAddressesValid

        if (!isFormValid) {
            console.group('Form Validation Failed (active popup only)')
            if (!allRequiredFilled) console.log('Empty required inputs:', emptyRequired)
            if (hasInvalidInput) console.log('Invalid inputs (length issues):', invalidInputs)
            if (!allAddressesValid) console.log('Invalid addresses:', invalidAddresses)
            console.groupEnd()
        } else {
            console.log('Form Validation Passed (active popup)')
        }

        requiredPopupForms.forEach(popup => {
            if (popup === activePopup || popup.classList.contains('active') || popup.classList.contains('visible') || popup.offsetParent !== null) {
                const buttons = popup.querySelectorAll('.save__bttn')
                buttons.forEach(btn => {
                    if (isFormValid) {
                        btn.classList.remove('error', 'disabled')
                        btn.disabled = false
                    } else {
                        btn.classList.add('error', 'disabled')
                        btn.disabled = true
                    }
                })
            }
        })
    }

    function validatePersonalInput(input, titles) {
        const maxLengthAttr = input.getAttribute('maxlength') || input.getAttribute('maxLength')
        const minLength = maxLengthAttr ? parseInt(maxLengthAttr, 10) : 0
        const length = input.value.trim().length

        titles.forEach(title => {
            if (!title.hasAttribute('data-default-title')) {
                title.setAttribute('data-default-title', title.textContent)
            }

            if (length > 0 && length < minLength) {
                input.classList.remove('successInputValue')
                input.classList.add('invalidInputValue')
                title.classList.add('errorMessage')
                title.classList.remove('successMessage')
            } else if (length >= minLength || minLength === 0) {
                input.classList.remove('invalidInputValue')
                input.classList.add('successInputValue')
                title.classList.add('successMessage')
                title.classList.remove('errorMessage')
            } else {
                input.classList.remove('invalidInputValue', 'successInputValue')
                title.classList.remove('errorMessage', 'successMessage')
            }
        })

        validateSaveButtons()
    }

    personalInputsContainer.forEach(container => {
        const inputs = container.querySelectorAll('.personal__input')
        const titles = container.querySelectorAll('.element__title')

        inputs.forEach(input => {
            input.addEventListener('input', () => validatePersonalInput(input, titles))
            input.addEventListener('focus', () => {
                if (activeInputClassname) input.classList.add(activeInputClassname)
                titles.forEach(t => {
                    if (activeTitleClassname) t.classList.add(activeTitleClassname)
                })
            })
        })
    })

    document.addEventListener('click', e => {
        if (!e.target.closest('.named__input__container')) {
            document.querySelectorAll('.element__title').forEach(title => {
                if (title.classList.contains('successMessage')) {
                    activeTitleClassname = 'successMessage'
                    activeInputClassname = 'successInputValue'
                }
                title.classList.remove('successMessage')
                activeTitleClassname = null
                activeInputClassname = null

                const container = title.closest('.named__input__container')
                if (container) {
                    const input = container.querySelector('.personal__input')
                    if (input) input.classList.remove('successInputValue')
                }
            })
        }
    })

    document.querySelectorAll('.address__input, .required__input, .personal__input').forEach(input => {
        input.addEventListener('input', validateSaveButtons)
    })

    validateSaveButtons()
})