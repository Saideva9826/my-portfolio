import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import SectionComponent from "./components/Section";
import React from "react";
import ProjectsGrid from "./components/Projects/ProjectsGrid";
import SkillsGrid from "./components/Skills/SkillsGrid";
import { Section } from "@/types/Section";
import { Project } from "@/types/Project";
import { SkillGroup } from "@/types/SkillGroup";
import { Social } from "@/types/Social";
import { projects as staticProjects } from "@/src/content/projects";
import { skills as staticSkills } from "@/src/content/skills";
import { socials as staticSocials } from "@/src/content/socials";

export const revalidate = 3600;

// Static page sections
const sections: Section[] = [
  {
    _id: "hero",
    _type: "section",
    id: "hero",
    name: "Home",
    heading: "",
    subHeading: "",
    subSections: [],
    order: 0,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "about",
    _type: "section",
    id: "about",
    name: "About",
    heading: "About",
    subHeading: "Get to know me better",
    subSections: [],
    order: 1,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "projects",
    _type: "section",
    id: "projects",
    name: "Projects",
    heading: "Featured Projects",
    subHeading: "Check out some of my recent work",
    subSections: [],
    order: 2,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "experience",
    _type: "section",
    id: "experience",
    name: "Experience",
    heading: "Professional Experience",
    subHeading: "My career journey",
    subSections: [],
    order: 3,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "skills",
    _type: "section",
    id: "skills",
    name: "Skills",
    heading: "Skills & Technologies",
    subHeading: "Technologies I work with",
    subSections: [],
    order: 4,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "contact",
    _type: "section",
    id: "contact",
    name: "Contact",
    heading: "Let's Work Together",
    subHeading: "Get in touch for opportunities or collaborations",
    subSections: [],
    order: 5,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
];
const socials: Social[] = [...staticSocials];
const projects: Project[] = [...staticProjects] as Project[];
const skills: SkillGroup[] = [...staticSkills];

export default async function Home() {
  return (
    <div>
      <Header sections={sections} socials={socials} />
      <main>
        {sections.map((section) => {
          if (section.id === "hero") {
            return <Hero key={section._id} />;
          } else if (section.id === "about") {
            return (
              <SectionComponent key={section._id} section={section}>
                <About />
              </SectionComponent>
            );
          } else if (section.id === "projects") {
            return (
              <SectionComponent key={section._id} section={section}>
                <ProjectsGrid projects={projects} />
              </SectionComponent>
            );
          } else if (section.id === "skills") {
            return (
              <SectionComponent key={section._id} section={section}>
                <SkillsGrid skills={skills} />
              </SectionComponent>
            );
          } else if (section.id === "contact") {
            return (
              <SectionComponent key={section._id} section={section}>
                <Contact />
              </SectionComponent>
            );
          } else {
            return (
              <SectionComponent key={section._id} section={section}>
                {null}
              </SectionComponent>
            );
          }
        })}
      </main>
      <Footer />
    </div>
  );
}
