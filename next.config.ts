import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const options: RehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: false,
};

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ["mdx", "ts", "tsx"],
  reactStrictMode: true,
  experimental: {
    mdxRs: false,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
  },
});

export default withMDX(nextConfig);
