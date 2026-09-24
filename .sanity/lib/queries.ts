// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const GET_ALL = groq`*[]`;
export const POSTS_QUERY = groq`*[_type == "project" && defined(slug.current)] | order(isFeatured desc, _createdAt desc)`;
export const FEATURED_QUERY = groq`*[_type == "project" && isFeatured == true && defined(slug.current)] | order(_createdAt desc){title, desc, slug, laptopImg, mobileImg, frontEndtags, backEndtags, color}`;
export const POST_QUERY = groq`*[_type == "project" && slug.current == $slug][0]`;
export const PROJECT_SLUGS_QUERY = groq`*[_type == "project" && defined(slug.current)]{"slug": slug.current, _updatedAt}`;
export const PROJECT_OG_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{title, desc, color}`;
