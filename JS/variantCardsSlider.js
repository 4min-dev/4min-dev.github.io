import { updateVariantsCard } from "./pages/landing/sections/variants/UI/updateVariantsCard.js"
import { blockScroll } from "./scroll/blockScroll.js"
import { unblockScroll } from "./scroll/unblockScroll.js"


document.addEventListener("DOMContentLoaded", function () {

    const cardsContainer = document.querySelector('.variants__section__cards__container')
    const instructionCards = document.querySelectorAll('.variants__section__card')

    let isCardsScrolling = false

    let activeCardIndex = 1
    let isCardsHovered = false

    let lastTouchY
    let lastTouchTime = 0

    function handleScroll(event) {

        if (isCardsScrolling) return;

        let deltaY = 0
        const now = Date.now()
        const isTouchEvent = typeof TouchEvent !== 'undefined' && event instanceof TouchEvent

        if (event instanceof WheelEvent) {
            deltaY = event.deltaY
        } else if (event instanceof TouchEvent) {
            const touch = event.touches[0]
            deltaY = lastTouchY ? lastTouchY - touch.clientY : 0
            lastTouchY = touch.clientY
        }

        if (isTouchEvent && (now - lastTouchTime) < 300) {
            return
        }

        lastTouchTime = now

        if ((deltaY > 0) && activeCardIndex < instructionCards.length && isCardsHovered) {
            setIsCardsScrolling(true)
            setNewCardIndex((prev) => prev + 1)

            setTimeout(() => setIsCardsScrolling(false), 500)

            updateVariantsCard(activeCardIndex, instructionCards, deltaY)
        } else if ((deltaY < 0 && activeCardIndex > 1) && isCardsHovered) {
            setIsCardsScrolling(true)
            setNewCardIndex((prev) => prev - 1)

            setTimeout(() => setIsCardsScrolling(false), 500)

            updateVariantsCard(activeCardIndex, instructionCards, deltaY)
        } else {
            unblockScroll()
        }
        console.log(deltaY)
        console.log(activeCardIndex)
        console.log(isCardsHovered)
    }

    function setNewCardIndex(fn) {
        blockScroll()
        activeCardIndex = fn(activeCardIndex)
    }

    function setIsCardsScrolling(isScrolling) {
        isCardsScrolling = isScrolling
    }

    cardsContainer.addEventListener('mouseenter', () => {
        blockScroll()
        isCardsHovered = true
    })

    cardsContainer.addEventListener('mouseleave', () => {
        unblockScroll()
        isCardsHovered = false
    })

    cardsContainer.addEventListener('touchstart', () => {
        blockScroll()
        isCardsHovered = true
    })

    cardsContainer.addEventListener('touchend', () => {
        unblockScroll()
        isCardsHovered = false
    })

    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('touchstart', (event) => {
        if (event.touches.length > 0) {
            lastTouchY = event.touches[0].clientY
        }
    })
    window.addEventListener('touchmove', handleScroll, { passive: false })

    updateVariantsCard(activeCardIndex, instructionCards)
})