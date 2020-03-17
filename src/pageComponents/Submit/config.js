export const errorMsg = "Required"

export const generateImageLocation = movieTitle => {
  return movieTitle.toLowerCase().replace(/ /g, "-")
}

export const uploadLimit = 5 * 1000000 // 5MB

export const formSchema = {
  adstandendur: [
    {
      name: "leikstjori",
      placeholder: "Leikstjóri",
      type: "text",
      required: true,
      wip: true,
    },
    {
      name: "framleidandi",
      placeholder: "Framleiðandi",
      type: "text",
      required: true,
      wip: true,
    },
    {
      name: "klipping",
      placeholder: "Klipping",
      type: "text",
      required: true,
      wip: false,
    },
    {
      name: "kvikmyndataka",
      placeholder: "Kvikmyndataka",
      type: "text",
      required: true,
      wip: false,
    },
    {
      name: "tonlist",
      placeholder: "Tónlist",
      type: "text",
      required: true,
      wip: false,
    },
    {
      name: "hljodhonnun",
      placeholder: "Hljóðhönnun",
      type: "text",
      required: true,
      wip: false,
    },
    {
      name: "framleidslufyrirtaeki",
      placeholder: "Framleiðslufyrirtæki",
      type: "text",
      required: false,
      wip: false,
    },
    {
      name: "onnurHlutverk",
      placeholder: "Önnur hlutverk",
      type: "text",
      required: false,
    },
  ],
}
