// hier drinnen kreieren wir dynamische Pages. so dass die Links der BlogPost
// Liste alle funktionieren und inhalte bekommen

const path = require("path")

//this function runs when a new node is created! from gatsby website. Brauchen wir aber
// nur wenn wir markdow verwenden. Sobald wir Inhalte aus Contentful holen, brauchen wir
//  onCreateNode nicht mehr
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

//this rund when user clicks on blog and the site for it is then created.
// Für Contentful haben wir diese Module unten  etwas angepasst. das Original ist nur
// noch im kurs von Andrew zu finden

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

// console.log(JSON.stringify(node, undefined, 4)) das hat uns die nodes im terminal gezeigt
// console.log("@@@@@@@@@@@@@@@", slug)  das hat uns die created nodes mit der schonen Endung gatsby/react gezeigt
