import { buttonStyle, buttonContainerStyle } from "../style.css.ts";
import Language from "../assets/svg/Language.ts";
import Upload from "../assets/svg/Upload.ts";
import Download from "../assets/svg/Download.ts";
import Share from "../assets/svg/Share.ts";

  function Icon(icon: string): string {
    switch (icon) {
      case 'lang':
        return Language();
      case 'up':
        return Upload();
      case 'down':
        return Download();
      case 'share':
        return Share();
      default:
        return "";
    }
  }

  function Button(id: string, text: string, icon: string): string {
    return `
    <button id="${id}" class="${buttonStyle}">
      ${Icon(icon)}
      <span>${text}</span>
    </button>
    `
  }

  export function ButtonContainer(lang: string): string {
    return /*html*/`
  <div class="${buttonContainerStyle}">
    ${lang === 'en' ? Button("lang", "한국어", 'lang') : Button("lang", "English", 'lang')}
    ${lang === 'en' ? Button("json", "Upload JSON", 'up') : Button("json", "JSON 업로드", 'up')}
    ${lang === 'en' ? Button("pdf", "Download PDF", 'down') : Button("pdf", "PDF 다운로드", 'down')}
    ${lang === 'en' ? Button("share", "Share", 'share') : Button("share", "공유하기", 'share')}
  </div>
  `;
  }