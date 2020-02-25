import React, { useState } from "react"
import { InputBox, Warning } from "../styled"
import { useForm } from "react-hook-form"
import { useGetCollection } from "../../../hooks/useGetCollection"
import { uploadImage } from "../../../service/cloudinary"

const MovieForm = () => {
  const [state, setState] = useState({
    title: "",
    director: "",
    producer: "",
    duration: 0,
    image: null,
    description: "",
    applicantName: "",
    applicantEmail: "",
  })

  const { register, handleSubmit, errors } = useForm()

  const { collection: movieCollection } = useGetCollection("movies")
  const { collection: applicantCollection } = useGetCollection("applicants")

  const updateValues = e => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = data => {
    console.log(data)
    let movie = {
      accepted: false,
      createdAt: new Date().getTime(),
      director: data.director,
      duration: data.duration,
      description: data.description,
      title: data.movieTitle,
      imageName: data.image[0].name,
      applicantId: "",
    }
    let applicant = {
      name: data.applicantName,
      email: data.applicantEmail,
    }

    // post applicant
    applicantCollection
      .add(applicant)
      .then(apRef => {
        console.log("succesfully added applicant with id: " + apRef.id)

        movie.applicantId = apRef.id
        // post movie
        movieCollection
          .add(movie)
          .then(() => {
            console.log("Succesfully submitted movie...")
            // upload image
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <form
        name="moviesubmitform"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
      >
        <legend>Kvikmynd</legend>
        <InputBox
          ref={register({ required: true })}
          placeholder={"Title"}
          type="text"
          name="movieTitle"
          id="movie-title"
          onChange={e => updateValues(e)}
        />
        {errors.movieTitle && <Warning>Verður að fylla út!</Warning>}

        <InputBox
          placeholder="Director"
          type="text"
          name="director"
          id="director"
          onChange={e => updateValues(e)}
          ref={register({ required: true })}
        />
        {errors.director && <Warning>Verður að fylla út!</Warning>}

        <InputBox
          placeholder="Producer"
          type="text"
          name="producer"
          id="producer"
          onChange={e => updateValues(e)}
          ref={register}
        />
        <InputBox
          placeholder="Duration (minutes)"
          type="number"
          name="duration"
          id="duration"
          onChange={e => updateValues(e)}
          ref={register({ required: true })}
        />
        {errors.duration && <Warning>Verður að fylla út!</Warning>}

        <label style={{ paddingTop: "1rem" }} htmlFor="image">
          Still:
          <InputBox
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            name="image"
            id="image"
            onChange={e => updateValues(e)}
            ref={register}
          />
        </label>
        <textarea
          placeholder="Description"
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={e => updateValues(e)}
          ref={register({ required: true })}
        ></textarea>
        {errors.description && <Warning>Verður að fylla út!</Warning>}

        <legend>Applicant</legend>
        <InputBox
          placeholder="Name"
          type="text"
          name="applicantName"
          id="applicantName"
          onChange={e => updateValues(e)}
          ref={register}
        />
        {errors.applicantName && <Warning>Verður að fylla út!</Warning>}
        <InputBox
          placeholder="Email"
          type="text"
          name="applicantEmail"
          id="applicantEmail"
          onChange={e => updateValues(e)}
          ref={register}
        />
        {errors.applicantEmail && <Warning>Verður að fylla út!</Warning>}

        <input
          name="submitFormBtn"
          id="submit-btn"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  )
}

export default MovieForm
