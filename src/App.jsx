// App.jsx (example composition)
// Put your existing <ExeCodeHero /> at the top, then add the sections below.

import React from "react";
import ExeCodeHero from "./ExeCodeHero"; 
import ServicesSection from "./sections/ServicesSection";
import WorkSection from "./sections/WorkSection";
import WhySection from "./sections/WhySection";
import ProcessSection from "./sections/ProcessSection";
import LeadershipSection from "./sections/LeadershipSection";
import ProposalSection from "./sections/ProposalSection";
import SiteFooter from "./sections/SiteFooter";
import ScrollToTopButton from "./components/ScrollToTopButton";

import "./styles/design-system.css"; // tokens + container + base

export default function App() {
  return (
    <>
      <ExeCodeHero />
      <main>
        <ServicesSection />
        <WorkSection />
        <WhySection />
        <ProcessSection />
        <LeadershipSection />
        <ProposalSection />
      </main>
      <SiteFooter />
      <ScrollToTopButton />
    </>
  );
}