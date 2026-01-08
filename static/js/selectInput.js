document.addEventListener("DOMContentLoaded", () => {

    const deleteUserVerifyPopupOverlay = document.querySelector('.delete__verify__overlay')

    const selectedUserInput = document.querySelector('.selected__input__container').querySelector('.selected__input__value')
    const selectedUserForm = document.querySelector('#passport__data__section')
        .querySelector('.passport__data__form ')

    function formatPhoneNumber(value) {
        const country = value[0] === "7" ? "+7" : "";

        // Форматирование номера по шаблону +7(___)___-__-__
        const formatted = [
            country,
            value.substring(1, 4) ? `(${value.substring(1, 4)}` : "",
            value.substring(4, 7) ? `)${value.substring(4, 7)}` : "",
            value.substring(7, 9) ? `-${value.substring(7, 9)}` : "",
            value.substring(9, 11) ? `-${value.substring(9, 11)}` : ""
        ].join("");

        return formatted;
    }

    function handleDeleteUser(user, event) {
        const username = user.username
        const popupUsername = deleteUserVerifyPopupOverlay
            .querySelector('.delete__verify__popup')
            .querySelector('.popup__text__container')
            .querySelector('.popup__description')
            .querySelector('.delete__user__value')
        const deleteUserButton = deleteUserVerifyPopupOverlay
            .querySelector('.popup__buttons__container')
            .querySelector('.verify__button')

        const surnameInput = selectedUserForm.querySelector('#surname__input')
        const nameInput = selectedUserForm.querySelector('#name__input')
        const paternityameInput = selectedUserForm.querySelector('#paternity__input')
        const seriesInput = selectedUserForm.querySelector('#series__input')
        const numberInput = selectedUserForm.querySelector('#number__input')
        const addressInput = selectedUserForm.querySelector('#address__input')

        popupUsername.innerHTML = username

        function handleClosePopup() {
            deleteUserVerifyPopupOverlay.classList.remove('visible')
            deleteUserVerifyPopupOverlay.classList.add('closing')

            setTimeout(() => {
                event = null
                deleteUserVerifyPopupOverlay.classList.remove('closing')
            }, 400);
        }

        deleteUserVerifyPopupOverlay.addEventListener('click', handleClosePopup)
        deleteUserVerifyPopupOverlay
            .querySelector('.delete__verify__popup')
            .querySelector('.cancel__verify__button').addEventListener('click', handleClosePopup)

        deleteUserVerifyPopupOverlay.querySelector('.delete__verify__popup').addEventListener('click', (e) => e.stopPropagation())

        deleteUserButton.addEventListener('click', () => {

            if (event) {
                event.remove()
            }

            selectedUserInput.innerHTML = '0000000000000000'

            surnameInput.value = ''
            nameInput.value = ''
            paternityameInput.value = ''
            seriesInput.value = ''
            numberInput.value = ''
            addressInput.value = ''

            handleClosePopup()
        })

        deleteUserVerifyPopupOverlay.classList.add('visible')
    }

    function getUserPopup({userInfo, userCard}) {
        const editUserPopupOverlay = document.getElementById('edit__user__popup__overlay')
        const editUserPopup = document.getElementById('edit__user__popup')

        const editUserForm = editUserPopup.querySelector('.all__data__form')

        editUserForm.querySelector('#surname').value = userInfo.surname
        editUserForm.querySelector('#name').value = userInfo.name
        editUserForm.querySelector('#paternity').value = userInfo.paternity
        editUserForm.querySelector('#passport_series').value = userInfo.passport_series
        editUserForm.querySelector('#passport_number').value = userInfo.passport_number
        editUserForm.querySelector('#date__input').value = userInfo.date
        editUserForm.querySelector('#inn').value = userInfo.inn

        editUserForm.querySelector('#address__input').value = userInfo.address;
        editUserForm.querySelector('#city__input').value = userInfo.city;
        editUserForm.querySelector('#city__input').value = userInfo.city;
        editUserForm.querySelector('#subject__input').value = userInfo.subject
        editUserForm.querySelector('#index__input').value = userInfo.index;
        editUserForm.querySelector('#email__input').value = userInfo.email;
        editUserForm.querySelector('#phone__number__input').value = userInfo.phone__number;

        const save__user__bttn = document.querySelector('.save__changed__user__bttn')

        editUserPopupOverlay.classList.add('visible')

        function handleSaveUserChanges() {
            userCard.setAttribute('data-surname', editUserForm.querySelector('#surname').value)
            userCard.setAttribute('data-name', editUserForm.querySelector('#name').value)
            userCard.setAttribute('data-paternity', editUserForm.querySelector('#paternity').value)
            userCard.setAttribute('data-pass-series', editUserForm.querySelector('#passport_series').value)
            userCard.setAttribute('data-pass-number', editUserForm.querySelector('#passport_number').value)
            userCard.setAttribute('data-issue-date', editUserForm.querySelector('#date__input').value)
            userCard.setAttribute('data-inn', editUserForm.querySelector('#inn').value)
            userCard.setAttribute('data-address', editUserForm.querySelector('#address__input').value)
            userCard.setAttribute('data-city', editUserForm.querySelector('#city__input').value)
            userCard.setAttribute('data-subject', editUserForm.querySelector('#subject__input').value)
            userCard.setAttribute('data-index', editUserForm.querySelector('#index__input').value)
            userCard.setAttribute('data-email', editUserForm.querySelector('#email__input').value)
            userCard.setAttribute('data-phone', editUserForm.querySelector('#phone__number__input').value)

            const surnameInput = selectedUserForm.querySelector('#surname__input')
            const nameInput = selectedUserForm.querySelector('#name__input')
            const paternityameInput = selectedUserForm.querySelector('#paternity__input')
            const seriesInput = selectedUserForm.querySelector('#series__input')
            const numberInput = selectedUserForm.querySelector('#number__input')
            const addressInput = selectedUserForm.querySelector('#address__input')

            console.log(numberInput)

            const surnameValue = editUserForm.querySelector('#surname').value
            const nameValue = editUserForm.querySelector('#name').value
            const paternityValue = editUserForm.querySelector('#paternity').value
            const seriesNumberValue = editUserForm.querySelector('#passport_series').value
            const numberValue = editUserForm.querySelector('#passport_number').value
            const addressValue = editUserForm.querySelector('#address__input').value

            surnameInput.value = surnameValue
            nameInput.value = nameValue
            paternityameInput.value = paternityValue
            seriesInput.value = seriesNumberValue
            numberInput.value = numberValue
            addressInput.value = addressValue


            editUserPopupOverlay.classList.remove('visible')
            editUserPopupOverlay.classList.add('closing')

            setTimeout(() => {
                editUserPopupOverlay.classList.remove('closing')
            }, 400);
        }

        function handleeditUserPopupOverlay() {
            const isPopupOpen = () => {
                return editUserPopupOverlay.classList.contains('visible') || editUserPopupOverlay.classList.contains('closing')
            }

            if (isPopupOpen()) {
                editUserPopupOverlay.classList.add('closing')
                editUserPopupOverlay.classList.remove('visible')

                setTimeout(() => {
                    editUserPopupOverlay.classList.remove('closing')
                }, 300)
            } else {
                editUserPopupOverlay.classList.add('visible')
            }
        }

        save__user__bttn.addEventListener('click', handleSaveUserChanges)

        // Закрытие попапа при клике на overlay
        editUserPopupOverlay.addEventListener('click', handleeditUserPopupOverlay)

        // Остановка всплытия события на самом попапе
        editUserPopup.addEventListener('click', (event) => event.stopPropagation())
    }

    const selectInputsContainer = document.querySelectorAll('.select__input__container')
    const selectedUserFormData = document.getElementById('passport__data__section')
        .querySelector('.passport__data__form')

    function selectInputMenuHandler(inputMenu) {
        inputMenu.classList.toggle('visible')

        if (inputMenu.classList.contains('visible')) {
            const inputActiveMenuHeight = inputMenu.scrollHeight + 'px'

            inputMenu.style.height = inputActiveMenuHeight
        } else {
            inputMenu.style.height = '0'
        }
    }

    function updateActiveMenuCard(menuCard, inputMenu, selectInputButton) {
        selectInputsContainer.forEach((selectInputContainer, index) => {
            const activeMenuValue = selectInputContainer.querySelector('.named__input__content')
                .querySelector('.selected__input__container')
                .querySelector('.selected__input__value')

            const firstname = menuCard.getAttribute('data-name')
            const surname = menuCard.getAttribute('data-surname')
            const paternity = menuCard.getAttribute('data-paternity')
            const passportSeries = menuCard.getAttribute('data-pass-series')
            const passportNumber = menuCard.getAttribute('data-pass-number')
            const userPersonalAddress = menuCard.getAttribute('data-address')

            const userPassportDataForm = selectedUserFormData.querySelector('.passport__details__form')
            const userAddressDataForm = selectedUserFormData.querySelector('.address__details__form__input')

            const surnameInput = userPassportDataForm.querySelector('#surname__input')
            const nameInput = userPassportDataForm.querySelector('#name__input')
            const paternityInput = userPassportDataForm.querySelector('#paternity__input')
            const seriesInput = userPassportDataForm.querySelector('#series__input')
            const numberInput = userPassportDataForm.querySelector('#number__input')
            const addressInput = userAddressDataForm.querySelector('#address__input')

            surnameInput.value = surname
            nameInput.value = firstname
            paternityInput.value = paternity
            seriesInput.value = passportSeries
            numberInput.value = passportNumber
            addressInput.value = userPersonalAddress

            activeMenuValue.innerHTML = menuCard.getAttribute('data-value')
            selectInputValueButtonHandler(selectInputButton)
        })
    }

    function selectInputMenuCardHandler(event, inputMenu, selectInputButton) {
        const clickedCard = event.currentTarget

        const allCards = clickedCard.closest('.select__input__menu').querySelectorAll('.select__input__menu__card')
        allCards.forEach(card => card.classList.remove('active'))

        clickedCard.classList.add('active')

        updateActiveMenuCard(clickedCard, inputMenu, selectInputButton)
    }

    function selectInputValueButtonHandler(button) {
        button.classList.toggle('active')

        const inputMenu = button.closest('.select__input__container').querySelector('.select__input__menu')
        selectInputMenuHandler(inputMenu)
    }

    selectInputsContainer.forEach((selectInputContainer, index) => {
        const selectInputValueContainer = selectInputContainer.querySelector('.selected__input__container')
        const selectInputButton = selectInputContainer.querySelector('.select__input__value__button')
        const selectInputMenu = selectInputContainer.querySelector('.select__input__menu')

        selectInputValueContainer.addEventListener('click', () => selectInputValueButtonHandler(selectInputButton))

        setTimeout(() => {
            const selectInputMenuCards = Array.from(selectInputsContainer).map(selectInputContainer => {
                return Array.from(selectInputContainer.querySelector('.select__input__menu').querySelectorAll('.select__input__menu__card'))
            })

            selectInputMenuCards[index].forEach((selectInputMenuCard) => {
                const getEditUserPopupButtons = selectInputMenuCard.querySelectorAll('.edit__button')
                const deleteUserButtons = selectInputMenuCard.querySelectorAll('.delete__button')

                deleteUserButtons.forEach((deleteUserButton) => deleteUserButton.addEventListener('click', (event) => {
                    handleDeleteUser(
                        {
                            username:
                                `${selectInputMenuCard.getAttribute('data-name')} 
                        ${selectInputMenuCard.getAttribute('data-surname')}`
                        }, selectInputMenuCard)
                }))

                // Обработчик кнопок с классом edit__button для открытия попапа с редакторкой
                getEditUserPopupButtons.forEach((geteditUserPopupButton) => {

                    geteditUserPopupButton.addEventListener('click', () => {

                        getUserPopup({
                            userInfo: {
                                surname: selectInputMenuCard.getAttribute('data-surname'),
                                name: selectInputMenuCard.getAttribute('data-name'),
                                paternity: selectInputMenuCard.getAttribute('data-paternity'),
                                passport_series: selectInputMenuCard.getAttribute('data-pass-series'),
                                passport_number: selectInputMenuCard.getAttribute('data-pass-number'),
                                date: selectInputMenuCard.getAttribute('data-issue-date'),
                                inn: selectInputMenuCard.getAttribute('data-inn'),
                                address: selectInputMenuCard.getAttribute('data-address'),
                                city: selectInputMenuCard.getAttribute('data-city'),
                                subject: selectInputMenuCard.getAttribute('data-subject'),
                                index: selectInputMenuCard.getAttribute('data-index'),
                                email: selectInputMenuCard.getAttribute('data-email'),
                                phone__number: formatPhoneNumber(selectInputMenuCard.getAttribute('data-phone').replace(/\D/g, "")) // форматируем номер
                            },
                            userCard: selectInputMenuCard
                        })

                    })
                })
            })

            selectInputMenuCards[index].forEach((selectInputMenuCard) => {
                selectInputMenuCard.addEventListener('click', (event) => selectInputMenuCardHandler(event, selectInputMenu, selectInputButton))
            })
        }, 800)
    })
})