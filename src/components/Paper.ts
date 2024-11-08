import {
  paperStyle,
  sectionContainerStyle,
} from "../style.css.ts";
import Basic from './Paper/Basic.ts'
import SectionProfile from './Paper/SectionProfile.ts'
import SectionExperience from "./Paper/SectionExperience.ts";
import SectionSkill from "./Paper/SectionSkill.ts";
import SectionProject from './Paper/SectionProject.ts'
import SectionEducation from './Paper/SectionEducation.ts'
import en from "../assets/json/en.json";
import kr from "../assets/json/kr.json";

export function Paper(lang: string): string {
  const data = lang === "en" ? en : kr;

  return /*html*/`
    <div id="paper" class="${paperStyle}">
      ${Basic(data.basics)}
      <div class="${sectionContainerStyle}">
        ${SectionProfile(data.sections.profiles)}
        ${SectionExperience(data.sections.experience)}
        ${SectionSkill(data.sections.skills)}
        ${data.sections.projects.items.length ? SectionProject(data.sections.projects) : ""}
        ${SectionEducation(data.sections.education)}
      </div>
    </div>
  `;
}