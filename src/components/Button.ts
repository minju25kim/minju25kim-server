import { buttonStyle } from "../style.css.ts";
import { Icon } from "../utils/Icon.ts";

export default function Button(id: string, text: string): string {
  return `
    <button id="${id}" class="${buttonStyle}">
      ${Icon(id)}
      ${text && `<span>${text}</span>`}
    </button>
  `
}