import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I'm Shanti, 36 years old living in beautyful Berlin. I travel with my
        two dogs Wanja and Lucy through Europe and love to met inspiring People.
      </p>
      <p>
        Want to work with me?
        <Link to="/contact">Reach Out!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
