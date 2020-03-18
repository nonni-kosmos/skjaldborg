import React from "react"
import { FileBTN, InputBox } from "../../styled"

const FileInput = React.forwardRef(
  ({ imageOne, setImageOne, icelandic }, ref) => (
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
        ref={ref}
      />
    </FileBTN>
  )
)

export default FileInput
