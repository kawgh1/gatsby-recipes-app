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
    // You can have multiple instances of this gatsby-source-filesystem plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // THIS IS USED FOR GRAPHQL QUERIES
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    // HERE we are setting a path to our images on the server
    // This allows us to pull our images using GraphQL queries
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
