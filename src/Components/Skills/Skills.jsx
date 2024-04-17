import React from "react";
import { KnowlegdeabledSkills, learingSkills, skills } from "./SkillsList";
import SkillsSections from "./SkillsSections";

export default function Skills() {
  return (
    <section id="skills" className="container-lg py-5">
      <h2 className="fs-1 text-center mb-5">Skills</h2>
      <SkillsSections /*subHeading={'Main Skills'}*/ skillsType={skills}/>
      <SkillsSections subHeading={'Currently Learning'} skillsType={learingSkills}/>
      <SkillsSections subHeading={'Familiar With'} skillsType={KnowlegdeabledSkills}/>
    </section>
  );
}
