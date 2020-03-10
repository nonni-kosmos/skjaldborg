const pages = [
  { name: `Heim`, slug: `/` },
  { name: `Hátíðin`, slug: `/hatidin` },
  // { name: `Heimildamyndir`, slug: `/heimildamyndir` },
  // { name: `Dagskrá`, slug: `/dagskra` },
  // { name: `Sarpur`, slug: `/sarpur` },
  { name: `Umsókn`, slug: `/umsokn` },
]
const dropdownPages = [
  {
    name: `Skjaldborgarhátíðin`,
    slug: `/hatidin`,
    image: `/assets/skjaldborg_byontkovic.jpg`,
  },
  {
    name: `Skjaldborgarbíó`,
    slug: `/bio`,
    image: `/assets/skjaldborg_092dscf5141_byontkovic.jpg`,
  },
  {
    name: `Gisting/Ferðalag`,
    slug: `/gisting-ferdalagid`,
    image: `/assets/skjaldborg_060dscf4118_byontkovic.jpg`,
  },
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
  contact: {
    people: [
      { name: "Tengiliður #1", tel: "1234-567" },
      { name: "Tengiliður #2", tel: "1234-567" },
    ],
    socialMedia: [
      {
        name: "facebook",
        url: "https://m.facebook.com/skjaldborg.hatid.islenskra.heimildamynda/",
      },
      {
        name: "instagram",
        url:
          "https://instagram.com/skjaldborg_heimildamyndahatid?igshid=zqeiffioceg2",
      },
    ],
  },
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
        name: `hatidin-undirstidur`,
        path: `${__dirname}/static/hatidin-undirsidur`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gisting`,
        path: `${__dirname}/static/gisting`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gisting`,
        path: `${__dirname}/static/styrktaradilar_top5`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/static/assets/svg`,
        },
      },
    },
    // {
    //   resolve: `gatsby-source-firestore`,
    //   options: {
    //     credential: require("./priv-key.json"),
    //     types: [
    //       {
    //         type: "Movie",
    //         collection: "movies",
    //         map: doc => ({
    //           title: doc.title,
    //           accepted: doc.accepted,
    //           description: doc.description,
    //           director: doc.director,
    //           imageLocation: doc.imageLocation,
    //           duration: doc.duration,
    //           applicantId: doc.applicantId,
    //           applicantName: doc.applicantName,
    //           createdAt: doc.createdAt,
    //         }),
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-transition-link`,
  ],
}
