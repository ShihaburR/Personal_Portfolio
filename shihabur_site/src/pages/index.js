import React from "react"
import Link from "gatsby-link"

export default () => <div style={{color: 'green', backgroundColor: 'orange'}}>
  <h1>Hello world! Names Shabz</h1>
  <p>CS Student</p>
  <Link to="/projects/">See my projects</Link>
  <br />
  <Link to="/counter/">Counter</Link>
</div>
