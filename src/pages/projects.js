import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>What have I been doing?</h1>
    <p>Parts Picker</p>
    <p>CrystalStorm</p>
    <p>Rapid Fire</p>
    <Link to="/">Return Home</Link>
  </Layout>
)

export default ProjectsPage
