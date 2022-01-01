import React from "react"
// import { Link } from "gatsby"
// layout
import Layout from "../components/Layout"
// CSS module example, not used
// import { page, text } from "../examples/home.module.css"
// Styled components example, not used
// import { ExampleButton } from "../examples/button"
// Image Optimization Example
// import Images from "../examples/Images"
import { StaticImage } from "gatsby-plugin-image"
// GraphQL example
// import FetchData2 from "../examples/fetchData2"
// Gallery Example
// import Gallery from "../examples/gallery"
// All Recipes Component
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        {/* Gallery Example */}
        {/* <Gallery /> */}
        {/* <FetchData2 /> */}
        <AllRecipes />
      </main>

      {/* Just an example */}
      {/* <Images /> */}
    </Layout>
  )
}
