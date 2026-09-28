import "server-only";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  desc: string;
  isFeatured: boolean;
  color: string;
  demo?: string;
  github?: string;
  githubPrivate?: boolean;
  role?: string;
  startDate?: string;
  endDate?: string;
  laptopImg?: string;
  mobileImg?: string;
  frontEndtags?: string[];
  backEndtags?: string[];
  updatedAt: string;
};

export type CaseStudy = CaseStudyMeta & { content: string };

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
    role: data.role,
    startDate: data.startDate,
    endDate: data.endDate,
    laptopImg: data.laptopImg,
    mobileImg: data.mobileImg,
    frontEndtags: data.frontEndtags,
    backEndtags: data.backEndtags,
    content: content.trim(),
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
