const tg = window.Telegram.WebApp

document.addEventListener("DOMContentLoaded", async () => {
    await updateClients()
    tg.expand()
    console.log('tg', tg)

    const selectMenu = document.querySelector('.select__input__menu')

    const attachButtonHandlers = (container = selectMenu) => {
        const cards = container.querySelectorAll('.select__input__menu__card:not([data-handlers-attached])')
        cards.forEach(card => {
            card.dataset.handlersAttached = 'true'

            const editButtons = card.querySelectorAll('.edit__button')
            const deleteButtons = card.querySelectorAll('.delete__button')

            deleteButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const verifyBtn = document.querySelector('.verify__button')
                    if (verifyBtn) {
                        const newVerifyBtn = verifyBtn.cloneNode(true)
                        verifyBtn.parentNode.replaceChild(newVerifyBtn, verifyBtn)
                        newVerifyBtn.addEventListener('click', (ev) => DeleteClientData(card, ev))
                    }
                })
            })

            editButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const saveBtn = document.querySelector('.save__changed__user__bttn')
                    if (saveBtn) {
                        const newSaveBtn = saveBtn.cloneNode(true)
                        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn)
                        newSaveBtn.addEventListener('click', (ev) => UpdateClientData(card, ev))
                    }
                })
            })
        })
    }

    attachButtonHandlers()

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        if (node.classList.contains('select__input__menu__card')) {
                            attachButtonHandlers(node.parentNode)
                        } else {
                            attachButtonHandlers(node)
                        }
                    }
                })
            }
        })
    })

    observer.observe(selectMenu, {
        childList: true,
        subtree: true
    })

    const validArray = (arr) => {
        for (const value of arr) {
            if (value === '') return false
        }
        return true
    }

    const inputAddClientElems = () => {
        const nameElems = document.querySelectorAll('#address__popup .all__data__form .passport__details__form input')
        const addressElems = document.querySelectorAll('#address__popup .all__data__form .address__details__form input')
        return [...Array.from(nameElems), ...Array.from(addressElems)]
    }

    const inputUpdateClientElems = () => {
        const nameElems = document.querySelectorAll('#edit__user__popup .all__data__form .passport__details__form input')
        const addressElems = document.querySelectorAll('#edit__user__popup .all__data__form .address__details__form input')
        return [...Array.from(nameElems), ...Array.from(addressElems)]
    }

    const addClientButton = document.querySelector('.save__client__button')
    const updateClientButton = document.querySelector('.save__changed__user__bttn')
    const deleteClientButton = document.querySelector('.verify__button')

    const handleInputEvent = (event) => {
        const addValues = inputAddClientElems().map(elem => elem.value)
        const updateValues = inputUpdateClientElems().map(elem => elem.value)

        if (!validArray(addValues)) {
            addClientButton.classList.add('disabled')
            addClientButton.textContent = 'Заполните все поля'
        } else {
            addClientButton.textContent = 'Сохранить'
            addClientButton.classList.remove('disabled')
        }

        if (!validArray(updateValues)) {
            updateClientButton.classList.add('disabled')
            updateClientButton.textContent = 'Заполните все поля'
        } else {
            updateClientButton.textContent = 'Сохранить'
            updateClientButton.classList.remove('disabled')
        }
    }

    addClientButton.addEventListener('click', SaveClientData)

    const inputs = [...inputUpdateClientElems(), ...inputAddClientElems()]
    inputs.forEach(input => input.addEventListener('input', handleInputEvent))
})

const Save = async (cost_per_good, count, img_path, product_url, img_url, description, tracking_number, event) => {
    event.preventDefault()

    const client = document.querySelector('.select__input__menu__card.active')
    const saveButton = document.querySelector('.next__button')

    if (!client) {
        saveButton.classList.add('error')
        saveButton.textContent = 'Выберите клиента'
        setTimeout(() => {
            saveButton.classList.remove('error')
            saveButton.textContent = 'Далее'
        }, 1000)
        return
    }

    let response = await fetch('https://china.wizardstech.ru/webapp/customs/api/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Tg-Init-Data': tg.initData
        },
        body: JSON.stringify({
            tracking_number,
            description,
            product_url,
            img_path,
            img_url,
            count,
            cost_per_good,
            client_id: client.getAttribute('data-id')
        })
    })

    response = await response.json()
    tg.close()
}

