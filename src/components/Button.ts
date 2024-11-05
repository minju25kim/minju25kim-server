import { buttonStyle } from "../style.css.ts";

export function Button(id: string, text: string): string {
  return `<button id="${id}" class="${buttonStyle}">${text}</button>`;
}