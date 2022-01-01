import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// can't use StaticImage with dynamic data (data being iterated over from a query)
// to display images  from dynamic (iterated) data, must use GatsbyImage and gatsby-image-plugin
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { eq: "jpeg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

function Gallery() {
  const data = useStaticQuery(query)
  //   console.log(data)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        // console.log(image)

        const { name } = image
        // Gatsby getImage() function is a null-safe method for returning multiple objects
        // which may not all be image types,
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage
              //   image={image.childImageSharp.gatsbyImageData}
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .gallery-img {
    border-radius: 20px;
  }
`

export default Gallery
