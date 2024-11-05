import './style.css';
import { Button } from "./components/button.ts";
import { Header } from "./components/Header.ts";
import { Paper } from "./components/Paper.ts";
import { Footer } from './components/Footer.ts'
import isMobile from './util/isMobile.ts';

console.log(isMobile);

let lang = document.documentElement?.lang || 'en';

function renderApp() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */`
    <div>
      <div id="buttonContainer">
        ${lang === 'en' ? Button("lang", "ko") : Button("lang", "en")}
        ${lang === 'en' ? Button("pdf", "Download PDF") : Button("pdf", "PDF 다운로드")}
        ${lang === 'en' ? Button("share", "Share") : Button("share", "공유하기")}
      </div>
      ${lang === 'en' ? Header("Resume") : Header("이력서")}
      ${lang === 'en' ? Paper('en') : Paper('ko')}
      ${Footer()}
    </div>
    
  `;

  const langButton = document.getElementById("lang");
  if (langButton) {
    langButton.addEventListener("click", toggleLanguage);
  }
  const pdfButton = document.getElementById("pdf");
  pdfButton && pdfButton.addEventListener("click", handlePdf);
}


function handlePdf() {

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