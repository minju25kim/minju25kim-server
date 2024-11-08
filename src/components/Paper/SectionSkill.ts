import { sectionLeftItemStyle, sectionRightItemStyle } from "../../style.css"

type Skills = {
    name: string;
    items: Array<{
      name: string;
      description: string;
      keywords: string[];
    }>;
  };

export default function SectionSkill(skills: Skills): string {
    return /*html*/`
    <h3 class="${sectionLeftItemStyle}">${skills.name}</h3>
    <div class="${sectionRightItemStyle}">
        ${skills.items.map((item) => {
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
    `
}