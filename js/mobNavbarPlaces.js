document.addEventListener('DOMContentLoaded', () => {
    const placeCards = document.querySelectorAll('.navbar__place__card')
    const asidePanel = document.querySelector('.map__aside__panel')
    const asideBlocks = document.querySelectorAll('.map__aside__block')

    function handleActivePlace(event) {
        const clickedCard = event.currentTarget

        if(!asidePanel.classList.contains('active')) {
            asidePanel.classList.add('active')
            asideBlocks.forEach((asideBlock) => {
                if(asideBlock.classList.contains(clickedCard.getAttribute('data-block-for'))) {
                    asideBlock.classList.add('active')

                    asideBlock.querySelectorAll('.aside__back__button').forEach((backButton) => {
                        backButton.addEventListener('click', () => {
                            asidePanel.classList.remove('active')
                            if (
                                asideBlock.classList.contains('default__block') &&
                                !asideBlock.classList.contains('active')
                            ) {
                                asideBlock.classList.add('active')
                            } else {
                                asideBlock.classList.remove('active')
                            }
                        })
                    })
                } else {
                    asideBlock.classList.remove('active')
                }
            })
        }

        // placeCards.forEach((placeCard) => {
        //     if (placeCard === clickedCard) {
        //         placeCard.classList.add('active')
        //     } else {
        //         placeCard.classList.remove('active')
        //     }
        // })
    }

    placeCards.forEach((placeCard) => {
        placeCard.addEventListener('click', handleActivePlace)
    })
})