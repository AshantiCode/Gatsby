const path = require("path")

//this function runs when a new node is created! from gatsby website
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }

  module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`src/templates/blog.js`)

    const res = await graphql(`
      query {
        allMarkdiwnRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  }
}

// console.log(JSON.stringify(node, undefined, 4)) das hat uns die nodes im terminal gezeigt
// console.log("@@@@@@@@@@@@@@@", slug)  das hat uns die created nodes mit der schonen Endung gatsby/react gezeigt
