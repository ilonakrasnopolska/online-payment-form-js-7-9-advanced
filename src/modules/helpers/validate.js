import validator from 'validator'
import {isValidDate} from "./dateUtils.js"

// func for validate credit card
export function validateCreditCard(value, data, required) {
  // Check if value is required and missing
  if (required && !value) return 'This field is required'
  //Check if value is number of credit card
  if (!validator.isCreditCard(value)) return 'Enter a valid credit card number'
  return true
}

//func for validate expiry date
export function validateExpiryDate(value, data, required) {
  // Check if value is required and missing
  if (required && !value) return 'This field is required'
  // Check if value matches MM/YY format
  if (!validator.matches(value, /^\d{2}\/\d{2}$/)) return 'Enter date in MM/YY format'
  // Check month and year validity using isValidDate function
  const isValid = isValidDate(value)
  if (isValid !== true) {
    return isValid // Return error message from isValidDate
  }
  return true
}

// func for checking CVC/CVV
export function validateCVC(value, data, required) {
  // Check if value is required and missing
  if (required && !value) return 'This field is required'
  // Check if it's a number and if length no more than 3
  if (!validator.isNumeric(value) || !validator.isLength(value, { min: 3, max: 3 })) return 'Enter a 3 digit number'
  return true
}

// func for checking email
export function validateEmail(value, data, required) {
  // Check if value is required and missing
  if (required && !value) return 'This field is required'
  // Check if it's email
  if (!validator.isEmail(value)) return 'Enter a valid email address'
  return true
}

// Function to check all fields validity
export function areAllFieldsValid(fields) {
  const fieldsArray = Array.from(fields)

  return fieldsArray.every(field => {
    const { id, value, dataset } = field // Деструктурируем dataset для получения required
    const required = dataset.required === 'true' // Преобразуем строку 'true' в булевое значение

    switch (id) {
      case 'card-number':
        return validateCreditCard(value, null, required) === true // Передаем required в validateCreditCard
      case 'card-expiry-date':
        return validateExpiryDate(value, null, required) === true // Передаем required в validateExpiryDate
      case 'card-cvc':
        return validateCVC(value, null, required) === true // Передаем required в validateCVC
      case 'user-email':
        return validateEmail(value, null, required) === true // Передаем required в validateEmail
      default:
        return true
    }
  });
}
