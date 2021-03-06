# Gastby Recipes App

#### Live site: https://gatsby-recipe-app.netlify.app/

## Continuous Deployment Issue with Github

- There is some kind of bug when doing Continuous Deployment with Github

      7:58:14 PM: error Generating JavaScript bundles failed
      7:58:14 PM: Can't resolve '../utils/setupTags.js' in '/opt/build/repo/src/components'
      7:58:14 PM: If you're trying to use a package make sure that '../utils/setupTags.js' is installed. If you're trying to use a local file make sure that the path is correct.
      7:58:14 PM: error Generating JavaScript bundles failed
      7:58:14 PM: Can't resolve '../utils/setupTags.js' in '/opt/build/repo/src/pages'
      7:58:14 PM: If you're trying to use a package make sure that '../utils/setupTags.js' is installed. If you're trying to use a local file make sure that the path is correct.

- I did not care enough to troubleshoot and just deployed directly with drag-and-drop of the public folder after a `gatsby clean` and `gatsby build`
- generates a public folder in the local computer environment, upload that directly to Netlify

### General Notes

- Based off course https://www.udemy.com/course/gatsby-tutorial-and-projects-course/
- Repo - https://github.com/john-smilga/gatsby-v3-tutorial-recipes

### Gatsby Setup

- First make sure Gatsby-CLI is installed
  - **npm install -g gatsby-cli**
- Then build new project
  - **gatsby new tutorial https://github.com/gatsbyjs/gatsby-starter-hello-world**
    - Gatsby provides a number of already configured beautiful starter templates which is where this very basic Hello World was taken from
      - https://www.gatsbyjs.com/starters/
- To spin up in the browser at **localhost:8000** enter:
  - **gatsby develop**

# Looking at the basic File Structure

- **.cache** - this is the gatsby cache - no reason to mess with this
- **node_modules** - no reason to mess with this
- **public** - same as always
- **src** - same as always
- **static** - here we can put resources that will be publicly available - however, do **NOT** dump all your image files here and think you are done. Files from this static folder are not optimized and receive no Gatsby magic when referenced directly from this folder alone without further code configurations

# Useful Commands (scripts from package.json)

- **gatsby build**
- **gatsby serve** - takes the build and gives you a production version of the app on **localhost:9000**
- **gatsby clean** - Very useful when working with images and other resources, sometimes too many code changes on the same asset can cause glitches with Gatsby optimizations - this command clears the .cache, public folders and regenerates them fresh
  - If you get an bizarre error and not sure what it is, run **gatsby clean** first

# Gatsby Plugins

- https://www.gatsbyjs.com/plugins
- **Styled Components**

  - https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/?=styled
  - Install

    npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components

# Normalize.css

- #### This is a React thing, not a Gatsby plugin

- #### What does it do?

  - #### Similar to doing the "border-box" and "margin:0" on the global styles, but corrects for a lot more and adjusts for browser compatibility etc.

    - Preserves useful defaults, unlike many CSS resets.
    - Normalizes styles for a wide range of elements.
    - Corrects bugs and common browser inconsistencies.
    - Improves usability with subtle modifications.
    - Explains what code does using detailed comments.
    - **npm install normalize.css**
    - https://www.npmjs.com/package/normalize.css
    - in `src/components/Layout.js`
      - just `import 'normalize.css'`

# HTML & CSS setup / design for this project

- https://www.youtube.com/watch?v=m3LbCAL9JUI

# Cool Tricks

- ### Footer
  - Instead of hard coding the year make it a Javascipt date object
    - &copy; {new Date().getFullYear()}
    - This will always display the current year so dont have old copyright dates
- ### Lorem Ipsum

  - Easy Lorem Ipsum tool allows to specify number of paragraphs with english words
  - https://hipsum.co/

- ### Icons

  - React Icons
  - https://react-icons.github.io/react-icons/
  - **npm install react-icons --save**

- ### Free Images
- pexels.com

# Gatsby Goodies

- Here is a list of Gatsby goodies that Gatsby does behind the scenes

- ### activeClassName

  - allows easy styling of Navbar link when page is currently on that link
    - activeClassName="active-link"

