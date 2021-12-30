import React from "react"
import { Link } from "gatsby"
// layout
import Layout from "../components/Layout"
// CSS module example, not used
// import { page, text } from "../examples/home.module.css"
// Styled components example, not used
// import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <h1>Home page!</h1>
      {/* Link components are only for internal page routing, 
      not for links to outside sites */}
      <div>
        <Link to="about"> about</Link>
      </div>

      <a href="/about">regular anchor link</a>
    </Layout>
  )
}
