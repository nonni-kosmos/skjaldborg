import React, { useState, useEffect } from "react"
import { InputBox, Warning, FileBTN } from "../styled"
import { useForm } from "react-hook-form"
import { useGetCollection } from "../../../hooks/useGetCollection"
import { useGetStorage } from "../../../hooks/useGetStorage"
import { submitData } from "../submitData"
import useAuth from "../../../hooks/useAuth"
import { errorMsg, uploadLimit, defaultMovieValues } from "../config"

const MovieForm = () => {
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    applicantId: "",
  })
  const [file, setFile] = useState({ ok: false, name: null })

  const { register, handleSubmit, errors } = useForm({
    defaultValues: defaultMovieValues,
  })

  const { collection: movieCollection } = useGetCollection("movies")
  const { collection: applicantCollection } = useGetCollection("applicants")
  const { storage } = useGetStorage()

  // register applicant when profile has loaded
  const { profile, isLoading } = useAuth()
  useEffect(() => {
    if (profile && !isLoading) {
      applicantCollection
        .where("applicantId", "==", profile.uid)
        .get()
        .then(d => {
          d.forEach(applicant => {
            setApplicant({
              name: applicant.data().name,
              email: applicant.data().email,
              applicantId: applicant.data().applicantId,
            })
          })
        })
    }
  })

  const validateFile = e => {
    for (var i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i].size <= uploadLimit) {
        setFile({ ok: true, name: e.target.files[i].name })
      }
    }
  }

  const onSubmit = (data, e) => {
    console.log(data)
    submitData(data, movieCollection, applicant, storage, e)
  }

  return (
    <>
      <form
        name="moviesubmitform"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <legend>Tengiliður: </legend>
        <p>{applicant ? applicant.name : ""}</p>
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
          {file.ok ? file.name : "Veldu stillu (hámark 5MB)"}
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
          className="submit-btn"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  )
}

export default MovieForm
