/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "John Doe",
    person: { name: "john", age: 27 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "john", age: 27 },
      { name: "susan", age: 28 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    // next three are for gatsby image optimization
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
