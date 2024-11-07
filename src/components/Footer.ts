import { footerStyle } from "../style.css.ts"

export function Footer(lang: string): string {
  return /*html*/`
      <footer class="${footerStyle}">
        <p>© ${new Date().getFullYear()} ${lang === 'en' ? "Minju Kim.": "김민주"} All rights reserved.</p>
      </footer>
    `;
}