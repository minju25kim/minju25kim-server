import './style.css';
import { Header } from "./components/Header.ts";
import { Paper } from "./components/Paper.ts";
import { Footer } from "./components/Footer.ts";
import { Button } from "./components/Button.ts";
import isMobile from "./util/isMobile.ts";
import jsPDF from "jspdf"
import { font } from './font/NotoSansKR-regular.ts'

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
  const pdfButton = document.getElementById("pdf");

  langButton && langButton.addEventListener("click", toggleLanguage);
  pdfButton && pdfButton.addEventListener("click", handlePdf);
}


function handlePdf() {
  window.print()
  const paperElement = document.getElementById("paper");
  let el = document.documentElement
  if (paperElement && el) {
    paperElement.style.fontFamily = "NotoSansKR-Regular";
    // paperElement.style.backgroundColor = "#fff";

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
    });

    pdf.addFileToVFS("NotoSansKR-Regular.ttf", font)
    pdf.addFont("NotoSansKR-Regular.ttf", "NotoSansKR-Regular", "normal")
    pdf.setFont("NotoSansKR-Regular");

    pdf.html(paperElement, {
      callback: function (pdf) {
        pdf.save(`${lang}.pdf`);
      },
    });
  }
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