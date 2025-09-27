document.addEventListener('DOMContentLoaded', () => {
    const donateMethods = document.querySelectorAll('.selector__card')
    const donateVariants = document.querySelectorAll('.donate__variant')

    function handleSelectMethod(event) {
        const method = event.currentTarget
        const methodValue = method.getAttribute('data-method')

        if (method.classList.contains('active')) return

        if (methodValue === 'stars') {
            document.querySelectorAll('.method__rub__price').forEach(method => method.classList.remove('active'))
            document.querySelectorAll('.method__stars__price').forEach(method => method.classList.add('active'))
            document.querySelector('.email__block').classList.remove('active')
        } else {
            document.querySelectorAll('.method__rub__price').forEach(method => method.classList.add('active'))
            document.querySelectorAll('.method__stars__price').forEach(method => method.classList.remove('active'))
            document.querySelector('.email__block').classList.add('active')
        }
    }

    function handleSelectVariant(event) {
        const variant = event.currentTarget

        if (event.target.checked && variant.classList.contains('active')) return

        donateVariants.forEach(donateVariant => donateVariant.classList.remove('active'))
        variant.classList.add('active')
    }

    donateMethods.forEach(method => method.addEventListener('click', handleSelectMethod))
    donateVariants.forEach(variant => variant.addEventListener('change', handleSelectVariant))
})