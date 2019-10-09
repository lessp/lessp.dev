import React from "react"

import { H3 } from "./Typography"

const Library = ({ name, description, npm = true }) => (
  <div className="mb-5">
    <a
      href={`https://github.com/lessp/${name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black"
    >
      <H3>{name}</H3>
    </a>
    <p>{description}</p>
    {npm && (
      <div className="flex items-center mt-3">
        <a
          href={`https://npm.im/${name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mr-2"
            alt={`npm downloads badge for ${name}`}
            src={`https://img.shields.io/npm/dt/${name}?style=flat-square`}
          />
        </a>
        <a
          href={`https://npm.im/${name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={`npm version badge for ${name}`}
            src={`https://img.shields.io/npm/v/${name}?style=flat-square`}
          />
        </a>
      </div>
    )}
  </div>
)

export default Library
