import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { generateImageLocation, formSchema } from "../config"
import { useDispatch, useSelector } from "react-redux"
import { SAVE_APPLICANT } from "../../../state/action"

import useGetFirebase from "../../../hooks/useGetFirebase"
import { put } from "rxfire/storage"
import { navigate } from "gatsby"
import Applicant from "./components/applicant"
import BigBtn from "../../../reusableComponents/BigBtn"
import FileInput from "./components/fileInput"
import TextArea from "./components/textArea"
import Hlekkir from "./components/hlekkir"
import Adstandendur from "./components/adstandendur"
import VerkText from "./components/verkText"
import TopBox from "./components/topBox"
import { Hint } from "../styled"
import Adrir from "./components/adrir"

const MovieForm = () => {
  const {
    db: { storage, firestore, auth },
  } = useGetFirebase()

  const { register, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()

  const adrir = useSelector(state => state.reducer.adrir)

  console.log(adrir)

  const onSubmit = (data, e) => {
    console.log(data)
    if (window.confirm("Confirm submission")) {
      // Image one, required
      // generate url names
      let imageOneURL = generateImageLocation(data.titill) + "/image"
      // upload it
      const imageOneRef = storage.ref(imageOneURL)
      put(imageOneRef, imageOne).subscribe(snap => {
        let progress = snap.bytesTransferred / snap.totalBytes
        console.log(progress * 100 + "%")
      })

      // Remove image from data object so we can spread it safely
      delete data.imageOne

      firestore
        .collection("movies")
        .add({
          // meta
          createdAt: Date.now(),
          accepted: false,
          // work in progress?
          wip: wip,
          // key to applicant store
          userId: auth.currentUser.uid,
          // form data
          // - image manually added
          imageOneLocation: imageOneURL,
          // - spread that butter baby
          ...data,
          adrir: { ...adrir },
        })
        .then(() => {
          firestore.collection("applicants").add({
            ...applicant,
          })
        })
        .then(() => dispatch({ type: SAVE_APPLICANT, applicant: null }))

      e.target.reset()
      navigate("/umsokn/kvikmynd/vel-gert")
    }
  }

  const [imageOne, setImageOne] = useState(null)
  const [phaseOneComplete, setPhaseOneComplete] = useState(false)
  const [wip, setWip] = useState(false) // wip === work in progress

  const applicant = useSelector(state => state.reducer.applicant)

  const icelandic = useSelector(state => state.reducer.icelandic)

  return (
    <>
      {phaseOneComplete ? (
        <>
          <TopBox
            icelandic={icelandic}
            auth={auth}
            applicant={applicant}
            onChange={setWip}
          ></TopBox>
          <form
            name="moviesubmitform"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <legend>
              {icelandic ? "Upplýsingar um verk" : "Project details"}
            </legend>
            {/* VERK */}
            <Hint>
              {icelandic
                ? "Vinsamlegast athugið: Aðskiljið með kommu milli nafna ef fleiri en einn aðili í hverri stöðu."
                : "Please note: Separate names with commas if more than one person per position."}
            </Hint>
            {formSchema.verk.text.map((item, index) => (
              <VerkText
                errors={errors}
                key={index}
                item={item}
                icelandic={icelandic}
                forwardedRef={register(item.register)}
                wip={wip}
              ></VerkText>
            ))}
            {/* AÐSTANDENDUR */}
            {formSchema.adstandendur.map((item, index) => (
              <Adstandendur
                errors={errors}
                key={index}
                forwardedRef={register(item.register)}
                item={item}
                icelandic={icelandic}
                wip={wip}
              ></Adstandendur>
            ))}

            {/* AÐRIR */}
            <Adrir></Adrir>

            {/* IMAGE #1 */}
            <FileInput
              icelandic={icelandic}
              errors={errors}
              imageOne={imageOne}
              setImageOne={setImageOne}
              forwardedRef={register(formSchema.verk.image.register)}
              item={formSchema.verk.image}
            ></FileInput>
            {formSchema.verk.textArea.map((item, index) => (
              <TextArea
                errors={errors}
                key={index}
                item={item}
                forwardedRef={register(item.register)}
                icelandic={icelandic}
              ></TextArea>
            ))}
            {/* HLEKKIR */}

            <legend>{icelandic ? "Hlekkir" : "Links"}</legend>
            {formSchema.verk.hlekkir.map((item, index) => (
              <Hlekkir
                errors={errors}
                wip={wip}
                icelandic={icelandic}
                item={item}
                key={index}
                forwardedRef={register(item.register)}
              ></Hlekkir>
            ))}

            <BigBtn
              buttonSubmit
              text={icelandic ? "Senda inn" : "Submit"}
            ></BigBtn>
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
