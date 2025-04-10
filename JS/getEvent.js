document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.get__event__button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()

            const eventCard = button.closest('.event__card')

            if (!eventCard) return

            const title = eventCard.dataset.title || 'Название события не указано'
            const description = eventCard.dataset.description || 'Описание события отсутствует'
            const award = eventCard.dataset.award || '+0'
            const link = eventCard.dataset.link || '#'
            const shortLink = eventCard.dataset.shortLink || 'Ссылка недоступна'
            const note = eventCard.dataset.note || 'Примечание отсутствует'
            const etapsJson = eventCard.dataset.etaps || '[]'

            let etaps = []
            try {
                etaps = JSON.parse(etapsJson)
            } catch (error) {
                console.error('Ошибка при парсинге data-etaps:', error)
            }

            const popupId = button.dataset.popupId
            const popup = document.querySelector(`[data-id="${popupId}"]`)
            if (!popup) return

            popup.querySelector('.selected__event__title').textContent = title
            popup.querySelector('.selected__event__description').textContent = description
            popup.querySelector('.selected__event__link').href = link
            popup.querySelector('.selected__event__link').textContent = shortLink
            popup.querySelector('.selected__event__note__value').textContent = note

            const formattedAward = formatAward(award)
            const awardElement = popup.querySelector('.selected__event__award__value')
            awardElement.innerHTML = ''
            awardElement.appendChild(formattedAward)

            const instructionContainer = popup.querySelector('.selected__event__instruction__container')
            instructionContainer.innerHTML = ''
            etaps.forEach((etap, index) => {
                const li = document.createElement('li')
                li.textContent = `${etap.name}`
                instructionContainer.appendChild(li)
            })

            openPopup(popup)
        })
    })
})

function formatAward(award) {
    const span = document.createElement('span')
    const parts = award.split(',')

    if (parts.length === 2) {
        const valuePart = document.createTextNode(parts[0])
        const commaSpan = document.createElement('span')
        commaSpan.className = 'mono'
        commaSpan.textContent = ','
        const thousandPart = document.createTextNode(parts[1])

        span.className.add('selected__event__award__value')
        span.appendChild(valuePart)
        span.appendChild(commaSpan)
        span.appendChild(thousandPart)
    } else {
        span.textContent = award
    }

    return span
}

function openPopup(popup) {
    popup.classList.add('active')
    document.body.style.overflow = 'hidden'
}

function closePopup(popup) {
    popup.classList.remove('active')
    document.body.style.overflow = ''
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close__popup__button')) {
        const popup = event.target.closest('.popup__overlay')
        if (popup) {
            closePopup(popup)
        }
    }
})