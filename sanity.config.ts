import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./schemas";

const config = defineConfig({
  projectId: "kpdilr6z",
  dataset: "production",
  title: "My Portfolio Website",
  apiVersion: "2023-09-17",
  basePath: "/admin",
  schema: { types: schemaTypes },
  plugins: [structureTool()],
});

export default config;
