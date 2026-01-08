document.addEventListener("DOMContentLoaded", () => {
    const address__forms = document.querySelectorAll('.passport__data__form')
    const placeholders = ['Инд.', 'субъект.', 'г.', 'д.']
    const allowedSymboldJustNumbers = /[0-9,\.]/
    const allowedSymboldWithoutNumbers = /[ А-Яа-я,\.-]/
    const allowedAllSymbols = /[А-Яа-я0-9,. ]/
    let allowedSymbols = allowedSymboldJustNumbers

    address__forms.forEach((address__form) => {
        const address__inputs = address__form.querySelectorAll('.address__input')

        address__inputs.forEach((address__input) => {
            const city__input = address__form.querySelector('#city__input')
            const index__input = address__form.querySelector('#index__input')
            const subject__input = address__form.querySelector('#subject__input')

            address__input.addEventListener('input', (event) => {
                let currentValue = address__input.value
                if (currentValue.split(',').length <= 1) {
                    currentValue = address__input.value.replace(/\./g, '')
                }
                if (!event.target.value.includes(',')) {
                    address__input.value = `${Array.from(currentValue).filter(char => allowedSymboldJustNumbers.test(char)).join('')}`
                }
                if (event.inputType !== 'deleteContentBackward') {
                    if (!currentValue.includes('г.')) {

                        if (currentValue.includes('Инд.')) {
                            const jop = address__input.value.split(',')
                            address__input.value = jop[0] + ',' + `${Array.from(jop[1]).filter(char => allowedSymboldWithoutNumbers.test(char)).join('')}`
                        }
                    } else {
                        const parts = currentValue.split('г. ')

                        if (parts && parts[1]) {
                            allowedSymbols = parts[1].trim().split(',').length < 3 ? allowedSymboldWithoutNumbers : allowedAllSymbols
                            currentValue = parts[0] + `г. ` + Array.from(parts[1]).filter(char => allowedSymbols.test(char)).join('')
                            address__input.value = currentValue
                        }
                    }
                    if (!currentValue.includes('Инд') && !currentValue.endsWith(',')) {
                        address__input.value = address__input.value.slice(0, 6)
                    }
                    if (!currentValue.includes('Инд') && currentValue.endsWith(',')) {
                        allowedSymbols = allowedAllSymbols
                        index__input.value = currentValue.split(',')[0]
                        const addressValue = currentValue.split('')
                        addressValue.unshift(placeholders[0])
                        address__input.value = `${addressValue[0]} ${currentValue}`
                    }
                    if (currentValue.includes(',')) {
                        console.log(event.data)
                        if (event.data === ',' && !currentValue.includes('субъект')) {
                            allowedSymbols = allowedSymboldWithoutNumbers
                            address__input.value += ` субъект. `
                        }
                        else if (event.data === ',' && !currentValue.includes('г.')) {
                            allowedSymbols = allowedSymboldWithoutNumbers
                            subject__input.value = currentValue.split('субъект. ')[1].split(',')[0]
                            console.log(currentValue.split('субъект. '))
                            address__input.value += `, г. `
                        } else if (currentValue.includes('д') && !currentValue.includes('г.')) {
                            allowedSymbols = allowedAllSymbols
                        } else if (event.data === ',' && currentValue.includes('г.') && !currentValue.includes('ул.')) {
                            if (city__input) {
                                city__input.value = currentValue.split('г. ')[1].replace(',', '')
                            }
                            address__input.value += ` ул. `
                            allowedSymbols = allowedSymboldWithoutNumbers
                        } else if (event.data === ',' && currentValue.includes(` ул. `) && !currentValue.includes(` д. `)) {
                            address__input.value += ` д. `
                            allowedSymbols = allowedAllSymbols
                        }
                    }
                }
            })
            address__input.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace') {
                    const currentValue = address__input.value
                    if (currentValue.includes('д') && !currentValue.includes('г.')) {
                        allowedSymbols = allowedAllSymbols
                    }
                    if (currentValue.endsWith('г. ') && city__input) {
                        city__input.value = ''
                    } else if (currentValue.endsWith('субъект. ') && subject__input) {
                        subject__input.value = ''
                    } else if (event.target.value.toString().length <= 1) {
                        index__input.value = ''
                    }
                    if (currentValue.endsWith('ул. ') || currentValue.endsWith('Инд. ')) {
                        address__input.value = currentValue.slice(0, -5)
                    } else if (currentValue.endsWith('субъект. ')) {
                        address__input.value = currentValue.slice(0, -10)
                    } else if (currentValue.endsWith('г. ')) {
                        address__input.value = currentValue.slice(0, -4)
                    } else if (currentValue.endsWith('д. ')) {
                        address__input.value = currentValue.slice(0, -4)
                    }
                }
            })
        })
    })
})