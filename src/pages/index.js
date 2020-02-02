import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Counter, { Value } from "../components/counter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Value />
    <div style={{ height: "2000px", background: "rgba(0, 0, 0, 0.1)" }}>
      <p style={{ position: "sticky", top: 0 }}>huge div to add scrollbar</p>
    </div>
    <Counter />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
