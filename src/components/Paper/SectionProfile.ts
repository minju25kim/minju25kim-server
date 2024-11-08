import { sectionLeftItemStyle, sectionRightItemStyle, itemLogoStyle } from "../../style.css";
import Github from "../../assets/svg/Github";
import Linkedin from "../../assets/svg/Linkedin";

type SectionProfile = {
    name: string;
    items: Array<{
        network: string;
        username: string;
        icon: string;
        url: {
            href: string;
        };
    }>;
};

export default function SectionProfile(profiles: SectionProfile): string {
    return /*html*/`
    <h3 class="${sectionLeftItemStyle}">${profiles.name}</h3>
    <div class="${sectionRightItemStyle}">
      ${profiles.items.map((item) => {
        return `
        <a href="${item.url.href}" class="${itemLogoStyle}">
          ${item.icon === 'github' ? Github() : ""}
          ${item.icon === 'linkedin' ? Linkedin() : ""}
          <span>${item.network} @${item.username}</span>
        </a>
      `;
    }).join("")}
    </div>    
    `
}