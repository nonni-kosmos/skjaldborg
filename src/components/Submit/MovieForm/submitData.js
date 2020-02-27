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
  let movPromise

  const apPromise = new Promise((resolve, reject) => {
    applicantCollection
      .add(applicant)
      .then(ref => {
        console.log("Applicant saved")
        movie.applicantId = ref.id
        // applicant has to register BEFORE we register the movie
        movPromise = new Promise((resolve, reject) => {
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
        resolve()
      })
      .catch(error => {
        console.log("Applicant error: " + error.message)
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

  Promise.all([apPromise, imgPromise, movPromise]).then(() => {
    console.log("Completed all phases of upload")
    event.target.reset()
  })
}
