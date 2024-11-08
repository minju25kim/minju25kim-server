import { sectionLeftItemStyle, sectionRightItemStyle, itemInfoStyle, itemKeywordStyle} from "../../style.css";

type Projects = {
    name: string;
    items: Array<{
      name: string;
      description: string;
      date: string;
      keywords: string[];
      url: {
        label: string;
        href: string;
      };
    }>;
  };

export default function SectionProject(projects: Projects): string {
    return /*html*/ `
        <h3 class="${sectionLeftItemStyle}">${projects.name}</h3>
        <div class="${sectionRightItemStyle}" >
            ${projects.items.map((item) => {
                return /*html*/`
                <div>
                    <div class="${itemInfoStyle}">
                        <div>
                            <a href=${item.url.href}>${item.name}</a>
                            ${item.keywords.map((keyword) => {
                            return `
                            <span class="${itemKeywordStyle}">${keyword}</span>
                            `
                            }).join("")}
                        </div>
                        <span>${item.date}</span>
                    </div>
                    <span>${item.description}</span>
                </div>
                `
            }).join("")
            }
        </div>
    `
}