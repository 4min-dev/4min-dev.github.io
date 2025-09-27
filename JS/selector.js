document.addEventListener('DOMContentLoaded', () => {
    const selectorCards = document.querySelectorAll('.selector__card')
    function handleSelectMethod(event) {
        const selector = event.currentTarget

        if (selector.classList.contains('active')) return

        selectorCards.forEach(selectorCard => selectorCard.classList.remove('active'))
        selector.classList.add('active')
    }

    selectorCards.forEach(method => method.addEventListener('click', handleSelectMethod))
})