- ### Responsive Image Optimizations
  - ### gatsby-image-plugin
    - #### can't use StaticImage with dynamic data (data being iterated over from a query)
    - #### to display images from dynamic (iterated) data, must use GatsbyImage and gatsby-image-plugin
    - https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
    - https://www.udemy.com/course/gatsby-tutorial-and-projects-course/learn/lecture/25538934#notes
      - Gatsby builds true-to-size image placeholders and generates a flat image placeholder until each image loads - this way the screen is not jumping around while images load
      - Gatsby also generates multiple sizes of every image and provides them to the browser to pick the best one for that browser on that screen size
      - Gatsby also generates the image attributes for SEO <picture> <srcset> <source>
    - All of this is automatic with the **Gatsby Image Plugin**
    - https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    - **npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp**
    - **Configuration Docs**
      - https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/

# Gatsby & GraphQL

- ## Gatsby - GraphQL Data Flow \\\/

  - **DATA** - (APIs, Headless CMS, JSON, Markdown, SiteMetaData)
  - **GRAPHQL**
  - **GraphiQL Browser Dashboard** - for testing queries
  - **`<StaticQuery>` and `<PageQuery>`**
    - Static Queries are for regular components
    - Gatsby also allows the `useStaticQuery` Hook
    - Page queries can only be used on Page components and can accept variables
  - **REACT COMPONENTS** - Page, Title, Heading

- ## SiteMetaData

  - add Site meta data in gatsby-config.js to pull from anywhere in the app - useful for SEO

    File: gatsby-config.js

        siteMetadata: {
              title: 'Simply Recipes',
              description: 'Nice and clean recipes site',
              author: 'John Doe'
        }

  - https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/

# Gatsby Plugins

