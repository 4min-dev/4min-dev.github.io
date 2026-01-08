function cleanText(event) {
    let element = event.target
    let text = element.value || element.textContent 

    let cleanedText = text.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '') 

    if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
        element.value = cleanedText
    } else {
        element.textContent = cleanedText
    }
}

const elements = document.querySelectorAll('.text__only__input')

elements.forEach(element => {
    element.addEventListener('input', cleanText) 
})
