import './style.css'
import { buttonStyle } from "./style.css.ts";
import en from './resources/en.json'
import kr from './resources/kr.json'

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
  <div>
  <button id="myButton" class="${buttonStyle}">EN/한국어</button>
    <div>
    <h1>Resume</h1>
    <h1>이력서</h1>
    </div>
    <h2>${en.basics.name}</h2>
    <h2>${kr.basics.name}</h2>
    <h2>${en.basics.location}</h2>
    <h2>${kr.basics.location}</h2>
    <button id="myButton" class="${buttonStyle}">Download PDF</button>
  </div>
`

