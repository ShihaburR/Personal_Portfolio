import React from "react"
import { Link } from "gatsby"
import Jumbotron from 'react-bootstrap/Jumbotron'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/projects/">Check out my Projects</Link>
    <Jumbotron fluid>
    <container>
      <h1>Hi, Welcome to my Website</h1>
        <p>Student at City University London</p>
        <p>BSc Computer Science</p>
        <p>Enthusisatic Learner, Achiever and Team-Player</p>
        <p> Java | HTML | CSS | Visual Basic | Python | Bootstrap </p>
        <p>My Github</p>
        <p>My Linkedin</p>
        <p></p>
    </container>
  </Jumbotron>
  </Layout>
)

export default IndexPage
