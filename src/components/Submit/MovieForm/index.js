import React, { useState } from "react"
import { InputBox, Warning } from "../styled"
import { useForm } from "react-hook-form"
import { useGetCollection } from "../../../hooks/useGetCollection"
import { useGetStorage } from "../../../hooks/useGetStorage"
import { errorMsg, emailRegexPattern, defaultValues } from "./config"
import { submitData } from "./submitData"

const MovieForm = () => {
  const [emailOk, setEmailOk] = useState(false)

  const { register, handleSubmit, errors } = useForm({
    defaultValues: defaultValues,
  })

  const { collection: movieCollection } = useGetCollection("movies")
  const { collection: applicantCollection } = useGetCollection("applicants")
  const { storage } = useGetStorage()

  const validateEmail = e => {
    if (emailRegexPattern.test(e.target.value)) {
      setEmailOk(true)
    } else {
      setEmailOk(false)
    }
  }

  const onSubmit = (data, e) => {
    console.log(data)
    submitData(data, movieCollection, applicantCollection, storage)
  }

  return (
    <>
      <form
        name="moviesubmitform"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <legend>Kvikmynd</legend>
        <InputBox
          ref={register({ required: true, maxLength: 80 })}
          placeholder={"Title"}
          type="text"
          name="title"
          id="movie-title"
        />
        {errors.title && <Warning>{errorMsg}</Warning>}

        <InputBox
          placeholder="Director"
          type="text"
          name="director"
          id="director"
          ref={register({ required: true, maxLength: 80 })}
        />
        {errors.director && <Warning>{errorMsg}</Warning>}

        <InputBox
          placeholder="Producer"
          type="text"
          name="producer"
          id="producer"
          ref={register({ maxLength: 80 })}
        />
        <InputBox
          placeholder="Duration (minutes)"
          type="number"
          name="duration"
          id="duration"
          ref={register({ required: true, min: 1 })}
        />
        {errors.duration && <Warning>Invalid duration</Warning>}

        <label style={{ paddingTop: "1rem" }} htmlFor="image">
          Still:
          <InputBox
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            name="image"
            id="image"
            ref={register}
          />
          {errors.image && <Warning>{errorMsg}</Warning>}
        </label>
        <textarea
          placeholder="Description"
          name="description"
          id="description"
          cols="30"
          rows="10"
          ref={register({ required: true })}
        ></textarea>
        {errors.description && <Warning>{errorMsg}</Warning>}

        <legend>Applicant</legend>
        <InputBox
          placeholder="Name"
          type="text"
          name="applicantName"
          id="applicantName"
          ref={register({ required: true, maxLength: 80 })}
        />
        {errors.applicantName && <Warning>{errorMsg}</Warning>}
        <InputBox
          email
          color={emailOk ? "green" : "inherit"}
          placeholder="Email"
          type="text"
          name="applicantEmail"
          id="applicantEmail"
          onChange={e => validateEmail(e)}
          ref={register({ required: true, pattern: emailRegexPattern })}
        />
        {errors.applicantEmail && <Warning>Invalid email</Warning>}

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
