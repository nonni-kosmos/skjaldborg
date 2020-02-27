import { spreadDataToSchema, generateImageLocation } from "./config"
export const submitData = (
  data,
  movieCollection,
  applicant,
  storage,
  event
) => {
  // spread the initial data
  let { movie } = spreadDataToSchema(data, applicant)

  const movPromise = new Promise((resolve, reject) => {
    movieCollection
      .add(movie)
      .then(() => {
        console.log("Movie saved")
        resolve()
      })
      .catch(error => {
        console.log("Movie error: " + error.message)
        reject()
      })
  })

  const imgPromise = new Promise((resolve, reject) => {
    let storageFolder = generateImageLocation(movie.title)
    let file = data.image[0]
    let filename = file.name

    let storageRef = storage.ref(storageFolder + "/" + filename)
    storageRef
      .put(file)
      .then(() => {
        console.log("Image saved")
        movie.imageLocation = storageFolder + filename
        resolve()
      })
      .catch(error => {
        console.log("Image error: " + error.message)
        reject()
      })
  })

  Promise.all([imgPromise, movPromise]).then(() => {
    console.log("Completed all phases of upload")
    event.target.reset()
  })
}
