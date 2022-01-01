import React from "react"
import setupTags from "../utils/setupTags.js"
import { Link } from "gatsby"
import slugify from "slugify"

function TagsList({ recipes }) {
  // console.log(recipes)
  const newTags = setupTags(recipes)
  // console.log(newTags)
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {/* here 'tag' is an array ex) ["beef", 2] */}
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
