import {
  basicStyle,
  basicInfoStyle,
  paperStyle,
  sectionLeftItemStyle,
  sectionRightItemStyle,
  sectionContainerStyle,
  itemInfoStyle,
  itemSummaryStyle,
} from "../style.css.ts";
import en from "../json/en.json";
import kr from "../json/kr.json";

export function Paper(lang: string): string {
  const data = lang === "en" ? en : kr;

  return /*html*/`
    <div id="paper" class="${paperStyle}">
      <div class="${basicStyle}">
        <h2>${data.basics.name}</h2>
        <h4>${data.basics.headline}</h4>
        <div class="${basicInfoStyle}">
          <span>${data.basics.location}</span>
          <a href=mailto:${data.basics.email}>${data.basics.email}</a>
        </div>
      </div>
      <div class="${sectionContainerStyle}">

          <h3 class="${sectionLeftItemStyle}">${data.sections.profiles.name}</h3>
          <div class="${sectionRightItemStyle}">
            ${data.sections.profiles.items.map((item) => {
            return `
              <a href=${item.url.href}>${item.network}</a>
            `
            }).join("")}
          </div>

          <h3 class="${sectionLeftItemStyle}">${data.sections.experience.name}</h3>
          <div class="${sectionRightItemStyle}">
            ${data.sections.experience.items.map((item) => {
              return `
                <div>
                  <div class="${itemInfoStyle}">
                    <a href=${item.url.href}>${item.company}</a>
                    <span>${item.location}</span>
                  </div>
                  <div class="${itemInfoStyle}">
                    <h4>${item.position}</h4>
                    <span>${item.date}</span>
                  </div>
                </div>
                <ul>
                ${item.summary.map((item) => {
                  return `<li class="${itemSummaryStyle}">${item}</li>`
                   }).join('')}
                  </ul>
              `
            }).join("")}
          </div>

          <h3 class="${sectionLeftItemStyle}">${data.sections.skills.name}</h3>
          <div class="${sectionRightItemStyle}">
            ${data.sections.skills.items.map((item) => {
                  return `
                    <div>
                    <h4>${item.name}</h4>
                    <div>
                    ${item.keywords.map((keyword) => {
                    return `<span>${keyword}</span>`
                    }).join(", ")}
                    </div>
                    </div>
                    `
                }).join("")}
          </div>

          ${
            data.sections.projects.items.length > 0 ?
            `
            <h3 class="${sectionLeftItemStyle}">${data.sections.projects.name}</h3>
            <div class="${sectionRightItemStyle}">
            ${data.sections.projects.items.map((item) => {
              return `
              <div>
              <div class="${itemInfoStyle}">
                <a href=${item.url.href}>${item.name}</a>
                <span>${item.date}</span>
              </div>
              <div class="${itemInfoStyle}">
                <span>${item.description}</span>
                <div>
                ${item.keywords.map((keyword) => {
                  return `
                  <span>${keyword}</span>
                  `
                }).join(", ")}
                </div>
              </div>
              </div>
              `
            }).join("")}
            </div>
            `
            :
            ""
          }

          <h3 class="${sectionLeftItemStyle}">${data.sections.education.name}</h3>
          <div class="${sectionRightItemStyle}">
            ${data.sections.education.items.map((item) => {
             return `
              <div>
                <div class="${itemInfoStyle}">
                  <a href=${item.url.href}>${item.institution}</a>
                  <span>${item.date}</span>
                </div>
                <span>${item.area} ${item.studyType}</span>
              </div>
              `
           }).join("")}
          </div>
      </div>
    </div>
  `;
}