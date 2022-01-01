import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

function Error() {
  return (
    <Layout>
      <Seo title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h2>Page Not Found.</h2>
          <h3>Sorry! We couldn't find what you were looking for!</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
