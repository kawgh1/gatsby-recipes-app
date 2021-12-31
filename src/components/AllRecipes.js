import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
// gatsby graphql
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        contentArray {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

function AllRecipes() {
  const data = useStaticQuery(query)
  // console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
