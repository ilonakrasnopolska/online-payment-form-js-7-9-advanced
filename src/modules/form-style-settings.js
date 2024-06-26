export function setFormStyleSettings() {
  const form = document.getElementById('credit-card-form')
  form.style.minWidth = '300px'

  const labelText = document.querySelectorAll('.form-field-label')
  const validationText = document.querySelectorAll('.form-field-validation')

  labelText.forEach(label => {
    label.style.marginBottom = '5px'
    label.style.fontSize = '20px'
    label.parentElement.style.marginBottom = '10px'
  })

  validationText.forEach(error => {
    error.style.color = 'red'
    error.style.fontSize = '20px'
  })
}
