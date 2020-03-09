import React from "react"

const Files = ({ files }) => {
  if (files.length > 0) {
    return <p>{files[0].name}</p>
  } else return <p>0 files</p>
}

export default Files
