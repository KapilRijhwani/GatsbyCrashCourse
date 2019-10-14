import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Investology</h1>
    <p>
      This is sample investment site where you will learn how to become rich in
      1 week.
    </p>
  </Layout>
)

export default IndexPage
