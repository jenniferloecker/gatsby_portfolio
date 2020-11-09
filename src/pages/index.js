import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"
import About from "../components/about"

const IndexPage = () => {
  return (
    <>
      <SEO title="Jennifer Loecker" />
      <Default></Default>
      <About></About>
    </>
  )
}

export default IndexPage
