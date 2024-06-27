import Inputmask from "inputmask"

// func for validate credit card
export function addMasksToInputs() {
  //get input's
  const inputsArr = document.querySelectorAll('input')

  //add event listener
  for (let i = 0; i < inputsArr.length; i++) {
    const input = inputsArr[i]
    if (input.type === 'text') {
      // add event listener
      input.addEventListener('input', (e) => {
        if (input.id === 'card-number') {
          // For credit card number
          const cardNumberMask = new Inputmask('9999 9999 9999 9999')
          cardNumberMask.mask(input)
        } else if (input.id === 'card-cvc') {
          // For CVC
          const cardCvcMask = new Inputmask('999')
          cardCvcMask.mask(input)
        } else {
          const cardExpiredDataMask = new Inputmask('99/99')
          cardExpiredDataMask.mask(input)
        }
      })
    }
  }
}

