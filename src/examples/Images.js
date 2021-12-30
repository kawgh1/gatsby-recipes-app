import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default </h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
          //   width not normally used on constrained, but shows example of better with resizing
          // with layout="constrained", once the image reaches full size within its container, it stops stretching unlike layout="fullWidth"
          width={300}
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 100px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`

export default Images
