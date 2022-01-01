import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
// Seo
import Seo from "../components/Seo"
function Recipes() {
  return (
    <Layout>
      <Seo title="Recipes" />
      <main className="page">
        <h2>welcome to Recipes page</h2>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
