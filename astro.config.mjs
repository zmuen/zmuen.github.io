import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserSiteRepo = /\.github\.io$/i.test(repoName);

export default defineConfig({
  site: "https://muenzhang.github.io",
  base: isGitHubPagesBuild && repoName && !isUserSiteRepo ? `/${repoName}` : "/",
  integrations: [mdx()]
});
