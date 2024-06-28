import Inputmask from "inputmask"

 export function addMasksToInputs(input) {
   if (input.type === 'text') {
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
   }
 }
