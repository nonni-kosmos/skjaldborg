import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import useGetFirebase from "../../hooks/useGetFirebase"
import { POSTLIST } from "../../state/action"

// components
import { Form, Input, Button } from "./styled"

const Postlist = () => {
  const {
    db: { firestore },
  } = useGetFirebase()

  const icelandic = useSelector(state => state.reducer.icelandic)
  const postlisted = useSelector(state => state.reducer.postlisted)
  const dispatch = useDispatch()

  const { handleSubmit, register } = useForm()

  const onSubmit = (data, e) => {
    firestore
      .collection("postlist")
      .add({
        ...data,
      })
      .then(() => {
        console.log("closed postlist btn in store")
        e.target.reset()
        dispatch({ type: POSTLIST })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        disabled={postlisted}
        ref={register({ required: true })}
        name="netfang"
        type="email"
        placeholder={icelandic ? "Netfang" : "Email"}
      ></Input>
      <Button
        disabled={postlisted}
        type="submit"
        value={
          postlisted
            ? icelandic
              ? "Skráður"
              : "Registered"
            : icelandic
            ? "Skrá mig á póstlista"
            : "Sign up for postlist"
        }
      ></Button>
    </Form>
  )
}

export default Postlist
