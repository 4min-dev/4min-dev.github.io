let activeInput = null
let valueInputOne = document.querySelector('#input1').value
let valueInputTwo = document.querySelector('#input2').value
document.querySelectorAll('.converter__value').forEach(el => {
  
  if(el.id == 'input1') el.value = '₽' + valueInputOne
  else if(el.id == 'input2')   el.value = '₽' + valueInputTwo
  el.addEventListener('click', (e) => {
    const input = e.target;
    const valueLength = input.value.length;
    input.setSelectionRange(valueLength, valueLength);
    focusInput(e.target.id)
  })
})
const inputsData = {
  input1: {
    value:  valueInputOne, 
    userInput: '' 
  },
  input2: {
    value: valueInputTwo, 
    userInput: ''
  }
};
function focusInput(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  activeInput = input;
  updateInputDisplay(inputId);
}
function updateInputDisplay(inputId) {
  const data = inputsData[inputId];
  const input = document.getElementById(inputId);
  input.value = '₽' + data.value + data.userInput;
}

// Добавление символа через клавиатуру
function addChar(char) {
  if (!activeInput) return;

  const inputId = activeInput.id;
  const data = inputsData[inputId];

  data.userInput += char;
  updateInputDisplay(inputId);
}
function deleteChar() {
  if (!activeInput) return;

  const inputId = activeInput.id;
  const data = inputsData[inputId];
console.log(data);

  data.value = ''
  data.userInput = ''
  updateInputDisplay(inputId);
}
document.addEventListener('DOMContentLoaded', () => {
  focusInput('input1'); // По умолчанию активен первый инпут
});
 document.querySelectorAll('.number__button').forEach(el => {
   el.addEventListener('click', () => {
    document.querySelectorAll('.number__button').forEach(el => el.classList.remove('number__button--active'))
  el.classList.add('number__button--active')
 })
  
 })