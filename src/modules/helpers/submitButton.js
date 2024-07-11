import {areAllFieldsValid} from "./validator.js"
import {removeTypeOfCreditCard} from "./getTypeOfCreditCard.js"

export function updateSubmitButtonState(inputsArr, submitButton) {
  const areFieldsValid = areAllFieldsValid(inputsArr)
  submitButton.disabled = !areFieldsValid
}

export function sendFormByClick(form) {
  const submitButton = document.getElementById('submit-button')
  submitButton.addEventListener('click', function(event) {
      event.preventDefault()

      form.reset()
      submitButton.disabled = true
      removeTypeOfCreditCard(form.querySelector('#cardNumber'))
    alert('Congratulations submitted!')
    })
}
