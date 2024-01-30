import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = props => {
  const siteTitle = "About Us"

  return (
    <Layout title={siteTitle}>
      <Seo title={siteTitle} />
      <h1>About us page</h1>
      <p>This is the about us page</p>
    </Layout>
  )
}

export default About
