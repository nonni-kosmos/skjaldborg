import React, { useState } from "react"
import { InputBox, Warning, FileBTN } from "../styled"
import { useForm } from "react-hook-form"
import { useGetCollection } from "../../../hooks/useGetCollection"
import { useGetStorage } from "../../../hooks/useGetStorage"
import { errorMsg, emailRegexPattern, defaultValues } from "./config"
import { submitData } from "./submitData"

const MovieForm = () => {
  const [emailOk, setEmailOk] = useState(false)
  const [file, setFile] = useState({ ok: false, name: null })

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

  const validateFile = e => {
    if (e.target.files[0].size <= 2000000) {
      setFile({ ok: true, name: e.target.value })
    }
  }

  const onSubmit = (data, e) => {
    submitData(data, movieCollection, applicantCollection, storage, e)
  }

  return (
    <>
      <form
        name="moviesubmitform"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <legend>Tengiliður</legend>
        <InputBox
          placeholder="Fullt nafn"
          type="text"
          name="applicantName"
          id="applicantName"
          ref={register({ required: true, maxLength: 80 })}
        />
        {errors.applicantName && <Warning>{errorMsg}</Warning>}
        <InputBox
          email
          color={emailOk ? "green" : "inherit"}
          placeholder="Netfang"
          type="text"
          name="applicantEmail"
          id="applicantEmail"
          onChange={e => validateEmail(e)}
          ref={register({ required: true, pattern: emailRegexPattern })}
        />
        {errors.applicantEmail && <Warning>Invalid email</Warning>}
        <legend>Kvikmynd</legend>
        <InputBox
          ref={register({ required: true, maxLength: 80 })}
          placeholder="Titill"
          type="text"
          name="title"
          id="movie-title"
        />
        {errors.title && <Warning>{errorMsg}</Warning>}

        <InputBox
          placeholder="Leikstjóri"
          type="text"
          name="director"
          id="director"
          ref={register({ required: true, maxLength: 80 })}
        />
        {errors.director && <Warning>{errorMsg}</Warning>}

        <InputBox
          placeholder="Framleiðandi"
          type="text"
          name="producer"
          id="producer"
          ref={register({ maxLength: 80 })}
        />
        <InputBox
          placeholder="Lengd í mínútum"
          type="number"
          name="duration"
          id="duration"
          ref={register({ required: true, min: 1 })}
        />
        {errors.duration && <Warning>Invalid duration</Warning>}

        <FileBTN
          status={file.ok ? "ok" : null}
          style={{ paddingTop: "1rem" }}
          htmlFor="image"
        >
          {file.ok ? file.name : "Veldu stillu (hámark 2MB)"}
          <InputBox
            style={{ display: "none" }}
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            name="image"
            id="image"
            placeholder="Engin skrá valin"
            ref={register}
            onChange={e => validateFile(e)}
          />
          {errors.image && <Warning>{errorMsg}</Warning>}
        </FileBTN>
        <textarea
          placeholder="Description"
          name="description"
          id="description"
          cols="30"
          rows="10"
          ref={register({ required: true })}
        ></textarea>
        {errors.description && <Warning>{errorMsg}</Warning>}

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