- ### gatsby-source-filesystem

  - A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

  - The plugin creates File nodes from files. The various ???transformer??? plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.
  - **npm install gatsby-source-filesystem**
  - https://www.gatsbyjs.com/plugins/gatsby-source-filesystem
  - ## The point of this plugin is it allows you to access files you specify within your GraphQL queries

    File: gatsby-config.js

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

    File: index.js - generic GraphQL query

          query MyQuery {
              allFile {
                  totalCount
                  nodes {
                      relativePath
                      name
                      size
                  }
                }
            }

    - This returns all the files specified in gatsby-config.js and their relative path

                {
                    "data": {
                        "allFile": {
                            "totalCount": 16,
                            "nodes": [
                                {
                                    "relativePath": "404.js",
                                    "name": "404",
                                    "size": 389
                                },
                                {
                                    "relativePath": "about.js",
                                    "name": "about",
                                    "size": 1245
                                },
                                {
                                    "relativePath": "contact.js",
                                    "name": "contact",
                                    "size": 1778
                                },
                                {
                                    "relativePath": "recipes.js",
                                    "name": "recipes",
                                    "size": 207
                                },
                                ...
                                ...
                                ...
                                {
                                    "relativePath": "recipes/recipe-4.jpeg",
                                    "name": "recipe-4",
                                    "size": 67947
                                },
                                {
                                    "relativePath": "recipes/recipe-2.jpg",
                                    "name": "recipe-2",
                                    "size": 370246
                                },
                                {
                                    "relativePath": "big copy.jpg",
                                    "name": "big copy",
                                    "size": 2528235
                                },

- ### gatsby-source-contentful

  - Allows us to connect our Gatsby app to the Contentful Headless CMS setup on https://contentful.com
  - https://www.gatsbyjs.com/plugins/gatsby-source-contentful/?=contentful
  - **npm install gatsby-source-contentful**
  - #### One of the key reasons we chose Contenful Plugin for this project is their plugin allows access to the gatsbyImageData property in GraphQL. Some CMS plugins do not and thus make it very difficult to work with Gatsby images, such that it may be necessary to build your own plugin.
  - Using Delivery API

          // In your gatsby-config.js
          module.exports = {
            plugins: [
              {
                resolve: `gatsby-source-contentful`,
                options: {
                  spaceId: `your_space_id`,
                  // Learn about environment variables: https://gatsby.dev/env-vars
                  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                },
              },
            ],
          }

- ### gatsby-plugin-webfonts
  - **This plugin allows us to PRE-LOAD our font styles**
    - Using Google fonts or other the traditional way, either by import or meta stylesheet link, applies the font **after** the page has loaded
  - https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/?=webfonts
  - **npm install gastby-plugin-webfonts**
  - ### NOTE
    - Gatsby web font plugins get depreciated very often
    - Good news is the setup for all of them is basically the same, so if depreciated just find a new one and it will work the same

# HEADLESS CMS

- Different Options
  - https://jamstack.org/headless-cms/
- ### Headless CMS for this Project

  - https://contentful.com
  - **npm install contentful**

- # NOTE ON TAGS

  - The Tags are not their own property
  - The tags are an array found in each recipe object
  - Since recipes is an array itself, accessing the tags means accessing an array within an object within an array
  - This functionality was implemented in the `utils/setUpTags.js` file

          const setupTags = recipes => {
          const allTags = {}

          recipes.forEach(recipe => {
            recipe.content.tags.forEach(tag => {
              if (allTags[tag]) {
                allTags[tag] = allTags[tag] + 1
              } else {
                allTags[tag] = 1
              }
            })
          })

          const newTags = Object.entries(allTags).sort((a, b) => {
            const [firstTag] = a
            const [secondTag] = b
            return firstTag.localeCompare(secondTag)
          })


          return newTags
        }

        export default setupTags

# Creating Pages Programmatically

- ### Slugify
- **npm install slugify**
- https://www.npmjs.com/package/slugify

- ## There are TWO ways to set up auto-generated pages with Gatsby

  - ## File System Route API - generally easier
    - This project uses File System Route API to generate the Recipe URLS
    - ex.) http://localhost:8000/banana-pancakes
  - ## Gastby-Node.js - more complex, but more flexible
    - This project uses gatsby-node.js config to generate Tag URLs
    - ex.) http://localhost:8000/tags/breakfast

- ### File System Route API
- https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
- Allows us to generate Template pages from our `src` folder using GraphQL queries
- Field syntax
  Dot notation

        Using . you signify that you want to access a field on a node of a type.

        src/pages/products/{Product.name}.js generates the following query:

        allProduct {
          nodes {
            id # Gatsby always queries for id
            name
          }
        }

- ### Gatsby-Node.js API
- https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
- Intro

      - Gatsby gives plugins and site builders many APIs for building your site. Code in the file gatsby-node.js is run once in the process of building your site. You can use its APIs to create pages dynamically, add data into GraphQL, or respond to events during the build lifecycle. To use the Gatsby Node APIs, create a file named gatsby-node.js in the root of your site. Export any of the APIs you wish to use in this file.

      - Every Gatsby Node API gets passed a set of helper functions. These let you access several methods like reporting, or perform actions like creating new pages.

      - An example gatsby-node.js file that implements two APIs, onPostBuild, and createPages.


        gatsby-node.js

              const path = require(`path`)
              // Log out information after a build is done
              exports.onPostBuild = ({ reporter }) => {
                reporter.info(`Your Gatsby site has been built!`)
              }
              // Create blog pages dynamically
              exports.createPages = async ({ graphql, actions }) => {
                const { createPage } = actions
                const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
                const result = await graphql(`
                  query {
                    allSamplePages {
                      edges {
                        node {
                          slug
                          title
                        }
                      }
                    }
                  }
                `)
                result.data.allSamplePages.edges.forEach(edge => {
                  createPage({
                    path: `${edge.node.slug}`,
                    component: blogPostTemplate,
                    context: {
                      title: edge.node.title,
                    },
                  })
                })
              }

# CONTACT FORM

- I opted not to make a functional Contact Form as this is just a demo site
- https://formspree.io/
- formspree.io is one easy to set up form submission site

# CUSTOM FAVICON

- Left Favicon alone, default Gatsby one
- favicon.ico is located in the static folder
- Favicon Generator
  - favicon.io

# SEO

- gatsby-plugin-react-helmet
- **npm install gatsby-plugin-react-helmet react-helmet**
- https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react
- How to use

  Just add the plugin to the plugins array in your gatsby-config.js

  plugins: [`gatsby-plugin-react-helmet`]

# Things I Added

- Custom text shadow on hero image
  - text-shadow: 0 5px 9px #c4b59d, 0 0px 1px #fff;
- Image box shadow and border
  - box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  - border: 1px solid #ccc;
- general styling

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## ???? Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site???s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## ???? Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-hello-world)

## ???? What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ????????? node_modules
    ????????? src
    ????????? .gitignore
    ????????? .prettierrc
    ????????? gatsby-browser.js
    ????????? gatsby-config.js
    ????????? gatsby-node.js
    ????????? gatsby-ssr.js
    ????????? LICENSE
    ????????? package-lock.json
    ????????? package.json
    ????????? README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for ???source code???.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you???d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won???t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project???s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## ???? Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## ???? Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
