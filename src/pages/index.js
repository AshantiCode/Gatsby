import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello Amir,</h1>
      <h2>
        I am Shanti, a full-stack developer living in Berlin. Hahahah. Enjoy
        your eveneing! always nice hearing from you :)
      </h2>

      <p>
        Need a developer?<Link to="/contact">Contact Me</Link>
      </p>
    </div>
  )
}

export default IndexPage
