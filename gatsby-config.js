const pages = [
  { name: `Hátíðin`, slug: `/hatidin` },
  // { name: `Heimildamyndir`, slug: `/heimildamyndir` },
  // { name: `Dagskrá`, slug: `/dagskra` },
  { name: `Sarpur`, slug: `/sarpur` },
  { name: `Umsókn`, slug: `/umsokn` },
]
const dropdownPages = [
  { name: `Skjaldborgarhátíðin`, slug: `/hatidin` },
  { name: `Skjaldborgarbíó`, slug: `/hatidin/bio` },
  { name: `Gisting/Ferðalag`, slug: `/hatidin/gisting-ferdalag` },
]
const metadata = {
  title: `Skjaldborg`,
  subtitle: `Hátíð íslenskra heimildamynda`,
  url: `https://skjaldborg.is/`,
  favicon: `/assets/favicon.png`,
  logo: `/assets/logo_colored.png`,
  year: 2020,
  period: `29. maí - 1. júní`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/hatidin-undirsidur`,
      },
    },
    {
      resolve: `gatsby-source-firestore`,
      options: {
        credential: require("./skjaldborg-9c060-firebase-adminsdk-a0qf5-b570a59c08.json"),
        types: [
          {
            type: "Movie",
            collection: "movies",
            map: doc => ({
              title: doc.title,
              accepted: doc.accepted,
              description: doc.description,
              director: doc.director,
              imageLocation: doc.imageLocation,
              duration: doc.duration,
              applicantId: doc.applicantId,
              applicantName: doc.applicantName,
              createdAt: doc.createdAt,
            }),
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
