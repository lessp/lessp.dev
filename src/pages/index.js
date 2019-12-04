import React from "react"

import Layout from "../components/Layout"
import Section from "../components/Section"
import Library from "../components/Library"
import { H1, Strong } from "../components/Typography"
import SEO from "../components/SEO"

const libraries = [
  {
    name: "react-is-visible",
    description:
      "A small library for React to know if an element is on screen or not.",
    npm: true,
  },
  {
    name: "bs-react-is-visible",
    description:
      "A small library for ReasonReact to know if an element is on screen or not.",
    npm: true,
  },
  {
    name: "reason-fetch",
    description: "Fetch libraries and interface for ReasonML.",
    npm: false,
  },
  {
    name: "revery-graphql-hooks",
    description: "A library for easy handling of GraphQL with hooks for Revery",
    npm: false,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Tom Ekander - lessp" />

    <Section title="Greetings">
      <H1 additionalClassnames="mb-0">
        I’m <Strong>Tom Ekander</Strong>, a developer and (mostly former)
        musician living in <Strong>Stockholm</Strong>, Sweden. 
        <br />
        <br />I like open-source and am currently a big fan of{" "}
        <Strong>ReasonML/OCaml</Strong>.
      </H1>
    </Section>

    <Section title="Open source">
      {libraries.map(({ name, description, npm: onNpm }) => (
        <Library key={name} name={name} description={description} npm={onNpm} />
      ))}
    </Section>
  </Layout>
)

export default IndexPage
