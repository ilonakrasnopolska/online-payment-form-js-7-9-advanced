import validator from 'validator'

// func for validate credit card
export function validateCreditCard(value, data, required) {
  if (required && !value) return 'This field is required'
  if (!validator.isCreditCard(value)) return 'Enter a valid credit card number'
  return true
}

//func for validate expiry date
export function validateExpiryDate(value, data, required) {
  if (required && !value) return 'This field is required'
  if (!validator.matches(value, /^\d{2}\/\d{2}$/)) return 'Enter date in MM/YY format'
  return true
}

// func for checking CVC/CVV
export function validateCVC(value, data, required) {
  if (required && !value) return 'This field is required'
  if (!validator.isNumeric(value) || !validator.isLength(value, { min: 3, max: 3 })) return 'Enter a 3 digit number'
  return true
}

// func for checking email
export function validateEmail(value, data, required) {
  if (required && !value) return 'This field is required'
  if (!validator.isEmail(value)) return 'Enter a valid email address'
  return true
}
