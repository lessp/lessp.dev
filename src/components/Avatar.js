import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "tom.jpg" }) {
        childImageSharp {
          fixed(width: 148, height: 148) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      className="rounded-full"
      alt="Image of me wearing a Santa Claus-hat"
      objectFit="cover"
      objectPosition="0% 50%"
      fixed={data.file.childImageSharp.fixed}
    />
  )
}

export default Avatar
