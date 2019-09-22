import React from "react"

import Layout from "../components/Layout"
import Section from "../components/Section"
import Library from "../components/Library"
import { H1, Strong } from "../components/Typography"
import SEO from "../components/SEO"

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
      <Library
        name="react-is-visible"
        description="A small library for React to know if an element is on
screen or not."
      />
      <Library
        name="bs-react-is-visible"
        description="A small library for ReasonReact to know if an element is on
screen or not."
      />
    </Section>
  </Layout>
)

export default IndexPage
