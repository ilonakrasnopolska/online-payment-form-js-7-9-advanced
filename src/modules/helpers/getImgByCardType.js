import VisaImage from '/src/assets/img/visa.png'
import MasterCardImage from '/src/assets/img/mastercard.png'
import AmericanExpressImage from '/src/assets/img/american_express.png'

export function addImgByCardType(cardType) {
  let src
  let alt
  switch (cardType) {
    case 'Visa':
      src = VisaImage // Replace 'visa_image_url_here' with the actual URL of the Visa image
      alt = 'Visa'
      break
    case 'Mastercard':
      src = MasterCardImage
      alt = 'Mastercard'
      break
    case 'American Express':
      src = AmericanExpressImage
      alt = 'American Express'
      break
    default:
      break
  }
  return {
    src,
    alt,
  }
}

//set style settings for img
 export function setImgStyleSettings() {
   let img = document.getElementById('credit-card-type-icon')
   if(img) {
     img.style.width = '30px'
     img.style.position = 'absolute'
     img.style.right = '120px'
     img.style.top = '40px'
     if(img.alt === 'Visa') {
       img.style.top = '49px'
     }
     if(img.alt === 'American Express') {
       img.style.width = '25px'
     }
   }
 }

//get image by card type for adding to form
export function getCardTypeImageElement(cardType, el) {
  const { src, alt } = addImgByCardType(cardType)
  const imgElement = el('img.me-2', {
    src,
    alt,
    // id: 'credit-card-type-icon'
  })
  imgElement.style.width = '50px'
  imgElement.style.height = '20px'
  return imgElement
}
