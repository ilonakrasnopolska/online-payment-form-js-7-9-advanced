import Inputmask from 'inputmask'

export function addMasksToInputs(input) {
    if (input.type === 'text') {
        if (input.id === 'cardNumber') {
            // For credit card number
            const cardNumberMask = new Inputmask('9999 9999 9999 9999')
            cardNumberMask.mask(input)
        } else if (input.id === 'cvv') {
            // For CVC
            const cardCvcMask = new Inputmask('999[9]')
            cardCvcMask.mask(input)
        } else {
            const cardExpiredDataMask = new Inputmask('99/99')
            cardExpiredDataMask.mask(input)
        }
    }
}
