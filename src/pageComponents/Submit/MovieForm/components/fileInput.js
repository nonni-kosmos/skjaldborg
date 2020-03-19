import React from "react"
import { FileBTN, InputBox, Hint } from "../../styled"
import { ErrorMessage } from "react-hook-form"
import { uploadLimit } from "../../config"

const FileInput = ({
  imageOne,
  setImageOne,
  icelandic,
  errors,
  forwardedRef,
  item,
}) => {
  const validate = event => {
    const image = event.target.files[0]
    // validation
    const { size } = image

    const messages = {
      en: "Chosen image is not within acceptable paramters.",
      is: "Valin mynd er ekki innan viðundandi marka.",
    }

    // if validated

    if (size >= uploadLimit.min && size <= uploadLimit.max) {
      setImageOne(image)
    } else {
      setImageOne(null)
      event.target.value = ""
      alert(icelandic ? messages.is : messages.en)
    }
  }

  return (
    <>
      <Hint>{icelandic ? item.hint.is : item.hint.en} ( png, jpg, jpeg )</Hint>
      <FileBTN
        style={
          ({ paddingTop: "1rem" },
          imageOne ? { color: "green", borderColor: "green" } : null)
        }
        htmlFor="imageOne"
      >
        {imageOne ? imageOne.name : icelandic ? "Ljósmynd" : "Still"}
        <InputBox
          onChange={e => validate(e)}
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
    </>
  )
}

export default FileInput
