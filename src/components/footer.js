import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author} with{" "}
        <span role="img" aria-label="red heard">
          ❤️
        </span>{" "}
        © 2019
      </p>
    </footer>
  )
}

export default Footer
