import {areAllFieldsValid} from "./validate.js"

export function updateSubmitButtonState(inputsArr, submitButton) {
  const areFieldsValid = areAllFieldsValid(inputsArr)
  submitButton.disabled = !areFieldsValid
  console.log(submitButton.disabled)
}

export function resetFormByClick(form) {
  const submitButton = document.getElementById('submit-button')
  submitButton.addEventListener('click', function(event) {
      event.preventDefault() // Предотвращение стандартного действия отправки формы

      form.reset()
      console.log('Congratulations submitted!')
    })
}
