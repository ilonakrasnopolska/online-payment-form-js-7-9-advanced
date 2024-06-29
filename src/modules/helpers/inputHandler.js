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
    updateSubmitButtonState(inputsArr, submitButton)
  }

  // add mask's to input's
  inputsArr.forEach(input => {
    addMasksToInputs(input)
  })

  //add event listener
  inputsArr.forEach(input => {
    // Обработчик для изменений ввода
      input.addEventListener('input', validateAndUpdate)
    // Обработчик для вставки текста
      input.addEventListener('paste', event => {
        event.preventDefault() // Предотвращаем вставку текста
        validateAndUpdate()
      })

  // Validate initially in case the form is pre-filled
  validateAndUpdate()
})
}


// 5357 3862 0018 9414
