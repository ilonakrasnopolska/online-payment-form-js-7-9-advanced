export function isValidDate(value) {
  // Split value into month and year
  const [month, year] = value.split('/').map(Number)

  // Check if month is valid (01-12)
  if (month < 1 || month > 12) return 'Enter a valid month (01-12)'

  // Get current date
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentYear = currentDate.getFullYear() % 100

  // Check if the entered date is greater than the current date
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return 'Enter a date greater than the current date'
  }

}
