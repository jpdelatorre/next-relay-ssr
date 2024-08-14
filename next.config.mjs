/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    relay: {
      src: "./src",
      language: "typescript",
      schema: "./schema.graphql",
      exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
      artifactDirectory: "./__generated__",
    },
  },
};

export default nextConfig;
