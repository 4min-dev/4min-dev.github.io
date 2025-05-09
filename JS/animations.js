const style = document.createElement('style')
style.textContent = `
    .animate-from-top {
        transform: translateY(-100%);
        opacity: 0;
        animation: slideFromTop 1s forwards;
    }
    .animate-from-bottom {
        transform: translateY(100%);
        opacity: 0;
        animation: slideFromBottom 1s forwards;
    }
    .animate-to-left {
        transform: translateX(120%);
        opacity: 0;
        animation: slideToLeft 1s forwards;
    }
    .animate-to-right {
        transform: translateX(-120%);
        opacity: 0;
        animation: slideToRight 1s forwards;
    }
    .animate-opacity {
        opacity: 0;
        animation: fadeIn 1s forwards;
    }
    @keyframes slideFromTop {
        to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideFromBottom {
        to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideToLeft {
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideToRight {
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeIn {
        to { opacity: 1; }
    }
`
document.head.appendChild(style)

class Animations {
    constructor() {
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        }
    }

    observeElement(ref, elementClassname, animationClass) {
        const elements = document.querySelectorAll(elementClassname)
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass)
                    obs.unobserve(entry.target)
                }
            });
        }, this.observerOptions)

        if (ref) {
            const target = ref.querySelectorAll(elementClassname)
            target.forEach(el => observer.observe(el))
        } else {
            elements.forEach(el => observer.observe(el))
        }
    }

    transformFromTop(ref, elementClassname) {
        this.observeElement(ref, elementClassname, 'animate-from-top')
    }

    transformFromBottom(ref, elementClassname) {
        this.observeElement(ref, elementClassname, 'animate-from-bottom')
    }

    transformToLeft(ref, elementClassname) {
        this.observeElement(ref, elementClassname, 'animate-to-left')
    }

    transformToRight(ref, elementClassname) {
        this.observeElement(ref, elementClassname, 'animate-to-right')
    }

    opacity(ref, elementClassname) {
        this.observeElement(ref, elementClassname, 'animate-opacity')
    }
}

export default Animations