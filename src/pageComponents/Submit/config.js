export const errorMsg = "Required"

export const generateImageLocation = movieTitle => {
  return movieTitle.toLowerCase().replace(/ /g, "-")
}

const MegaByte = 1000000
export const uploadLimit = {
  max: 5 * MegaByte, // 5MB
  min: MegaByte / 2, // 500KB
}

export const applicantFormSchema = {
  data: [
    {
      name: "fulltnafn",
      placeholder: {
        is: "Fullt nafn",
        en: "Full name",
      },
      type: "text",
      register: { required: true, maxLength: 80 },
    },
    {
      name: "simanumer",
      placeholder: {
        is: "Símanúmer",
        en: "Phone number",
      },
      type: "text",
      register: { required: true, maxLength: 20 },
    },
    {
      name: "postlisti",
      placeholder: {
        is: "Tengiliður skráður á póstlista Skjaldborgar",
        en: "Contact person subsribed to Skjaldborg email list",
      },
      type: "checkbox",
      register: { required: false },
    },
  ],
}

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
      register: { required: false },
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
      register: {
        required: true,
      },
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
      register: { required: true },
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
      register: { required: true },
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
      register: { required: true },
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
      register: { required: true },
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
      register: { required: true },
      wip: false,
    },
  ],
  adrir: {
    name: "adrir",
    hint: {
      is:
        "Notaðu plúsinn til að bæta við öðru aðstandendum. Mundu að vista eftir að nafn og hlutverk hefur verið útfyllt.",
      en:
        "Use the plus to add other participants. Remember to save after participant name and role has been filled out.",
    },
    type: "text",
    register: { required: false },
    wip: true,
  },
  verk: {
    text: [
      {
        name: "titill",
        placeholder: {
          is: "Titill",
          en: "Title",
        },
        type: "text",
        register: { required: true },
        wip: true,
      },
      {
        name: "lengd",
        placeholder: {
          is: "Lengd í mínútum",
          en: "Duration in minutes",
        },
        type: "number",
        register: { required: true },
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
        maxLength: 350,
        register: { required: true, maxLength: 350 },
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
        rows: "7",
        maxLength: 250,
        register: { required: false, maxLength: 200 },
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
          is: "Stikla / Sýnishorn",
          en: "Trailer / Scenes",
        },
        type: "url",
        register: { required: false },
        wip: true,
      },
      {
        name: "hlekkurKvikmynd",
        placeholder: {
          is: "Kvikmynd",
          en: "Film",
        },
        type: "url",
        register: { required: false },
        wip: false,
      },
      {
        name: "kvikmyndLykilord",
        placeholder: {
          is: "Lykilorð",
          en: "Password",
        },
        type: "text",
        register: { required: false },
        wip: false,
        hint: {
          is: "Ef hlekkur að kvikmynd er varin með lykilorði",
          en: "If link to film is password protected",
        },
      },
    ],
    image: {
      name: "imageOne",
      type: "file",
      register: { required: false },
      wip: true,
      hint: {
        is: "Skáarstærð ljósmyndar verður að vera á milli 500KB og 5MB.",
        en: "Still file size must be between 500KB and 5MB.",
      },
      placeholder: {
        is: "Dragðu / Smelltu hér til að velja ljósmynd",
        en: "Drag / Click here to upload a still",
        is_mobile: "Snertu hér til að velja ljósmynd",
        en_mobile: "Touch to upload a still",
      },
      accept: "image/png, image/jpg, image/jpeg",
    },
  },
}
