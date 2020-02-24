const pages = [
  { name: `Hátíðin`, slug: `/hatidin` },
  { name: `Heimildamyndir`, slug: `/heimildamyndir` },
  { name: `Sarpur`, slug: `/sarpur` },
  { name: `Dagskrá`, slug: `/dagskra` },
]
const dropdownPages = [
  { name: `Skjaldborgarhátíðin`, slug: `/hatidin` },
  { name: `Skjaldborgarbíó`, slug: `/bio` },
  { name: `Gisting/Ferðalag`, slug: `/gisting-ferdalag` },
]
const metadata = {
  title: `Skjaldborg`,
  subtitle: `Hátíð íslenskra heimildamynda`,
  year: 2020,
  period: `28.-31. maí`,
  location: `Patreksfjörður`,
  pages: pages,
  dropdownpages: dropdownPages,
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
