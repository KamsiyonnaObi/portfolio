// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const GET_ALL = groq`*[]`;
export const POSTS_QUERY = groq`*[_type == "project"]`;

export const POST_QUERY = groq`*[_type == "project" && slug.current == $slug]`;
