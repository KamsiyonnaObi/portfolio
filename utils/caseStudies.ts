import "server-only";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export type Callout = { icon?: string; title: string; body: string };

export type TextSection = {
  type: "text";
  eyebrow?: string;
  heading?: string;
  body?: string;
  callouts?: Callout[];
  image?: string;
};

export type GridItem = { title: string; body: string };

export type CardGridSection = {
  type: "cardGrid";
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items: GridItem[];
  note?: string;
};

export type Stat = { value: string; body: string };

export type StatGridSection = {
  type: "statGrid";
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  stats: Stat[];
  note?: string;
};

export type SolutionSurface = {
  title: string;
  caption?: string;
  body: string;
  image?: string;
};

export type SolutionSection = {
  type: "solution";
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  surfaces: SolutionSurface[];
};

export type CaseStudySection =
  | TextSection
  | CardGridSection
  | StatGridSection
  | SolutionSection;

export type CaseStudyMeta = {
  slug: string;
  title: string;
  desc: string;
  isFeatured: boolean;
  color: string;
  demo?: string;
  github?: string;
  githubPrivate?: boolean;
  status?: string;
  product?: string;
  skills?: string[];
  role?: string;
  timeline?: string;
  laptopImg?: string;
  mobileImg?: string;
  frontEndtags?: string[];
  backEndtags?: string[];
  updatedAt: string;
};

export type CaseStudy = CaseStudyMeta & {
  content: string;
  sections: CaseStudySection[];
};

function slugFromFileName(fileName: string) {
  return fileName.replace(/\.md$/, "");
}

function readCaseStudyFile(fileName: string): CaseStudy {
  const filePath = path.join(CASE_STUDIES_DIR, fileName);
  const raw = readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const { mtime } = statSync(filePath);

  return {
    slug: slugFromFileName(fileName),
    title: data.title,
    desc: data.desc,
    isFeatured: Boolean(data.isFeatured),
    color: data.color ?? "#FFBE62",
    demo: data.demo,
    github: data.github,
    githubPrivate: Boolean(data.githubPrivate),
    status: data.status,
    product: data.product,
    skills: data.skills,
    role: data.role,
    timeline: data.timeline,
    laptopImg: data.laptopImg,
    mobileImg: data.mobileImg,
    frontEndtags: data.frontEndtags,
    backEndtags: data.backEndtags,
    content: content.trim(),
    sections: data.sections ?? [],
    updatedAt: mtime.toISOString(),
  };
}

export function getCaseStudySlugs(): string[] {
  return readdirSync(CASE_STUDIES_DIR)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(slugFromFileName);
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudySlugs()
    .map((slug) => readCaseStudyFile(`${slug}.md`))
    .sort((a, b) => {
      if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
      return b.updatedAt.localeCompare(a.updatedAt);
    });
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((caseStudy) => caseStudy.isFeatured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  if (!getCaseStudySlugs().includes(slug)) return null;
  return readCaseStudyFile(`${slug}.md`);
}
