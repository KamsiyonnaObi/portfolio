import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: "kpdilr6z",
    dataset: "production",
    title: "My Portfolio Website",
    apiVersion: "2023-09-17",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config;