import React from "react"
import { FileBTN, InputBox } from "../../styled"
import { ErrorMessage } from "react-hook-form"

const FileInput = ({
  imageOne,
  setImageOne,
  icelandic,
  errors,
  forwardedRef,
}) => (
  <FileBTN
    style={
      ({ paddingTop: "1rem" },
      imageOne ? { color: "green", borderColor: "green" } : null)
    }
    htmlFor="imageOne"
  >
    {imageOne ? imageOne.name : icelandic ? "Ljósmynd" : "Still"}
    <InputBox
      onChange={e => setImageOne(e.target.files[0])}
      style={{ display: "none" }}
      accept="image/png, image/jpg, image/jpeg"
      type="file"
      name="imageOne"
      id="imageOne"
      placeholder="Engin skrá valin"
      ref={forwardedRef}
    />
    <ErrorMessage
      name="imageOne"
      errors={errors}
      message={icelandic ? " vantar!" : " required!"}
    ></ErrorMessage>
  </FileBTN>
)

export default FileInput
