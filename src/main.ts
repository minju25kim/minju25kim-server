import './global-print-style.css'
// import { Header } from "./components/Header.ts";
import { Paper } from "./components/Paper.ts";
import { Footer } from "./components/Footer.ts";
import { ButtonContainer } from "./components/Button.ts";

let lang = document.documentElement?.lang || 'en';

// ${lang === 'en' ? Header("Resume") : Header("이력서")}
function renderApp() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
    /* html */`
      ${lang === 'en' ? ButtonContainer('en') : ButtonContainer('ko')}
      ${lang === 'en' ? Paper('en') : Paper('ko')}
      ${lang === 'en' ? Footer('en') : Footer('ko')}
    `;

  const langButton = document.getElementById("lang");
  const pdfButton = document.getElementById("pdf");
  const shareButton = document.getElementById("share");

  langButton && langButton.addEventListener("click", toggleLanguage);
  pdfButton && pdfButton.addEventListener("click", handlePdf);
  shareButton && shareButton.addEventListener("click", handleShare)
}

function handleShare() {
  window.navigator.clipboard.writeText(window.location.href);
  lang === 'en' ? alert('Link is copied.') : alert('링크가 복사되었습니다.')
}

function handlePdf() {
  window.print()
}

function toggleLanguage() {
  lang = lang === 'en' ? 'ko' : 'en';
  const htmlElement = document.documentElement;
  const currentLang = htmlElement.getAttribute("lang");

  if (currentLang === "en") {
    htmlElement.setAttribute("lang", "ko");
    document.title = "이력서";
  } else {
    htmlElement.setAttribute("lang", "en");
    document.title = "Resume";
  }
  renderApp();
}

renderApp();