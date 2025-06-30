import { lockScroll } from "./lockScroll.js"
import { unlockScroll } from "./unlockScroll.js"

document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("stats__section")
    let imgCurrent = document.getElementById("statsImageCurrent")
    let imgNext = document.getElementById("statsImageNext")
    const timerTitle = document.querySelector(".stats__section__timer__title")
    const timerDescription = document.querySelector(".stats__section__timer__description")
    const rollers = document.querySelectorAll(".stats__section__timer__value")

    const etaps = [
        {
            image: "/static/images/stats-1.jpg",
            daysValue: 230,
            timerTitle: "Солнечных дней в году",
            timerDescription: "Крым радует до 230 солнечных дней в году, что делает его идеальным местом для круглогодичного отдыха."
        },
        {
            image: "/static/images/fact-1.png",
            daysValue: 700,
            timerTitle: "Тысяч туристов в год",
            timerDescription: "Каждый год Крым посещает более 700 тысяч туристов, привлекаемых его природной красотой и историческим наследием."
        },
        {
            image: "/static/images/fact-2.png",
            daysValue: 310,
            timerTitle: "Тысяч туристов в год",
            timerDescription: "Каждый год Крым посещает более 700 тысяч туристов, привлекаемых его природной красотой и историческим наследием."
        }
    ]

    let currentIndex = 0
    let scrollLocked = false
    let animationStarted = false
    let isThrottled = false
    let isAnimating = false
    let delta
    let touchStartY = 0
    let lastTouchMoveY = 0

    const isInView = (elem) => {
        const rect = elem.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionHeight = rect.height
        const visibleTop = Math.max(0, rect.top)
        const visibleBottom = Math.min(windowHeight, rect.bottom)
        const visibleHeight = visibleBottom - visibleTop
        const visibleFraction = visibleHeight / sectionHeight
        return visibleFraction >= 0.25 && rect.top < windowHeight && rect.bottom > 0
    }

    const createDigitRoller = (roller) => {
        const inner = document.createElement("div")
        inner.classList.add("digit__roller__inner")
        for (let i = 0; i <= 9; i++) {
            const span = document.createElement("span")
            span.textContent = i
            inner.appendChild(span)
        }
        roller.appendChild(inner)
    }

    const animateDigitRoller = (roller, targetDigit, callback) => {
        const inner = roller.querySelector(".digit__roller__inner")
        let current = 0
        const maxHeight = inner.scrollHeight / 10

        const animate = () => {
            const translateY = -maxHeight * current
            inner.style.transform = `translateY(${translateY}px)`
            if (current === targetDigit) {
                callback()
                return
            }
            current++
            setTimeout(() => requestAnimationFrame(animate), 300)
        }

        requestAnimationFrame(animate)
    }

    const transitionImage = (newSrc) => {
        imgNext.src = newSrc
        imgNext.style.transition = "opacity 1s ease, transform 1s ease"
        imgNext.style.opacity = "1"
        imgNext.style.transform = "translateY(0)"
        imgCurrent.style.transition = "opacity 1s ease, transform 1s ease"
        imgCurrent.style.opacity = "0"
        imgCurrent.style.transform = "translateY(20px)"

        setTimeout(() => {
            imgCurrent.id = "statsImageNext"
            imgNext.id = "statsImageCurrent"
            const temp = imgCurrent
            imgCurrent = imgNext
            imgNext = temp
            imgNext.style.transition = "none"
            imgNext.style.opacity = "0"
            imgNext.style.transform = "translateY(20px)"
        }, 1000)
    }

    const updateContent = () => {
        isAnimating = true
        const etap = etaps[currentIndex]
        transitionImage(etap.image)
        timerTitle.textContent = etap.timerTitle
        timerDescription.textContent = etap.timerDescription

        const digits = etap.daysValue.toString().padStart(rollers.length, "0").split("").map(Number)
        let completedRollers = 0

        rollers.forEach((roller, index) => {
            roller.innerHTML = ""
            createDigitRoller(roller)
            roller.setAttribute("data-target", digits[index])
            animateDigitRoller(roller, digits[index], () => {
                completedRollers++
                if (completedRollers === rollers.length) {
                    isAnimating = false
                }
            })
        })
    }

    const handleScroll = () => {
        if (isInView(section) && !scrollLocked) {
            if ((delta > 0 && currentIndex < etaps.length - 1) || (delta < 0 && currentIndex > 0)) {
                scrollLocked = lockScroll()
                window.scrollTo({
                    top: section.getBoundingClientRect().top + window.scrollY - (window.innerHeight - section.offsetHeight) / 2,
                    behavior: 'smooth'
                })
            }
            if (!animationStarted) {
                animationStarted = true
                updateContent()
            }
        } else if (!isInView(section) && scrollLocked) {
            scrollLocked = unlockScroll()
        }
    }

    const handleWheel = (e) => {
        delta = e.deltaY

        if (!scrollLocked && isInView(section)) {
            if ((delta > 0 && currentIndex < etaps.length - 1) || (delta < 0 && currentIndex > 0)) {
                scrollLocked = lockScroll()
                window.scrollTo({
                    top: section.getBoundingClientRect().top + window.scrollY - (window.innerHeight - section.offsetHeight) / 2,
                    behavior: 'smooth'
                })
            }
        }
        if (!scrollLocked || isThrottled || isAnimating) return

        isThrottled = true
        setTimeout(() => isThrottled = false, 600)

        if (delta > 0 && currentIndex < etaps.length - 1) {
            currentIndex++
            updateContent()
        } else if (delta < 0 && currentIndex > 0) {
            currentIndex--
            updateContent()
        } else if (delta < 0 && currentIndex === 0) {
            scrollLocked = unlockScroll()
        } else if (delta > 0 && currentIndex === etaps.length - 1) {
            scrollLocked = unlockScroll()
        }
    }

    const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
        lastTouchMoveY = e.touches[0].clientY
    }

    const handleTouchEnd = () => {
        delta = touchStartY - lastTouchMoveY
        const fakeWheelEvent = { deltaY: delta }
        if (!scrollLocked && isInView(section)) {
            if ((delta > 0 && currentIndex < etaps.length - 1) || (delta < 0 && currentIndex > 0)) {
                scrollLocked = lockScroll()
                window.scrollTo({
                    top: section.getBoundingClientRect().top + window.scrollY - (window.innerHeight - section.offsetHeight) / 2,
                    behavior: 'smooth'
                })
            }
        }
        handleWheel(fakeWheelEvent)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd)
})