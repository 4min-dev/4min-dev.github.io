document.addEventListener('DOMContentLoaded', () => {
    const headerNavbarButtons = document.querySelectorAll('.mob__navbar__button')
    const asidePanel = document.querySelector('.map__aside__panel')
    const asideBlocks = document.querySelectorAll('.map__aside__block')

    function handleNavigate(event) {
        const clickedCard = event.currentTarget

        if (!asidePanel.classList.contains('active')) {
            asidePanel.classList.add('active')
        }

        asideBlocks.forEach((asideBlock) => {
            if (clickedCard.getAttribute('data-block-for') === 'close__aside') {
                asidePanel.classList.remove('active')

                if (asideBlock.classList.contains('default__block') && !asideBlock.classList.contains('active')) {
                    asideBlock.classList.add('active')
                } else {
                    asideBlock.classList.remove('active')
                }
            } else {
                if (asideBlock.classList.contains(clickedCard.getAttribute('data-block-for'))) {
                    const backButtonFor = clickedCard.getAttribute('back-button-for')
                    const backButtons = asideBlock.querySelectorAll('.aside__back__button')
                    asideBlock.classList.add('active')

                    backButtons.forEach((backButton) => {
                        if (backButtonFor === 'close' && backButton) {
                            backButton.addEventListener('click', () => {
                                asidePanel.classList.remove('active')
                                if (asideBlock.classList.contains('default__block') && !asideBlock.classList.contains('active')) {
                                    asideBlock.classList.add('active')
                                } else {
                                    asideBlock.classList.remove('active')
                                }
                            })
                        } else {
                            backButton.addEventListener('click', () => {
                                asideBlocks.forEach((asideBlock) => {
                                    if (asideBlock.classList.contains(backButtonFor)) {
                                        asideBlock.classList.add('active')
                                    } else {
                                        asideBlock.classList.remove('active')
                                    }
                                })
                            })
                        }
                    })
                } else {
                    asideBlock.classList.remove('active')
                }
            }
        })
    }

    headerNavbarButtons.forEach((headerNavbarButton) => headerNavbarButton.addEventListener('click', handleNavigate))
})