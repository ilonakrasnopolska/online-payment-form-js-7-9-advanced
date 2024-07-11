import creditCardType from "credit-card-type"
import {el} from "redom"
import {addImgByCardType, setImgStyleSettings} from "./getImgByCardType.js"

//func for getting type of card
export function addTypeOfCreditCard(input) {
  //get obj with info about type card
  const creditCardObj = creditCardType(input.value)
  //if it is no type return
  if (Object.keys(creditCardObj).length === 0) {
    return
  }
  //get string of type of name
  const typeOfCard = creditCardObj[0].niceType
  if (typeOfCard === 'Visa' || typeOfCard === 'Mastercard' || typeOfCard === 'American Express') {
    //get src and alt by name of type
    const { src, alt } = addImgByCardType(typeOfCard)

    //put id on icon
    const iconId = 'credit-card-type-icon'
    //get icon
    let icon = document.getElementById(iconId)

    if (icon) {
      // Если элемент существует, обновить его текстовое содержимое
      icon.src = src
      icon.alt = alt
    } else {
      // Если элемента не существует, создать его
      icon = el('img', { id: iconId, src, alt })
      input.parentNode.append(icon)
    }
    setImgStyleSettings(input)
  }
}

//function for remove type of  card
export function removeTypeOfCreditCard(input) {
  let icon = document.getElementById('credit-card-type-icon')

  if (input.value === '') {
    if (icon) {
      icon.remove()
    }
  }
}
