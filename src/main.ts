import './print.css'
import { Header } from "./components/Header.ts";
import { ButtonContainer } from "./components/ButtonContainer.ts";
import { Paper } from "./components/Paper.ts";
import { Footer } from "./components/Footer.ts";

let lang = document.documentElement?.lang || 'en';

function renderApp() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML =
  /* html */`
    ${lang === 'en' ? Header("Resume") : Header("이력서")}
    ${lang === 'en' ? ButtonContainer('en') : ButtonContainer('ko')}
    ${lang === 'en' ? Paper('en') : Paper('ko')}
    ${lang === 'en' ? Footer('en') : Footer('ko')}
  `;

  const langButton = document.getElementById("lang");
  const pdfButton = document.getElementById("download");
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
    document.title = "김민주 이력서";
  } else {
    htmlElement.setAttribute("lang", "en");
    document.title = "Minju Kim's Resume";
  }
  renderApp();
}

renderApp();