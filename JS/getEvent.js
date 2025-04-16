document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.querySelector('.check__to__complete__event__button')

    async function checkToComplete(questId) {
        try {
            const response = await fetch(`https://tapalka.wizardstech.ru:8443/api/quests/checkStatus?quest_id=${questId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then((res) => res.json())
           alert(response)
            return response
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    document.querySelectorAll('.event__card').forEach(card => {
        attachEventButtonHandler(card)
    })

    document.querySelectorAll('.event__block').forEach(block => {
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue

                    if (node.classList.contains('event__card')) {
                        attachEventButtonHandler(node)
                    }

                    const innerCards = node.querySelectorAll?.('.event__card') || []
                    innerCards.forEach(innerCard => attachEventButtonHandler(innerCard))
                }
            }
        })

        observer.observe(block, { childList: true, subtree: true })
    })

    function attachEventButtonHandler(card) {
        const button = card.querySelector('.get__event__button')
        if (!button || button.dataset.handlerAttached) return

        button.addEventListener('click', (event) => {
            event.preventDefault()

            const title = card.dataset.title || 'Название события не указано'
            const image = card.dataset.preview || ''
            const description = card.dataset.description || 'Описание события отсутствует'
            const award = card.dataset.award || '+0'
            const link = card.dataset.link || '#'
            const note = card.dataset.note || 'Примечание отсутствует'
            const etapsJson = card.dataset.etaps || '[]'
            const id = card.dataset.id

            let etaps = []
            try {
                etaps = JSON.parse(etapsJson)
            } catch (error) {
                console.error('Ошибка при парсинге data-etaps:', error)
            }

            const popupId = button.dataset.popupId

            const popup = document.querySelector(`[data-id="${popupId}"]`)
            if (!popup) return

            popup.querySelector('.selected__event__image').setAttribute('src', image)
            popup.querySelector('.selected__event__title').textContent = title
            popup.querySelector('.selected__event__description').textContent = description
            popup.querySelector('.selected__event__link').href = link
            popup.querySelector('.selected__event__link').textContent = link
            popup.querySelector('.selected__event__link').setAttribute('data-link', link)
            popup.querySelector('.selected__event__note__value').textContent = note

            const formattedAward = formatAward(award)
            const awardElement = popup.querySelector('.selected__event__award__value')
            awardElement.innerHTML = ''
            awardElement.appendChild(formattedAward)

            const instructionContainer = popup.querySelector('.selected__event__instruction__container')
            instructionContainer.innerHTML = ''
            etaps.forEach(etap => {
                const li = document.createElement('li')
                li.textContent = etap.title
                instructionContainer.appendChild(li)
            })

            openPopup(popup)
            checkButton.addEventListener('click', () => checkToComplete(id))
        })

        button.dataset.handlerAttached = 'true'

        function formatAward(award) {
            const span = document.createElement('span')
            const parts = award.split(',')

            if (parts.length === 2) {
                const valuePart = document.createTextNode(parts[0])
                const commaSpan = document.createElement('span')
                commaSpan.className = 'mono'
                commaSpan.textContent = ','
                const thousandPart = document.createTextNode(parts[1])

                span.classList.add('selected__event__award__value')
                span.appendChild(valuePart)
                span.appendChild(commaSpan)
                span.appendChild(thousandPart)
            } else {
                span.textContent = award
            }

            return span
        }

        function openPopup(popup) {
            console.log(popup)
            popup.classList.add('visible')
            document.body.style.overflow = 'hidden'
        }

        function closePopup(popup) {
            popup.classList.remove('visible')
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

    }
})
