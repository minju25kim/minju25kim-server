import { basicHeadlineStyle, basicInfoStyle, basicStyle } from "../../style.css"

type Basics = {
    name: string;
    headline: string;
    email: string;
    phone?: string;
    location: string;
  };

export default function Basic(basics: Basics): string {

    return /*html*/`
    <div class="${basicStyle}">
        <h2>${basics.name}</h2>
        <h3 class="${basicHeadlineStyle}">${basics.headline}</h3>
        <div class="${basicInfoStyle}">
          <span>${basics.location}</span>
          <a href=mailto:${basics.email}>${basics.email}</a>
        </div>
      </div>
      `
}