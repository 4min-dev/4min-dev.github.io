function isMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('hsx')
    const leftTracks = document.querySelectorAll('.partner__cards__container[data-direction="left"]')
    const rightTracks = document.querySelectorAll('.partner__cards__container[data-direction="right"]')

    leftTracks.forEach((leftTrack) => {
        const logosLeft = Array.from(leftTrack.children)

        const logosWidthLeft = logosLeft[0].offsetWidth
        let totalWidthLeft

        if (isMobileDevice()) {
            totalWidthLeft = logosLeft.length * logosWidthLeft - 400
        } else {
            totalWidthLeft = logosLeft.length * (logosWidthLeft + 72)
        }

        console.log(`Total - ${totalWidthLeft}`)

        if (logosLeft.length <= 2) {
            Array(...logosLeft, ...logosLeft, ...logosLeft).forEach((logo) => {
                const cloneLeft = logo.cloneNode(true)
                leftTrack.appendChild(cloneLeft)
            })
        } else {
            logosLeft.forEach((logo) => {
                const cloneLeft = logo.cloneNode(true)
                leftTrack.appendChild(cloneLeft)
            })
        }


        let leftPosition = 0

        const animateLeftCarousel = () => {
            leftPosition -= 1

            if (isMobileDevice()) {
                if (Math.abs(leftPosition) >= totalWidthLeft) {
                    leftPosition = 0
                }
            } else {
                if (Math.abs(leftPosition) >= totalWidthLeft - 4070) {
                    leftPosition = 0
                }
            }

            leftTrack.style.transform = `translateX(${leftPosition}px)`
            requestAnimationFrame(animateLeftCarousel)
        }

        animateLeftCarousel()
    })

    rightTracks.forEach((rightTrack) => {
        const logosRight = Array.from(rightTrack.children)

        const logosWidthRight = logosRight[0].offsetWidth
        const totalWidthRight = logosRight.length * (logosWidthRight) - 1200

        if (logosRight.length <= 2) {
            Array(...logosRight, ...logosRight, ...logosRight).forEach((logo) => {
                const cloneRight = logo.cloneNode(true)
                rightTrack.appendChild(cloneRight)
            })
        } else {
            logosRight.forEach((logo) => {
                const cloneRight = logo.cloneNode(true)
                rightTrack.appendChild(cloneRight)
            })
        }

        rightTrack.style.right = `${totalWidthRight}px`
        let rightPosition = 0

        const animateRightCarousel = () => {
            rightPosition += 1

            console.log(Math.abs(rightPosition))
            console.log(totalWidthRight)

            if (Math.abs(rightPosition) >= totalWidthRight) {
                rightPosition = 0
                rightTrack.style.right = `${totalWidthRight}px`
            }
            rightTrack.style.transform = `translateX(${rightPosition}px)`
            requestAnimationFrame(animateRightCarousel)
        }

        animateRightCarousel()
    })
})