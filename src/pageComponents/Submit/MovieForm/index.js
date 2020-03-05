import React, { useState, useEffect } from "react"
import { InputBox, Warning, FileBTN } from "../styled"
import { useForm } from "react-hook-form"
// import { useGetCollection } from "../../../hooks/useGetCollection"
import { submitData } from "../submitData"
import { errorMsg, defaultMovieValues, generateImageLocation } from "../config"

import useGetFirebase from "../../../hooks/useGetFirebase"
import { collectionData, fromDocRef } from "rxfire/firestore"
import { authState } from "rxfire/auth"
import { put } from "rxfire/storage"
import { navigate } from "gatsby"

const MovieForm = () => {
  const {
    db: { storage, firestore, auth },
    isLoading,
  } = useGetFirebase()

  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    id: "",
  })

  const { register, handleSubmit, errors } = useForm({
    defaultValues: defaultMovieValues,
  })

  // create applicant object from auth user
  useEffect(() => {
    if (!isLoading) {
      authState(auth).subscribe(user => {
        setApplicant({
          name: user.displayName,
          email: user.email,
          id: user.uid,
        })
      })
    }
  }, [isLoading])

  const onSubmit = (data, e) => {
    let uploadComplete = false
    console.log(data)

    // generate url name
    const imageURL =
      generateImageLocation(data.title) + "/" + data.image[0].name

    // upload it
    const imageRef = storage.ref(imageURL)
    put(imageRef, data.image[0]).subscribe(snap => {
      console.log(snap)
    })

    // then save the movie
    firestore.collection("movies").add({
      accepted: false,
      applicantId: applicant.id,
      applicantName: applicant.name,
      createdAt: Date.now(),
      description: data.description,
      director: data.director,
      duration: data.duration,
      title: data.title,
      imageLocation: imageURL, // imageRef
    })

    e.target.reset()
    navigate("/")
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

        <FileBTN style={{ paddingTop: "1rem" }} htmlFor="image">
          <InputBox
            style={{ display: "none" }}
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            name="image"
            id="image"
            placeholder="Engin skrá valin"
            ref={register({ required: true })}
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
