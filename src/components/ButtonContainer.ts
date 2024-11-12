import { buttonContainerStyle } from "../style.css.ts";
import Button from "./Button.ts";

export function ButtonContainer(lang: string): string {
  return /*html*/`
  <div class="${buttonContainerStyle}">
    ${lang === 'en' ? Button("lang", "한국어") : Button("lang", "English")}
    ${lang === 'en' ? Button("download", "Download PDF") : Button("download", "PDF 다운로드")}
    ${lang === 'en' ? Button("share", "Share") : Button("share", "공유하기")}
  </div>
  `;
}