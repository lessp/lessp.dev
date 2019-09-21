import React from "react"

import { H2 } from "./Typography"

const Section = ({ title, children }) => (
  <section className="flex items-start mb-8">
    <H2 additionalClassnames="w-1/5 mr-8 text-right">{title}</H2>
    <div className="w-4/5">{children}</div>
  </section>
)

export default Section
