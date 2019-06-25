import React from "react"
import { Link } from "gatsby"
import Jumbotron from 'react-bootstrap/Jumbotron'

import Layout from "../components/layout"
import Image from "../images/link2.png"
import Image2 from "../images/Github.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/projects/">Check out my Projects</Link>
    <br />
    <br />
    <Link to="/about/">Click here to Find out more about me</Link>
    <br />
    <br />
    <Jumbotron>
    <container>
      <h1>Hi, Welcome to my Website</h1>
        <p>Student at City University London</p>
        <p>BSc Computer Science</p>
        <p>Enthusisatic Learner, Achiever and Team-Player</p>
        <p> Java | HTML | CSS | Visual Basic | Python | Bootstrap </p>
        <p>Click below!</p>
        <a href="https://www.github.com/shihaburr"><img src={Image2} alt= "GitHub"></img></a>
        <a href="https://www.linkedin.com/in/shihaburr"><img src={Image} alt= "Linkedin"></img></a>
    </container>
  </Jumbotron>
  </Layout>
)

export default IndexPage
