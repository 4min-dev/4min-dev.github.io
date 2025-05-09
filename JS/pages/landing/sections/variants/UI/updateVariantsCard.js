import { updateCurrentPreview } from "./updateCurrentPreview.js"

export function updateVariantsCard(activeCardIndex, cards, deltaY) {
    cards.forEach((card) => { 
        card.classList.remove('active')

        if (Number(card.getAttribute('data-id')) === activeCardIndex) {
            card.classList.add('active')

            if(activeCardIndex > 1) {
                card.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                })
            }
        }

        else if (deltaY < 0) {
            if (Number(card.getAttribute('data-id')) === 1) {
                card.style.top = '0'
            }
        }
    })

    updateCurrentPreview(activeCardIndex)
}
