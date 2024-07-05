import {validateCreditCard,
  validateExpiryDate,
  validateCVC,
  validateEmail} from "./validator.js"

// Function to check a field and valid it for creating or removing error
export function validateField(fieldId, value) {
  switch (fieldId) {
    case 'card-number':
      return validateCreditCard(value)
    case 'card-expiry-date':
      return validateExpiryDate(value)
    case 'card-cvc':
      return validateCVC(value)
    case 'user-email':
      return validateEmail(value)
    default:
      return null
  }
}

//Function for hidden and showing error's
export function displayError(fieldId, errorMessage) {
  const errorLabel = document.querySelector(`#${fieldId} + .form-field-validation`)
  if (errorLabel) {

    if (typeof errorMessage === 'string') {
      console.log(typeof errorMessage)
      // Если есть текст ошибки, устанавливаем его и показываем label
      errorLabel.textContent = errorMessage
      errorLabel.style.display = 'block'
    } else {
      // В остальных случаях (включая true) скрываем label
      errorLabel.style.display = 'none'
    }
  } else {
    console.error(`Error label for ${fieldId} not found.`)
  }
}
