const cloudinary = require("cloudinary-core")

let cl = cloudinary.Cloudinary.new({ cloud_name: "dgekvli3k" })

require("lodash")
require("dotenv").config()

export const getMovieStill = id => {
  let url = "https://res.cloudinary.com/dgekvli3k/gatsby-cloudinary/" + id
  fetch(url).then(d => {
    if (d.status === 200) {
      console.log(d.url)
      return d.url
    }
  })
}

export const uploadImage = imageName => {
  fetch("https://api.cloudinary.com/v1_1/dgevkli3k/image/upload", {
    method: "post",
    body: {},
  })
    .then(resp => console.log(resp))
    .catch(error => {
      console.log(error)
    })
}
