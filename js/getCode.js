import isMobileDevice from "./isMobileDevice.js"

document.addEventListener('DOMContentLoaded', () => {
    const getCodeButton = document.querySelector('.get__code__button')
    const asideBlocks = document.querySelectorAll('.map__aside__block')
    const phoneNumberInput = document.querySelector('.phone__number__input')
    const codeInputContainer = document.querySelector('.code__input__container')

    function handleGetCode() {
        if(phoneNumberInput.value.length < 16) {
            return
        }

        if(!isMobileDevice()) {
            asideBlocks.forEach((asideBlock) => {
                if(asideBlock.classList.contains('verify__block')) {
                    asideBlock.classList.add('active')
                } else {
                    asideBlock.classList.remove('active')
                }
            })
        } else {
          
            getCodeButton.textContent = 'Авторизоваться'
            codeInputContainer.classList.remove('disabled')
        }
    }

    getCodeButton.addEventListener('click', handleGetCode)
})