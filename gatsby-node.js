const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

// gatsby-node.js
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/umsokn/)) {
    page.matchPath = "/umsokn/*"
    createPage(page)
  }
  if (page.path.match(/^\/hatidin/)) {
    page.matchPath = "/hatidin/*"
    createPage(page)
  }
}

// env variable fix
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

/*** create heimildamyndir pages */
// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const template = path.resolve(`src/templates/heimildamynd/index.js`)
//   const result = await graphql(`
//     {
//       heimildamyndir: allMovie(filter: { accepted: { eq: true } }) {
//         nodes {
//           id
//           title
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query!`)
//     return
//   }
//   result.data.heimildamyndir.nodes.forEach(heimildamynd => {
//     createPage({
//       path: "/heimildamyndir/" + slugify(heimildamynd.title),
//       component: template,
//       context: {
//         id: heimildamynd.id,
//         name: heimildamynd.title,
//       },
//     })
//   })
// }
