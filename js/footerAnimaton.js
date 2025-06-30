document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.footer__rectangles__container')
  const stages = ['default-stage', 'first-stage', 'middle-stage', 'last-stage']
  let currentStage = 0

  function updateClass() {
    stages.forEach(stage => container.classList.remove(stage))

    container.classList.add(stages[currentStage])

    currentStage = (currentStage + 1) % stages.length
  }

  updateClass()
  setInterval(updateClass, 800)
})