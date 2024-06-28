import {addMasksToInputs} from "./inputMasks.js"
import {updateSubmitButtonState} from "./submitButton.js"

// func for validate credit card
export function addEventListenersToInputs() {
  //get input's
  const inputsArr = document.querySelectorAll('input')
  const submitButton = document.getElementById('submit-button')
  submitButton.disabled = true

  // func for update button
  function validateAndUpdate() {
    inputsArr.forEach(input => {
      addMasksToInputs(input)
    })
    updateSubmitButtonState(inputsArr, submitButton)
  }

  //add event listener
  for (let i = 0; i < inputsArr.length; i++) {
    const input = inputsArr[i]
    console.log(input)
      input.addEventListener('input', validateAndUpdate) // Обработчик для изменений ввода
      input.addEventListener('change', validateAndUpdate) // Обработчик для изменений значения поля
      input.addEventListener('paste', validateAndUpdate) // Обработчик для вставки текста
    }
  // Validate initially in case the form is pre-filled
  validateAndUpdate()
}


