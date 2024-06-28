import {areAllFieldsValid} from "./validate.js"

export function updateSubmitButtonState(inputsArr, submitButton) {
  const areFieldsValid = areAllFieldsValid(inputsArr)
  submitButton.disabled = !areFieldsValid
  console.log(submitButton.disabled)
}

export function addEventListenersToButton() {
  const form = document.getElementById('credit-card-form')
  const submitButton = document.getElementById('submit-button')
  submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('Congratulations submitted!')
  })
}
