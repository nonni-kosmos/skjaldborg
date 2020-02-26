import { spreadDataToSchema, generateImageLocation } from "./config"
export const submitData = (
  data,
  movieCollection,
  applicantCollection,
  storage,
  event
) => {
  // spread the initial data
  let { movie, applicant } = spreadDataToSchema(data)

  let location = ""

  const apPromise = new Promise((resolve, reject) => {
    applicantCollection
      .add(applicant)
      .then(ref => {
        console.log("Applicant saved")
        movie.applicantId = ref.id
        resolve()
      })
      .catch(error => {
        console.log("Applicant error: " + error.message)
        reject()
      })
  })
  const imgPromise = new Promise((resolve, reject) => {
    location = generateImageLocation(movie.title, data.image[0].name)
    storage
      .child(location)
      .put(data.image[0])
      .then(() => {
        console.log("Image saved")
        movie.imageLocation = location
        resolve()
      })
      .catch(error => {
        console.log("Image error: " + error.message)
        reject()
      })
  })
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

  Promise.all([apPromise, imgPromise, movPromise]).then(() => {
    console.log("Completed all phases of upload")
    event.target.reset()
  })
}
