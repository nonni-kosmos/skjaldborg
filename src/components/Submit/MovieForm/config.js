export const errorMsg = "Required"
export const emailRegexPattern = /\S+@\S+\.\S+/
export const defaultValues = {
  // movie
  title: "",
  director: "",
  producer: "",
  duration: 0,
  description: "",
  // applicant
  applicantName: "",
  applicantEmail: "",
}

export const spreadDataToSchema = data => {
  // do validation here as well ?
  let movie = {
    accepted: false,
    createdAt: new Date().getTime(),
    director: data.director,
    duration: data.duration,
    description: data.description,
    title: data.title,
    imageLocation: "",
    applicantId: "",
  }
  let applicant = {
    name: data.applicantName,
    email: data.applicantEmail,
  }
  return { movie, applicant }
}

export const generateImageLocation = (movieTitle, imageName) => {
  return movieTitle.toLowerCase().replace(/ /g, "-") + "/" + imageName
}
