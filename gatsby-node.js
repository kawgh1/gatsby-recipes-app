const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulRecipe {
        nodes {
          contentArray {
            tags
          }
        }
      }
    }
  `)

  console.log("#########")
  console.log(result)
  console.log("#########")

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.contentArray.tags.forEach(tag => {
      // we use slugify here in case a multi word tag is used
      // "Pork Ribs" => "pork-ribs" => localhost:8000/tags/pork-rubs
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
