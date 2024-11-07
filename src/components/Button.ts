import { buttonStyle, buttonContainerStyle } from "../style.css.ts";

function Button(id: string, text: string): string {
  return `<button id="${id}" class="${buttonStyle}">${text}</button>`
}

export function ButtonContainer(lang: string): string {
  return /*html*/`
  <div class="${buttonContainerStyle}">
    ${lang === 'en' ? Button("lang", "한국어") : Button("lang", "English")}
    ${lang === 'en' ? Button("pdf", "Download PDF") : Button("pdf", "PDF 다운로드")}
    ${lang === 'en' ? Button("share", "Share") : Button("share", "공유하기")}
  </div>
  `;
}