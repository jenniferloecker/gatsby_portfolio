import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Post from "./post"

const About = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            about
          }
        }
      }
    `
  )
  const queryResult = site.siteMetadata.about
  return (
    <Post title="About me">
      <p>{queryResult}</p>
    </Post>
  )
}
export default About
