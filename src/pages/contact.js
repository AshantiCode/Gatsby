import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>I would love to hear from you!</h1>

      <p>
        Twitter: Follow me on{" "}
        <a href="https://twitter.com/ashanticode" rel="noopener">
          Twitter
        </a>
      </p>
      <p>Email : wsw@gmail.com</p>
      <p>
        Instagram:{" "}
        <a href="https://instagram.com/good.girls24" rel="noopener">
          werstreicheltwanja
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
