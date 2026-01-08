document.addEventListener("DOMContentLoaded", () => {
    const date__inputs = document.querySelectorAll('.date__input')

    function getLastDigitWithoutDecimal(number) {
        let numberStr = number.toString().replace('.', '')
        let lastDigit = numberStr[numberStr.length - 1]
        return lastDigit
    }

    let endsWithDot

    date__inputs.forEach((date__input) => {
        date__input.addEventListener('input', function (event) {
            let inputValue = event.target.value

            inputValue = inputValue.replace(/[^\d.]/g, '')

            if (event.target.value.includes('-')) {
                inputValue = inputValue.replace(/[^\d]/g, '')
            }

            if (inputValue.split('.').length >= 2) {
                inputValue = inputValue.replace(/\.+$/, '')
            } else {
                inputValue = event.target.value.replace(/[^0-9]/g, '');
            }

            if (event.inputType !== 'deleteContentBackward') {
                if (inputValue.length <= 3) {
                    inputValue = inputValue.replace(/(\d{2})/, '$1.')
                } else if (inputValue.length <= 5) {
                    inputValue = inputValue.replace(/(\d{2})(\d{2})/, '$1.$2.')
                } else if (inputValue.length <= 10) {
                    inputValue = inputValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3')
                }

                const parts = inputValue.split('.')

                if (parts[0] && parseInt(parts[0]) > 31) {
                    parts[0] = '31'
                    inputValue = parts.join('.')
                }

                if (parts[1] && parseInt(parts[1]) > 12) {
                    if (parseInt(parts[1].slice(0, parts[1].length - 1)) >= 12) {
                        if (parseInt(parts[1]) + parseInt(getLastDigitWithoutDecimal(event.target.value)) > 12
                            && parts[1].length > 2
                        ) {
                            console.log('first')
                            parts[1] = `12.${getLastDigitWithoutDecimal(event.target.value)}`
                        } else {
                            console.log('second')
                            parts[1] = '12'
                        }
                    } else {
                        console.log(parseInt(parts[1]) >= 12)
                        if (parseInt(parts[1]) >= 12) {
                            parts[1] = `12.`
                        } else {
                            parts[1] = `${parts[1].slice(0, parts[1].length - 1)}.${getLastDigitWithoutDecimal(event.target.value)}`
                        }
                    }
                    console.log(parts)
                    inputValue = parts.join('.')
                }

                const currentYear = new Date().getFullYear()
                let year = parseInt(parts[2], 10)

                if (year > currentYear) {
                    parts[2] = currentYear.toString()
                    inputValue = parts.join('.')
                } else if (year < (currentYear - 100) && year.toString().length === 4) {
                    parts[2] = currentYear.toString()
                    inputValue = parts.join('.')
                }

                if (year < (currentYear - 100) && parts[2].length === 4) {
                    parts[2] = (currentYear - 100).toString()
                    inputValue = parts.join('.')
                }

                if (inputValue.length === 5 && !inputValue.endsWith('.')) {
                    inputValue += '.'
                }
                if (inputValue.endsWith('.')) {
                    endsWithDot = true
                } else {
                    endsWithDot = false
                }
                console.log(`Typing ${inputValue.endsWith('.')}`)
                console.log(`Typing endsWithDot ${endsWithDot}`)
            } else {
                console.log(`Deleting ${inputValue.endsWith('.')}`)
                console.log(`Deleting endsWithDot ${endsWithDot}`)
                if (inputValue.length >= 2 && endsWithDot) {
                    inputValue = inputValue.slice(0, -1)
                }
                if (inputValue.length === 3 && endsWithDot) {
                    inputValue = inputValue.slice(0, -1)
                }

                if (inputValue.endsWith('.')) {
                    endsWithDot = true
                } else {
                    endsWithDot = false
                }
            }

            if (inputValue.length > 10) {
                inputValue = inputValue.slice(0, 10)
            }

            event.target.value = inputValue
        })
    })
})
