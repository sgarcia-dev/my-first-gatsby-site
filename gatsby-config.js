module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site V3",
    description: "This is an auto-generated description",
  },
  plugins: [
    "gatsby-plugin-schema-export",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
  ],
};