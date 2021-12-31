import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

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
          return (
            <Link to={`/${text}`} key={index}>
              {text}&nbsp;({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
