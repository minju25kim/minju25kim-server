import { sectionLeftItemStyle, sectionRightItemStyle, itemInfoStyle, itemSummaryStyle } from "../../style.css";

type Education = {
    name: string;
    items: Array<{
      institution: string;
      studyType: string;
      area: string;
      date: string;
      url: {
        label: string;
        href: string;
      };
    }>;
  };

export default function SectionEducation(education:Education):string{
    return /*html*/`
    <h3 class="${sectionLeftItemStyle}">${education.name}</h3>
    <div class="${sectionRightItemStyle}">
        ${education.items.map((item) => {
        return /*html*/`
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
    `
}