const updateClients = async () => {
    try {
        console.log('[updateClients] Starting request...')
        console.log('[updateClients] URL:', 'https://china.wizardstech.ru/webapp/customs/api/client')
        console.log('[updateClients] X-Tg-Init-Data length:', tg.initData?.length || 'MISSING / EMPTY')

        const response = await fetch('https://china.wizardstech.ru/webapp/customs/api/client', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Tg-Init-Data': tg.initData || ''
            }
        })

        console.log('[updateClients] Status:', response.status)
        console.log('[updateClients] OK:', response.ok)

        const rawBody = await response.text()
        console.log('[updateClients] Raw body length:', rawBody.length)
        console.log('[updateClients] Raw body (first 500):', rawBody.substring(0, 500) || '[пустое тело]')

        let data
        if (rawBody.trim() === '') {
            console.warn('[updateClients] Body is completely empty!')
            data = { success: false, message: 'Empty response from server' }
        } else {
            try {
                data = JSON.parse(rawBody)
                console.log('[updateClients] Parsed JSON:', data)
            } catch (e) {
                console.error('[updateClients] JSON parse failed:', e.message)
                data = { success: false, message: 'Invalid JSON from server' }
            }
        }

        if (!response.ok || !data.success) {
            alert('Ошибка сервера: ' + (data.message || 'Неизвестная ошибка'))
            return
        }

        const selectMenu = document.querySelector('.select__input__menu')
        selectMenu.innerHTML = ''

        for (const client of data.data) {
            const div = document.createElement('div')
            const fullName = `${client.last_name} ${client.first_name} ${client.patronymic_name}`
            div.className = "select__input__menu__card"

            div.setAttribute("data-address", client.full_address)
            div.setAttribute("data-city", client.city)
            div.setAttribute("data-subject", client.region)
            div.setAttribute("data-index", client.postcode)
            div.setAttribute("data-email", client.email)
            div.setAttribute("data-value", fullName)
            div.setAttribute("data-surname", client.last_name)
            div.setAttribute("data-name", client.first_name)
            div.setAttribute("data-paternity", client.patronymic_name)
            div.setAttribute('data-birthday', client.birthday)
            div.setAttribute("data-pass-series", client.passport_series)
            div.setAttribute("data-pass-number", client.passport_number)
            div.setAttribute("data-issue-date", client.passport_issue_date)
            div.setAttribute("data-inn", client.inn)
            div.setAttribute("data-phone", client.phone_number)
            div.setAttribute("data-id", client.id)

            const span = document.createElement('span')
            span.className = "select__input__menu__card__name"
            span.textContent = fullName

            const buttonsDiv = document.createElement('div')
            buttonsDiv.className = "select__input__menu__card__buttons"
            buttonsDiv.innerHTML = `
                <button type="button" class="edit__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33329 10.6667L2.66663 13.3333L5.33329 12.6667L13.0572 4.94281C13.5778 4.42211 13.5779 3.57789 13.0572 3.05719L12.9428 2.94281C12.4221 2.42211 11.5779 2.42211 11.0572 2.94281L3.33329 10.6667Z" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 4L12 6" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.66663 13.3334H14" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <button type="button" class="delete__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 15L10 10M10 10L5 5M10 10L15 5M10 10L5 15" stroke="#FF0000" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            `

            div.appendChild(span)
            div.appendChild(buttonsDiv)
            selectMenu.appendChild(div)
        }

    } catch (error) {
        console.error('[updateClients] Full error:', error)
        alert('Ошибка загрузки клиентов: ' + error.message)
    }
}

const SaveClientData = async (event) => {
    event.preventDefault()

    const response = await addClient()
    const saveButton = document.querySelector('.save__bttn')

    if (!response.success) {
        saveButton.classList.add('error')
        saveButton.textContent = 'Ошибка'
        setTimeout(() => {
            saveButton.classList.remove('error')
            saveButton.textContent = 'Сохранить'
        }, 1000)
        return
    }

    saveButton.classList.add('success')
    saveButton.textContent = 'Сохранено'

    await updateClients()
}

const UpdateClientData = async (client, event) => {
    event.preventDefault()

    const response = await updateClient(client)
    const saveButton = document.querySelector('.save__changed__user__bttn')

    if (!response.success) {
        saveButton.classList.add('error')
        saveButton.textContent = 'Ошибка'
        setTimeout(() => {
            saveButton.classList.remove('error')
            saveButton.textContent = 'Сохранить'
        }, 1000)
        return
    }

    saveButton.classList.add('success')
    saveButton.textContent = 'Сохранено'

    await updateClients()
}

const DeleteClientData = async (client, event) => {
    event.preventDefault()

    const response = await deleteClient(client)
    const saveButton = document.querySelector('.verify__button')

    if (!response.success) {
        saveButton.classList.add('error')
        saveButton.textContent = 'Ошибка'
        setTimeout(() => {
            saveButton.classList.remove('error')
            saveButton.textContent = 'Подтвердить'
        }, 1000)
    }
}

