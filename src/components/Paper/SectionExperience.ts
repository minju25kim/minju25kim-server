import { sectionLeftItemStyle, sectionRightItemStyle, itemInfoStyle, itemSummaryStyle } from "../../style.css";

type Experience = {
    name: string;
    items: Array<{
        company: string;
        position: string;
        location: string;
        date: string;
        summary: string[];
        url: {
            label: string;
            href: string;
        };
    }>;
};

export default function SectionExperience(experience: Experience): string {

    return /*html*/`
     <h3 class="${sectionLeftItemStyle}">${experience.name}</h3>
        <div class="${sectionRightItemStyle}">
            ${experience.items.map((item) => {
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
    `
}