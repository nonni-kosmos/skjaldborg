import React from "react"
import BigBtn from "../../../../reusableComponents/BigBtn"
import { useSelector } from "react-redux"

const EmailPwLogin = ({ action }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <BigBtn
      text={icelandic ? "Netfangi & lykilorði" : "Email & Password"}
      action={action}
      button
    ></BigBtn>
  )
}

export default EmailPwLogin
