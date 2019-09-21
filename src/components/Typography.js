import React from "react"

export const H1 = ({ children, additionalClassnames = "" }) => (
  <h1 className={`text-lg ${additionalClassnames}`}>{children}</h1>
)

export const H2 = ({ children, additionalClassnames = "" }) => (
  <h2
    className={`text-sm font-semibold text-gray-500 leading-loose tracking-wide uppercase ${additionalClassnames}`}
  >
    {children}
  </h2>
)

export const H3 = ({ children, additionalClassnames = "" }) => (
  <h3
    className={`text-lg font-semibold mb-2 inline-block ${additionalClassnames}`}
  >
    {children}
  </h3>
)

export const Strong = ({ children, additionalClassnames = "" }) => (
  <span className={`font-bold ${additionalClassnames}`}>{children}</span>
)
