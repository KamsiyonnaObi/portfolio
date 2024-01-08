// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const GET_ALL = groq`*[]`;
export const POSTS_QUERY = groq`*[_type == "project"]`;
export const WORK_QUERY = groq`*[_type == "work"]| order(_createdAt asc)[0..3]{
    "logo": logo.asset._ref,
    "caption": logo.caption,
    "employer": title,
    role,
    years,
    desc,
    descCont,
  }[] `;
export const SKILLS_QUERY = groq`*[_type == "skills"]`;
export const FEATURED_QUERY = groq`*[_type == "project" && isFeatured == true]{title, desc, slug, laptopImg, mobileImg, frontEndtags, backEndtags, color}`;
export const POST_QUERY = groq`*[_type == "project" && slug.current == $slug]`;
