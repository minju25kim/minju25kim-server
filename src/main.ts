import './style.css'
import { buttonStyle } from "./style.css.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
  <div>
    <button id="myButton" class="${buttonStyle}">Click Me</button>
  </div>
`

