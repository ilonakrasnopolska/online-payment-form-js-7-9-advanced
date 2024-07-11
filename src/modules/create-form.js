import {el} from "redom"
import {getCardTypeImageElement} from "./helpers/getImgByCardType.js"

export const cardNumberInput = el('div.mb-1.col-8.min-height', [
  el('label.form-label.fs-5.fst-italic',
    {textContent: 'Enter a card number:',
           for: 'cardNumber'}),
  el('input.w-75', {
    type: 'text',
    placeholder: 'XXXX XXXX XXXX XXXX',
    required: true,
    id: 'cardNumber',
     pattern: '[0-9]*',
  }),
  el('div.form-field-validation'),
])

export const expirationInput = el('div.col-3.me-3', [
  el('label.form-label.fs-5.fst-italic',
    {textContent: 'Expiry date:',
    for: 'expiryDate'}),
  el('input.w-100', {
  type: 'text',
  placeholder: 'MM/YY',
  required: true,
  id: 'expiryDate',
  pattern: '(0[1-9]|1[0-2])/([0-9]{2})',
}),
  el('div.form-field-validation'),
])

export const cvcInput = el('div.col-3.me-3', [
  el('label.form-label.fs-5.fst-italic',
    {textContent: 'CVC/CVV:',
    for: 'cvv'}),
  el('input.w-100', {
  type: 'text',
  placeholder: 'CVC/CVV',
  required: true,
  id: 'cvv',
  pattern: '[0-9]{3,4}',
}),
  el('div.form-field-validation'),
])

export const emailInput = el('div.d-flex.flex-column' +
  '.mb-1.col-8.min-height',
  [
    el('label.form-label.fs-5.fst-italic',
    {textContent: 'Enter email address:',
    for: 'email'}),
  el('input.w-75', {
  type: 'email',
  placeholder: 'Email',
  required: true,
  id: 'email',
}),
  el('div.form-field-validation'),
])

export const submitButton =
  el('button.col-3.btn.btn-dark.btn-lg.me-3', {
  type: 'submit',
  id: 'submit-button',
}, 'To pay')


export const createCardTypeIconsBox = () => {
   const cardTypeIconsBox =  el('div.d-flex' +
     '.col-3.align-items-center')

  const visaImg = getCardTypeImageElement('Visa', el)
  const mastercardImg = getCardTypeImageElement('Mastercard', el)
  const amexImg = getCardTypeImageElement('American Express', el)

  cardTypeIconsBox.appendChild(visaImg)
  cardTypeIconsBox.appendChild(mastercardImg)
  cardTypeIconsBox.appendChild(amexImg)
  return cardTypeIconsBox
}

const createForm = () => {
  return el('form', {
    id: 'credit-card-form',
    className: 'form d-flex flex-column row',
    type: 'submit',
  }, [
    cardNumberInput,
    el('div.d-flex.align-items-start.row.col-12.min-height', expirationInput, cvcInput),
    emailInput,
    el('div.d-flex.mb-3.col-10', submitButton, createCardTypeIconsBox())
  ])
}

export default createForm
