import React, { useState } from "react"
import { InputBox, Warning, FileBTN, Hint } from "../styled"
import { useForm } from "react-hook-form"
import { errorMsg, generateImageLocation } from "../config"

import useGetFirebase from "../../../hooks/useGetFirebase"
import { put } from "rxfire/storage"
import { navigate } from "gatsby"
import Applicant from "./applicant"
import BigBtn from "../../../reusableComponents/BigBtn"

const MovieForm = () => {
  const {
    db: { storage, firestore, auth },
  } = useGetFirebase()

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
    if (window.confirm("Confirm submission")) {
      // Image one, required
      // generate url names
      let imageOneURL = generateImageLocation(data.title) + "/image1"
      // upload it
      const imageOneRef = storage.ref(imageOneURL)
      put(imageOneRef, data.imageOne[0]).subscribe(snap => {
        console.log(snap)
      })

      // image 2, if desired...
      let imageTwoURL = ""
      if (imageTwo) {
        imageTwoURL = generateImageLocation(data.title) + "/image2"
      }
      if (data.imageTwo.length > 0) {
        const imageTwoRef = storage.ref(imageTwoURL)
        put(imageTwoRef, data.imageTwo[0]).subscribe(snap => {
          console.log(snap)
        })
      }

      const user = auth.currentUser

      // then save the movie
      firestore.collection("movies").add({
        accepted: false,
        applicantId: user.uid,
        applicantName: user.displayName,
        applicantEmail: user.email,
        createdAt: Date.now(),
        description: data.description,
        director: data.director,
        duration: data.duration,
        title: data.title,
        imageOneLocation: imageOneURL,
        imageTwoLocation: imageTwoURL,
        trailerlinkur: data.trailerlinkur,
        kvikmyndlinkur: data.kvikmyndlinkur,
        athugasemdir: data.athugasemdir,
      })

      e.target.reset()
      navigate("/umsokn/kvikmynd/vel-gert")
    }
  }

  const [imageOne, setImageOne] = useState(null)
  const [imageTwo, setImageTwo] = useState(null)

  return (
    <>
      <form
        name="moviesubmitform"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <Applicant></Applicant>
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

        {/* IMAGE #1 */}
        <FileBTN
          style={
            ({ paddingTop: "1rem" },
            imageOne ? { color: "green", borderColor: "green" } : null)
          }
          htmlFor="imageOne"
        >
          {imageOne ? imageOne.name : "Stilla #1"}
          <InputBox
            onChange={e => setImageOne(e.target.files[0])}
            style={{ display: "none" }}
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            name="imageOne"
            id="imageOne"
            placeholder="Engin skrá valin"
            ref={register({ required: true })}
          />
          {errors.imageOne && <Warning>{errorMsg}</Warning>}
        </FileBTN>

        {/* IMAGE #2 */}
        {imageOne ? (
          <FileBTN
            style={
              ({ paddingTop: "1rem" },
              imageTwo ? { color: "green", borderColor: "green" } : null)
            }
            htmlFor="imageTwo"
          >
            {imageTwo ? imageTwo.name : "Stilla #2"}
            <InputBox
              onChange={e => setImageTwo(e.target.files[0])}
              style={{ display: "none" }}
              accept="image/png, image/jpg, image/jpeg"
              type="file"
              name="imageTwo"
              id="imageTwo"
              placeholder="Engin skrá valin"
              ref={register}
            />
          </FileBTN>
        ) : null}

        <Hint>Þessi texti verður notaður í dagskrá Skjaldborgar</Hint>
        <textarea
          placeholder="Description"
          name="description"
          id="description"
          cols="30"
          rows="10"
          ref={register({ required: true })}
        ></textarea>
        {errors.description && <Warning>{errorMsg}</Warning>}

        {/* ATHUGASEMDIR */}
        <textarea
          placeholder="Athugasemdir"
          name="athugasemdir"
          id="athugasemdir"
          cols="30"
          rows="5"
          ref={register()}
        ></textarea>
        {errors.athugasemdir && <Warning>{errorMsg}</Warning>}

        {/* HLEKKIR */}
        <legend>Hlekkir</legend>
        <Hint>Leyfileg skáarsnið eru eftirfarandi...</Hint>
        <InputBox
          placeholder="Trailer"
          type="text"
          name="trailerlinkur"
          id="trailerlinkur"
          ref={register({ required: true })}
        />
        {errors.trailerlinkur && <Warning>{errorMsg}</Warning>}
        <InputBox
          placeholder="Kvikmynd"
          type="text"
          name="kvikmyndlinkur"
          id="kvikmyndlinkur"
          ref={register({ required: true })}
        />
        {errors.kvikmyndlinkur && <Warning>{errorMsg}</Warning>}

        <BigBtn buttonSubmit text={`Senda inn`}></BigBtn>
      </form>
    </>
  )
}

export default MovieForm
