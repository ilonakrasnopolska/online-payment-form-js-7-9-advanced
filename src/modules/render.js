import {setChildren} from "redom"
import {container, title} from "./helpers/createDOM-elements.js"
import {createForm} from "./formBuilder.js"


export function render() {
  //append container to body
  setChildren(window.document.body, [container])
  //append title to container
  setChildren(container, [title])
  //create form
  createForm(container)
}
