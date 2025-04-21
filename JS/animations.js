class Animations {
    transformFromTop(ref, elementClassname) {
        gsap.fromTo(elementClassname, 
            { y: '-100%' }, 
            { y: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        });
    }

    transformFromBottom(ref, elementClassname) {
        gsap.fromTo(elementClassname, 
            { y: '100%' }, 
            { y: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        });
    }

    transformToLeft(ref, elementClassname) {
        gsap.fromTo(elementClassname, 
            { x: '120%' }, 
            { x: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        })
    }

    transformToRight(ref, elementClassname) {
        gsap.fromTo(elementClassname, 
            { x: '-120%' }, 
            { x: 0, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        })
    }

    opacity(ref, elementClassname) {
        gsap.fromTo(`${elementClassname}`, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                once: true
            } 
        })
    }
}

export default Animations