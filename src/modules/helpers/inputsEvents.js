import validator from "validator"

// func for validate credit card
export function validateCardInput() {
  //get input's
  const inputsArr = document.querySelectorAll('input')
  //add event listener
  for (let i = 0; i < inputsArr.length; i++) {
    const input = inputsArr[i]
    if (input.type === 'text') {
      // add event listener
      input.addEventListener('input', (e) => {
        //get value
        let value = e.target.value
        // Удаляем все символы, кроме цифр
        value = validator.blacklist(value, '\\D')

        if (input.id === 'card-number') {
          // Форматируем цифры в группы по 4
          value = value.match(/.{1,4}/g)?.join(' ') || ''
        } else if (input.id === 'card-cvc') {
          // Ограничиваем ввод до 3 символов
          value = value.slice(0, 3)
        } else {
          console.log('popka')
        }

        // update input value
        e.target.value = value
      })
    }
  }
}

