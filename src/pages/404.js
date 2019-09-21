import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { H1 } from "../components/Typography"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1 additionalClassnames="text-4xl mb-4">Not found</H1>
    <p className="mb-8">
      Yeah, sorry. There's only the{" "}
      <span className="underline font-semibold">
        <Link to="/">splash-page</Link>
      </span>
      .{" "}
    </p>
  </Layout>
)

export default NotFoundPage
