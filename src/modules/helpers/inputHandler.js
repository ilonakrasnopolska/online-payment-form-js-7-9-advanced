import { addMasksToInputs } from './inputMasks.js'
import { updateSubmitButtonState } from './submitButton.js'
import { validateField, displayError } from './errorsHandler.js'
import {
    addTypeOfCreditCard,
    removeTypeOfCreditCard,
} from './getTypeOfCreditCard.js'

// Function to handle input blur event
function handleBlur(event, array, button) {
    const input = event.target
    // Check value before call validation
    if (input.value.trim() !== '') {
        if (input.id === 'cardNumber') {
            addTypeOfCreditCard(input)
        }
        const error = validateField(input.id, input.value)
        displayError(input.id, error)
        updateSubmitButtonState(array, button)
    } else {
        // If input is empty, hide error
        displayError(input.id, null)
        //remove type of card if input is empty
        removeTypeOfCreditCard(input)
    }
}

// Function to handle input event
function handleInput(event, array, button) {
    const input = event.target
    // Hide error message
    displayError(input.id, null)
    //remove type of card if input is empty
    removeTypeOfCreditCard(input)
    // Check all fields validity after current input validation
    updateSubmitButtonState(array, button)
}

// func for validate credit card
export function inputValidationHandler() {
    //get input's
    const inputsArr = document.querySelectorAll('input')
    //get button
    const submitButton = document.getElementById('submit-button')
    submitButton.disabled = true

    inputsArr.forEach((input) => {
        // add mask's to input's
        addMasksToInputs(input)
        // Initial validation to check all pre-filled fields (but don't show errors)
        validateField(input.id, input.value)
        // Add event's input и blur
        input.addEventListener('input', (event) => {
            handleInput(event, inputsArr, submitButton)
        })
        input.addEventListener('blur', (event) => {
            handleBlur(event, inputsArr, submitButton)
        })
        input.addEventListener('paste', (event) => {
            event.preventDefault()
        })
        input.parentElement.style.position = 'relative'
    })

    // Update submit button state after initial validation
    updateSubmitButtonState(inputsArr, submitButton)
}
