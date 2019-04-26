const path = require("path")

//this function runs when a new node is created!
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
}

// console.log(JSON.stringify(node, undefined, 4)) das hat uns die nodes im terminal gezeigt
// console.log("@@@@@@@@@@@@@@@", slug)  das hat uns die created nodes mit der schonen Endung gatsby/react gezeigt
