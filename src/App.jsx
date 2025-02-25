import React from "react";
import AboutMeMain from "./components/Aboutmesection/Aboutmemain";
import ContactMeMain from "./components/Contactmesection/Contactmemain";
import ExperienceMain from "./components/Experiencesection/Experiencemain";
import FooterMain from "./components/Footer/Footermain";
import HeroGradient from "./components/Herosection/Herogradient";
import ProjectsMain from "./components/Projectsection/Projectmain";
import HeroMain from "./components/Herosection/Heromain";
import SkillsMain from "./components/Skills/Skillsmain";
import SubSkills from "./components/Skills/Subskills";
import SubHeroMain from "./components/Subhero/Subheromain";
import NavbarMain from "./components/Navbar/Navmain";

function App() {
  return (
    <main className="font-body bg-darkBrown  text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
