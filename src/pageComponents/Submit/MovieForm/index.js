import React, { useState } from "react"
import { InputBox, Warning, FileBTN, Hint } from "../styled"
import { useForm } from "react-hook-form"
import { errorMsg, generateImageLocation } from "../config"

import useGetFirebase from "../../../hooks/useGetFirebase"
import { put } from "rxfire/storage"
import { navigate } from "gatsby"
import Applicant from "./applicant"
import BigBtn from "../../../reusableComponents/BigBtn"
import { Box } from "./styled"
import { useSelector } from "react-redux"

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
      let imageOneURL = generateImageLocation(data.titill) + "/image1"
      // upload it
      const imageOneRef = storage.ref(imageOneURL)
      put(imageOneRef, data.imageOne[0]).subscribe(snap => {
        console.log(snap)
      })

      // image 2, if desired...
      let imageTwoURL = ""
      if (imageTwo) {
        imageTwoURL = generateImageLocation(data.titill) + "/image2"
      }
      if (data.imageTwo.length > 0) {
        const imageTwoRef = storage.ref(imageTwoURL)
        put(imageTwoRef, data.imageTwo[0]).subscribe(snap => {
          console.log(snap)
        })
      }

      // save movie
      // deconstruct data that we can spread
      const {
        titill,
        leikstjori,
        framleidandi,
        lengd,
        lysing,
        athugasemdir,
        hlekkurStikla,
        hlekkurVerk,
      } = data

      firestore
        .collection("movies")
        .add({
          // meta
          createdAt: Date.now(),
          accepted: false,
          // key to applicant store
          userId: auth.currentUser.uid,
          // form data
          // - images
          imageOneLocation: imageOneURL,
          imageTwoLocation: imageTwoURL,
          // - rest
          titill,
          leikstjori,
          framleidandi,
          lengd,
          lysing,
          athugasemdir,
          hlekkurStikla,
          hlekkurVerk,
        })
        .then(() => {
          firestore.collection("applicants").add({
            ...applicant,
          })
        })

      e.target.reset()
      navigate("/umsokn/kvikmynd/vel-gert")
    }
  }

  const [imageOne, setImageOne] = useState(null)
  const [imageTwo, setImageTwo] = useState(null)

  const [phaseOneComplete, setPhaseOneComplete] = useState(false)

  const applicant = useSelector(state => state.reducer.applicant)

  return (
    <>
      {phaseOneComplete ? (
        <>
          <Box>
            <legend>Tengiliður </legend>
            <i id="check" class="gg-check-o"></i>
            <p>
              {applicant
                ? applicant.fulltnafn + " | " + applicant.netfang
                : auth.currentUser.email}
            </p>
            <button onClick={() => auth.signOut()}>Breyta tengilið</button>
          </Box>
          <form
            name="moviesubmitform"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <legend>Verk</legend>
            <InputBox
              ref={register({ required: true, maxLength: 80 })}
              placeholder="Titill"
              type="text"
              name="titill"
            />
            {errors.titill && <Warning>{errorMsg}</Warning>}

            <InputBox
              placeholder="Leikstjóri"
              type="text"
              name="leikstjori"
              ref={register({ required: true, maxLength: 80 })}
            />
            {errors.leikstjori && <Warning>{errorMsg}</Warning>}

            <InputBox
              placeholder="Framleiðandi"
              type="text"
              name="framleidandi"
              ref={register({ maxLength: 80 })}
            />
            <InputBox
              placeholder="Lengd í mínútum"
              type="number"
              name="lengd"
              ref={register({ required: true, min: 1 })}
            />
            {errors.lengd && <Warning>Invalid duration</Warning>}

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
              placeholder="Stutt lýsing"
              name="lysing"
              id="lysing"
              cols="30"
              rows="10"
              ref={register({ required: true })}
            ></textarea>
            {errors.lysing && <Warning>{errorMsg}</Warning>}

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

            <Hint style={{ marginBottom: "-0.3rem" }}>Youtube / Vimeo</Hint>
            <InputBox
              placeholder="Stikla"
              type="url"
              name="hlekkurStikla"
              ref={register({ required: true })}
            />
            {errors.hlekkurStikla && <Warning>{errorMsg}</Warning>}

            <InputBox
              placeholder="Kvikmynd"
              type="url"
              name="hlekkurVerk"
              ref={register({ required: true })}
            />
            {errors.hlekkurVerk && <Warning>{errorMsg}</Warning>}

            <BigBtn buttonSubmit text={`Senda inn`}></BigBtn>
          </form>
        </>
      ) : (
        <>
          <Applicant
            completePhaseOne={() => setPhaseOneComplete(true)}
          ></Applicant>
        </>
      )}
    </>
  )
}

export default MovieForm
