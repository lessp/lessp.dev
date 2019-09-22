import React from "react"

import { H2 } from "./Typography"

const Section = ({ title, children }) => (
  <section className="flex flex-col items-center mb-8 px-8 md:px-0 md:flex-row md:items-start">
    <H2 additionalClassnames="w-full text-left md:w-1/5 md:mr-8 md:text-right">
      {title}
    </H2>
    <div className="md:w-4/5">{children}</div>
  </section>
)

export default Section
