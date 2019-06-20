import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>Who am I?</h1>
    <p>Born and raised in the City of London, I grew up surrounded by technology and was facisnated by many aspects of it e.g.
    how can technology analyse and collect information, How smartphones use AI to detect objects instantly and what can technology
    further develop in the near future - such as augmented reality, AI etc</p>

    <p> These aspects play such a huge role in our lives and to me I decided that in order for me to be to help others is to develop
    my skills in something I can enjoy - Software Engineering. As a software engineer I want to: </p>
    <ol>
    <li> Work on projects for companies to grow (CRM systems, efficient databases, work on their OS & Networks
     - creating strong platforms for communication/management and application development).</li>
    <li> Tackle problems within the IT industry such as optimising the public sector through software and improve Healthcare systems and General Security.</li>
    <li> Lastly be able to innovate something new that could change the IT industry as a whole - Machine Learning Apps, Concepts of Big Data (new ways to collect/organise data) and Robotics</li>
    </ol>
    <p> Aside from going crazy about technology, I am avid on enjoying myself through many things e.g.  going out - watching films, visiting family, eating a lot of food,
    I also enjoy playing video games, taking apart my PC ever so often just for the fun of it, catching up on the latest shows and trying to stay healthy through exercise,
    I also enjoy helping out when I can - be it to do with computers or a personal matter. </p>

    <Link to="/"> Return Home</Link>
  </Layout>
)

export default AboutPage
