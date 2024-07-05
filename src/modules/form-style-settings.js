export function setFormStyleSettings() {
  const form = document.getElementById('credit-card-form')
  const labelTextArr = document.querySelectorAll('.form-field-label')
  const validationTextArr = document.querySelectorAll('.form-field-validation')

  //add some styles
  labelTextArr.forEach(label => {
    label.parentElement.querySelector('input').style.width = '70%'
    label.parentElement.style.marginBottom = '10px'
    label.parentElement.style.width = '100%'
    label.style.marginBottom = '5px'
    label.style.fontSize = '20px'
  })

  validationTextArr.forEach(error => {
    error.style.color = 'red'
    error.style.fontSize = '20px'
  })

  //add some styles
  form.style.minWidth = '300px'
}