const addClient = async () => {
    const nameElems = document.querySelectorAll('#address__popup .passport__details__form input')
    const lastNameElem = nameElems[0]
    const firstNameElem = nameElems[1]
    const middleNameElem = nameElems[2]
    const passportSeriesElem = nameElems[3]
    const passportNumberElem = nameElems[4]
    const passportDateElem = nameElems[5]
    const InnElem = nameElems[6]
    const birthdayElem = nameElems[7]

    const addressElems = document.querySelectorAll('#address__popup .address__details__form input')
    const fullAddressElem = addressElems[0]
    const cityAddressElem = addressElems[1]
    const regionAddressElem = addressElems[2]
    const postcodeAddressElem = addressElems[3]
    const emailElem = addressElems[4]
    const phoneNumber = addressElems[5]

    const formatDate = (dateStr) => {
        if (!dateStr) return ''
        const [day, month, year] = dateStr.split('.')
        return year && month && day ? `${year}-${month}-${day}` : ''
    }

    const requestData = {
        full_address: fullAddressElem.value.trim(),
        city: cityAddressElem.value.trim(),
        region: regionAddressElem.value.trim(),
        postcode: postcodeAddressElem.value.trim(),
        email: emailElem.value.trim().replace(/[<>]/g, ''),
        phone_number: phoneNumber.value.trim(),
        last_name: lastNameElem.value.trim(),
        first_name: firstNameElem.value.trim(),
        patronymic_name: middleNameElem.value.trim(),
        birthday: formatDate(birthdayElem.value.trim()),
        passport_series: passportSeriesElem.value.trim(),
        passport_number: passportNumberElem.value.trim(),
        passport_issue_date: formatDate(passportDateElem.value.trim()),
        inn: InnElem.value.trim()
    }

    let response = await fetch('https://china.wizardstech.ru/webapp/customs/api/client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Tg-Init-Data': tg.initData || ''
        },
        body: JSON.stringify(requestData)
    })

    const text = await response.text()
    console.log('[addClient] Status:', response.status)
    console.log('[addClient] Raw response:', text.substring(0, 500) || '[empty]')

    let data
    try {
        data = JSON.parse(text)
    } catch (e) {
        console.error('[addClient] Parse error:', e)
        data = { success: false, message: 'Invalid server response' }
    }

    return data
}

const updateClient = async (client) => {
    const nameElems = document.querySelectorAll('#edit__user__popup .passport__details__form input')
    const lastNameElem = nameElems[0]
    const firstNameElem = nameElems[1]
    const middleNameElem = nameElems[2]
    const passportSeriesElem = nameElems[3]
    const passportNumberElem = nameElems[4]
    const passportDateElem = nameElems[5]
    const InnElem = nameElems[6]

    const addressElems = document.querySelectorAll('#edit__user__popup .address__details__form input')
    const fullAddressElem = addressElems[0]
    const cityAddressElem = addressElems[1]
    const regionAddressElem = addressElems[2]
    const postcodeAddressElem = addressElems[3]
    const emailElem = addressElems[4]
    const phoneNumber = addressElems[5]

    const formatDate = (dateStr) => {
        if (!dateStr) return ''
        const [day, month, year] = dateStr.split('.')
        return year && month && day ? `${year}-${month}-${day}` : ''
    }

    const requestData = {
        last_name: lastNameElem.value.trim(),
        first_name: firstNameElem.value.trim(),
        patronymic_name: middleNameElem.value.trim(),
        full_address: fullAddressElem.value.trim(),
        city: cityAddressElem.value.trim(),
        region: regionAddressElem.value.trim(),
        postcode: postcodeAddressElem.value.trim(),
        email: emailElem.value.trim().replace(/[<>]/g, ''),
        phone_number: phoneNumber.value.trim(),
        passport_series: passportSeriesElem.value.trim(),
        passport_number: passportNumberElem.value.trim(),
        passport_issue_date: formatDate(passportDateElem.value.trim()),
        inn: InnElem.value.trim()
    }

    let response = await fetch(`https://china.wizardstech.ru/webapp/customs/api/${client.getAttribute('data-id')}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-Tg-Init-Data': tg.initData || ''
        },
        body: JSON.stringify(requestData)
    })

    const text = await response.text()
    console.log('[updateClient] Status:', response.status)
    console.log('[updateClient] Raw response:', text.substring(0, 500) || '[empty]')

    let data
    try {
        data = JSON.parse(text)
    } catch (e) {
        console.error('[updateClient] Parse error:', e)
        data = { success: false, message: 'Invalid server response' }
    }

    return data
}

const deleteClient = async (client) => {
    let response = await fetch(`https://china.wizardstech.ru/webapp/customs/api/${client.getAttribute('data-id')}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Tg-Init-Data': tg.initData
        }
    })
    const text = await response.text()
    let data
    try {
        data = JSON.parse(text)
    } catch (e) {
        console.error('[deleteClient] Parse error:', e)
        data = { success: false }
    }
    return data
}