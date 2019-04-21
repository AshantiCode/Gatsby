import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About the Blog</h1>
      <p>
        I had the Idea to interview every person who fell in love with Wanja. So
        as long they are pettin g them, i will ask them questions about their
        life.{" "}
      </p>
      <h1>About Me</h1>
      <p>
        I'm Shanti, 36 years old living in beautyful Berlin. I travel with my
        two dogs Wanja and Lucy through Europe and love to met inspiring People.
      </p>
      <p>
        Want to work with me?
        <Link to="/contact">Reach Out!</Link>
      </p>
    </div>
  )
}

export default AboutPage
