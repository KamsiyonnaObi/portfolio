import React from "react";

import type { CaseStudySection as CaseStudySectionData } from "@/utils/caseStudies";

import { TextSection } from "./TextSection";
import { CardGrid } from "./CardGrid";
import { StatGrid } from "./StatGrid";
import { SolutionShowcase } from "./SolutionShowcase";

export const CaseStudySection = (section: CaseStudySectionData) => {
  switch (section.type) {
    case "text":
      return <TextSection {...section} />;
    case "cardGrid":
      return <CardGrid {...section} />;
    case "statGrid":
      return <StatGrid {...section} />;
    case "solution":
      return <SolutionShowcase {...section} />;
    default:
      return null;
  }
};
