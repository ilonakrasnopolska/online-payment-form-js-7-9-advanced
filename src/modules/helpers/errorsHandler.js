import {
    validateCreditCard,
    validateExpiryDate,
    validateCVC,
    validateEmail,
} from './validator.js'

// Function to check a field and valid it for creating or removing error
export function validateField(fieldId, value) {
    switch (fieldId) {
        case 'cardNumber':
            return validateCreditCard(value)
        case 'expiryDate':
            return validateExpiryDate(value)
        case 'cvv':
            return validateCVC(value)
        case 'email':
            return validateEmail(value)
        default:
            return null
    }
}

//Function for hidden and showing error's
export function displayError(fieldId, errorMessage) {
    const errorLabel = document.querySelector(
        `#${fieldId} + .form-field-validation`
    )
    if (errorLabel) {
        errorLabel.style.color = 'red'
        errorLabel.style.fontSize = '15px'

        if (typeof errorMessage === 'string') {
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
