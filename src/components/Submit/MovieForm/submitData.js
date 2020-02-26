import React, { useState } from "react"
import { spreadDataToSchema, generateImageLocation } from "./config"
export const submitData = (
  data,
  movieCollection,
  applicantCollection,
  storage
) => {
  // phases of completion
  const completion = {
    phaseOne: false,
    phaseTwo: false,
    phaseThree: false,
  }
  // spread the initial data
  let { movie, applicant } = spreadDataToSchema(data)

  // start the process
  applicantCollection
    .add(applicant)
    .then(ref => {
      console.log("Applicant saved")
      // save reference to applicant
      movie.applicantId = ref.id
      // complete first phase
      completion.phaseOne = true

      console.log(data)
      const location = generateImageLocation(movie.title, data.image[0].name)
      // upload image
      storage
        .child(location)
        .put(data.image[0])
        .then(() => {
          console.log("Image saved")
          // save reference to image location
          movie.imageLocation = location
          // complete second phase
          completion.phaseTwo = true

          // at last save the movie
          movieCollection
            .add(movie)
            .then(() => {
              console.log("Movie saved")
              completion.phaseThree = true
            })
            .catch(error => {
              console.log("Phase three error: " + error.message)
            })
        })
        .catch(error => {
          console.log("Phase two error: " + error.message)
        })
    })
    .catch(error => {
      console.log("Phase one error: " + error.message)
    })
}
