const pages = [
  { name: `Heim`, name_en: `Home`, slug: `/` },
  { name: `Hátíðin`, name_en: `The Festival`, slug: `/hatidin` },
  { name: `Umsókn`, name_en: `Application`, slug: `/umsokn` },
  // { name: `Heimildamyndir`, slug: `/heimildamyndir` },
  // { name: `Dagskrá`, slug: `/dagskra` },
  // { name: `Sarpur`, slug: `/sarpur` },
]
const dropdownPages = [
  {
    name: `Skjaldborgarhátíðin`,
    name_en: `Skaldborg Festival`,
    slug: `/hatidin`,
    image: `/assets/skjaldborg_byontkovic.jpg`,
  },
  {
    name: `Skjaldborgarbíó`,
    name_en: `Skjaldborg Cinema`,
    slug: `/bio`,
    image: `/assets/skjaldborg_092dscf5141_byontkovic.jpg`,
  },
  {
    name: `Ferðalagið / Gisting`,
    name_en: `How to get there / Accommodation`,
    slug: `/ferdalagid-gisting`,
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
  period: `14. ágúst - 17. ágúst`,
  location: `Patreksfjörður`,
  pages: pages,
  dropdownpages: dropdownPages,
  contact: {
    email: "skjaldborg@skjaldborg.is",
    tel: "+354 820 3646",
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
    `gatsby-plugin-polyfill-io`,
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
        name: `styrktaradilar_top5`,
        path: `${__dirname}/static/styrktaradilar_top5`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styrktaradilar_rest`,
        path: `${__dirname}/static/styrktaradilar_rest`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `adilar`,
        path: `${__dirname}/static/adilar`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Skjaldborg 2020`,
        short_name: `Skjaldborg`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#C34545`,
        display: `standalone`,
        icon: `static/assets/mobile-icon.png`,
        lang: `en`,
        description: metadata.subtitle,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
