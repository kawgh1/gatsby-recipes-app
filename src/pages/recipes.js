import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
function Recipes() {
  return (
    <Layout>
      <main className="page">
        <h2>welcome to Recipes page</h2>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
