import { a4Style } from "../style.css.ts";
import en from "../resources/en.json";
import kr from "../resources/kr.json";

export function Paper(lang: string): string {
  const data = lang === "en" ? en : kr;
  
  return /*html*/`
    <div id="paper" class="${a4Style}">
      <h2>${data.basics.name}</h2>
      <div id="info">
        <span>${data.basics.location}</span>
        <a href=mailto:${data.basics.email}>${data.basics.email}</a>
      </div>
      <div id="link">
        link
        ${data.sections.profiles.items.map((item)=>{
          return `
          <a href=${item.url.href}>${item.network}</a>
          `
        }).join('')}
      </div>
      <div id="project">project</div>
      <div id="experience">exp</div>
      <div id="education">edu</div>
    </div>
  `;
}