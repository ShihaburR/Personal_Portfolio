import { Link } from "gatsby"
import React from "react"
import Logo from "../components/images/rlogo.png"

const Header = () => (
  <header
    style={{
      background: `PALETURQUOISE`,
      marginBottom: `1.5rem`,
    }}
  >
    <Link to="/">
      <img src={Logo} alt="Shihabur Rahman"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: `0.9rem`,
        }}
      ></img>
    </Link>
  </header>
)

export default Header
