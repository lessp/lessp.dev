import { Link } from "gatsby"
import React from "react"

import Avatar from "./Avatar"

const Header = () => (
  <header className="flex justify-center items-center mb-8 md:mb-12">
    <Link to="/">
      <Avatar />
    </Link>
  </header>
)

export default Header
