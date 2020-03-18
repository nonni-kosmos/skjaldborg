export const errorMsg = "Required"

export const generateImageLocation = movieTitle => {
  return movieTitle.toLowerCase().replace(/ /g, "-")
}

export const uploadLimit = 5 * 1000000 // 5MB

export const formSchema = {
  adstandendur: [
    {
      name: "framleidslufyrirtaeki",
      placeholder: {
        is: "Framleiðslufyrirtæki",
        en: "Production Company",
      },
      type: "text",
      required: false,
      wip: false,
    },
    {
      name: "framleidandi",
      placeholder: {
        is: "Framleiðandi",
        en: "Producer",
      },
      type: "text",
      required: true,
      wip: true,
    },
    {
      name: "leikstjori",
      placeholder: {
        is: "Leikstjóri",
        en: "Director",
      },
      type: "text",
      required: true,
      wip: true,
    },
    {
      name: "klipping",
      placeholder: {
        is: "Klipping",
        en: "Editing",
      },
      type: "text",
      required: true,
      wip: false,
    },
    {
      name: "kvikmyndataka",
      placeholder: {
        is: "Kvikmyndataka",
        en: "Cinematography",
      },
      type: "text",
      required: true,
      wip: false,
    },
    {
      name: "tonskald",
      placeholder: {
        is: "Tónskáld",
        en: "Composer",
      },
      type: "text",
      required: true,
      wip: false,
    },
    {
      name: "hljodhonnun",
      placeholder: {
        is: "Hljóðhönnun",
        en: "Sound Design",
      },
      type: "text",
      required: true,
      wip: false,
    },

    {
      name: "adrir",
      placeholder: {
        is: "Aðrir aðstandendur",
        en: "Other participants",
      },
      type: "text",
      required: false,
      wip: true,
    },
  ],
  verk: {
    text: [
      {
        name: "titill",
        placeholder: {
          is: "Titill",
          en: "Title",
        },
        type: "text",
        required: true,
        wip: true,
      },
      {
        name: "lengd",
        placeholder: {
          is: "Lengd í mínútum",
          en: "Duration in minutes",
        },
        type: "number",
        required: true,
        wip: false,
      },
    ],
    textArea: [
      {
        name: "stuttLysing",
        placeholder: {
          is: "Stutt lýsing",
          en: "Synopsins",
        },
        cols: "30",
        rows: "10",
        required: true,
        wip: true,
        hint: {
          is:
            "Þessi texti verður birtur í dagskrá Skjaldborgar ef verk er valið til sýningar.",
          en:
            "The synopsis will be published in the Skjaldborg program if selected.",
        },
      },
      {
        name: "athugasemdir",
        placeholder: {
          is: "Athugasemdir",
          en: "Comments",
        },
        cols: "30",
        rows: "5",
        required: false,
        wip: true,
        hint: {
          is:
            "Hér má útskýra á hvaða stigi verkefnið er, ss. ef á eftir að litaleiðrétta og klára tónlist",
          en:
            "Notes on the process i.e. if final grade and sound is yet to be carried out.",
        },
      },
    ],
    hlekkir: [
      {
        name: "hlekkurStikla",
        placeholder: {
          is: "Stikla",
          en: "Trailer",
        },
        type: "url",
        required: true,
        wip: true,
      },
      {
        name: "hlekkurKvikmynd",
        placeholder: {
          is: "Kvikmynd",
          en: "Film",
        },
        type: "url",
        required: false,
        wip: false,
      },
      {
        name: "kvikmyndLykilord",
        placeholder: {
          is: "Lykilorð",
          en: "Password",
        },
        type: "text",
        required: false,
        wip: false,
        hint: {
          is: "Ef hlekkur að kvikmynd er varin með lykilorði",
          en: "If link to movie is password protected",
        },
      },
    ],
  },
}
