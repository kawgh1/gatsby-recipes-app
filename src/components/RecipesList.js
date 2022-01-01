import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

// props = {recipes = []}
// means take recipes, if recipes not available, then use empty array[]

function RecipesList({ recipes = [] }) {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        //  const { id, title, image, prepTime, cookTime } = recipe

        const pathToImage = getImage(recipe.image)
        // slugify - this takes the title, lowercases it and adds hyphens '-' between words
        // we can then use this in are auto-generated recipe URLs
        // Ex) "Banana Pancakes" => "banana-pancakes" => localhost:8000/recipes/banana-pancakes
        const slug = slugify(recipe.title, { lower: true })
        return (
          <Link to={`/${slug}`} className="recipe" key={recipe.id}>
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
