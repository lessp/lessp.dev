import "../styles/index.css"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Icon from "./Icon"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container mx-auto py-20 max-w-3xl">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="flex justify-center">
          <Icon name="github" link="https://github.com/lessp" />
          <Icon
            name="linkedin"
            link="https://www.linkedin.com/in/tom-ekander-737a0815a/"
          />
          <Icon name="twitter" link="https://twitter.com/ekander_" />
        </footer>
      </div>
    </div>
  )
}

export default Layout
