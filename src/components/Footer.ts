import { footerStyle } from "../style.css.ts"

export function Footer(): string {
    return /*html*/`
      <footer class="${footerStyle}">
        <p>© ${new Date().getFullYear()} Minju Kim. All rights reserved.</p>
      </footer>
    `;
}