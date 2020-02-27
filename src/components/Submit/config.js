export const errorMsg = "Required"
export const emailRegexPattern = /\S+@\S+\.\S+/
export const defaultMovieValues = {
  // movie
  title: "",
  director: "",
  producer: "",
  duration: 0,
  description: "",
}
export const defaultApplicantValues = {
  // applicant
  name: "",
  email: "",
}

export const spreadDataToSchema = (data, applicant) => {
  // do validation here as well ?
  let movie = {
    accepted: false,
    createdAt: new Date().getTime(),
    director: data.director,
    duration: data.duration,
    description: data.description,
    title: data.title,
    imageLocation: generateImageLocation(data.title) + "/" + data.image[0].name,
    applicantId: applicant.applicantId,
    applicantName: applicant.name,
  }
  return { movie }
}

export const generateImageLocation = movieTitle => {
  return movieTitle.toLowerCase().replace(/ /g, "-")
}

export const uploadLimit = 5000000 // 5MB
