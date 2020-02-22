const pages = [
  { name: `Heim`, slug: `/` },
  { name: `Heimildamyndir`, slug: `/heimildamyndir` },
  { name: `Umsókn`, slug: `/umsokn` },
  { name: `Hátíðin`, slug: `/hatidin` },
]
const metadata = {
  title: `Skjaldborg`,
  subtitle: `Hátíð íslenskra heimildamynda`,
  year: 2020,
  period: `28.-31. maí`,
  location: `Patreksfjörður`,
  pages: pages,
}

module.exports = {
  siteMetadata: metadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2160,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
  ],
}
