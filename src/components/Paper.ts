import { paperStyle, sectionStyle } from "../style.css.ts";
import en from "../json/en.json";
import kr from "../json/kr.json";

export function Paper(lang: string): string {
  const data = lang === "en" ? en : kr;

  return /*html*/`
    <div id="paper" class="${paperStyle}">
      <h2>${data.basics.name}</h2>
      <div id="info">
        <h3>${data.basics.location}</h3>
        <h3><a href=mailto:${data.basics.email}>${data.basics.email}</a></h3>
      </div>
      <div id="link" class="${sectionStyle}">
        <h3>${data.sections.profiles.name}</h3>
        ${data.sections.profiles.items.map((item) => {
        return `
          <a href=${item.url.href}>${item.network}</a>
          `
        }).join("")}
      </div>
      <div id="project" class="${sectionStyle}">
        <h3>${data.sections.projects.name}</h3>
        ${data.sections.projects.items.map((item)=>{
          return `
          <a href=${item.url.href}>${item.name}</a>
          <span>${item.date}</span>
          <div>
            ${item.keywords.map((keyword)=>{
              return `<span>${keyword}</span>`
            })}
          </div>
          <br/>
          `
        }).join("")}
      </div>
      <div id="experience" class="${sectionStyle}">
        <h3>${data.sections.experience.name}</h3>
        ${data.sections.experience.items.map((item)=>{
          return `
            <a href=${item.url.href}>${item.company}</a>
            <br/>
            <span>${item.location}</span>
            <span>${item.date}</span>
            <span>${item.position}</span>
            <div>${item.summary}</div>
          `
        }).join("")}
      </div>
      <div id="skills" class="${sectionStyle}">
        <h3>${data.sections.skills.name}</h3>
        ${data.sections.skills.items.map((item)=>{
          return `
            <div>
            <h4>${item.name}</h4>
            ${item.keywords.map((keyword)=>{
              return `<span>${keyword}</span>`
            })}
            </div>
          `
        }).join("")}
      </div>
      <div id="education" class="${sectionStyle}">
        <h3>${data.sections.education.name}</h3>
        ${data.sections.education.items.map((item)=>{
          return `
            <a href=${item.url.href}>${item.institution}</a>
            <span>${item.date}</span>
            <span>${item.area}</span>
            <span>${item.studyType}</span>
            <div>${item.summary}</div>
          `
        }).join("")}
      </div>
    </div>
  `;
}