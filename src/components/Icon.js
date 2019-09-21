import React from "react"

import githubIcon from "../images/github.svg"
import twitterIcon from "../images/twitter.svg"
import linkedInIcon from "../images/linkedin.svg"

const iconFromName = name => {
  switch (name) {
    case "github":
      return githubIcon
    case "linkedin":
      return linkedInIcon
    case "twitter":
      return twitterIcon
    default:
      return null
  }
}

const Icon = ({ name, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="p-2">
    <img
      width="24"
      className="bg-gray-600"
      src={iconFromName(name)}
      alt={name}
    />
  </a>
)

export default Icon
