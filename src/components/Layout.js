import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// main css
import "../assets/css/main.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
