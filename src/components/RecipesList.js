import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// props = {recipes = []}
// means take recipes, if recipes not available, then use empty array[]

function RecipesList({ recipes = [] }) {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        {
          /* const { id, title, image, prepTime, cookTime } = recipe */
        }
        const pathToImage = getImage(recipe.image)
        return (
          <Link to={`/${recipe.title}`} className="recipe" key={recipe.id}>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                color: "#554ed9",
              }}
            >
              {recipe.title}
            </p>
            <GatsbyImage
              //   image={recipe.image.gatsbyImageData}
              image={pathToImage}
              className="recipe-img"
              alt={recipe.title}
            />
            <p>
              Prep: &nbsp;{recipe.prepTime} min &nbsp; | &nbsp; Cook: &nbsp;
              {recipe.cookTime} min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
