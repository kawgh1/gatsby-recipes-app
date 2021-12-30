import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// can't use StaticImage with dynamic data (data being iterated over from a query)
// to display images  from dynamic (iterated) data, must use GatsbyImage and gatsby-image-plugin

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`

function Gallery() {
  return (
    <main className="page">
      <h2>simple image Gallery</h2>
    </main>
  )
}

export default Gallery
