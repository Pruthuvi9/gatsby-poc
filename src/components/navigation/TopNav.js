import { Link } from "gatsby"
import React from "react"

import "./TopNav.css"

const TopNav = () => {
  return (
    <div className="nav-link__container">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/">
        Blog
      </Link>
      <Link className="nav-link" to="/">
        PBS
      </Link>
      <Link className="nav-link" to="/">
        Debt
      </Link>
    </div>
  )
}

export default TopNav
