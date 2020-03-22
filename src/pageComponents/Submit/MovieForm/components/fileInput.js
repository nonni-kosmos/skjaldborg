import React from "react"
import { FileBTN, InputBox, Hint } from "../../styled"
import { ErrorMessage } from "react-hook-form"
import { uploadLimit } from "../../config"
import { useSelector } from "react-redux"

const FileInput = ({
  imageOne,
  setImageOne,
  icelandic,
  errors,
  forwardedRef,
  item,
}) => {
  const validate = (event, image) => {
    // const image = event.target.files[0]
    // validation

    const messages = {
      en: "Chosen image is not within acceptable paramters.",
      is: "Valin mynd er ekki innan viðundandi marka.",
    }

    // if validated

    if (image.size >= uploadLimit.min && image.size <= uploadLimit.max) {
      setImageOne(image)
    } else {
      setImageOne(null)
      // event.target.value = ""
      alert(icelandic ? messages.is : messages.en)
    }
  }

  // prevents drop
  const handleDrop = event => {
    event.preventDefault()

    if (event.type === "drop") validate(event, event.dataTransfer.files[0])

    console.log(event.type)
  }

  const platform = useSelector(state => state.reducer.platform)

  const [placeholder, setPlaceholder] = React.useState("")
  React.useEffect(() => {
    if (platform !== "desktop") {
      setPlaceholder(
        icelandic ? item.placeholder.is_mobile : item.placeholder.en_mobile
      )
    } else {
      setPlaceholder(icelandic ? item.placeholder.is : item.placeholder.en)
    }
  }, [platform, icelandic, item])

  return (
    <>
      <Hint>{icelandic ? item.hint.is : item.hint.en} ( png, jpg, jpeg )</Hint>
      <FileBTN
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDrop(e)}
        onDragEnter={e => handleDrop(e)}
        id="file-btn"
        style={
          ({ paddingTop: "1rem" },
          imageOne ? { color: "green", borderColor: "green" } : null)
        }
        htmlFor={item.name}
      >
        {imageOne ? imageOne.name : placeholder}
        <InputBox
          onChange={e => validate(e, e.target.files[0])}
          style={{ display: "none" }}
          accept={item.accept}
          type={item.type}
          name={item.name}
          id={item.name}
          ref={forwardedRef}
        />
      </FileBTN>
      <ErrorMessage name={item.name} errors={errors}></ErrorMessage>
    </>
  )
}

export default FileInput
