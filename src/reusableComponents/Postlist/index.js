import React, { useState, useEffect, useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { POSTLIST } from "../../state/action"

import { RootContext } from "../../context/main"

// components
import { Form, Input, Button } from "./styled"

const Postlist = () => {
  const [store, setStore] = useState(null)

  const { firestore } = useContext(RootContext)

  useEffect(() => {
    if (firestore)
      setStore(firestore)
  }, [firestore])

  const icelandic = useSelector(state => state.reducer.icelandic)
  const postlisted = useSelector(state => state.reducer.postlisted)
  const dispatch = useDispatch()

  const { handleSubmit, register } = useForm()

  const onSubmit = (data, e) => {
    store
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
