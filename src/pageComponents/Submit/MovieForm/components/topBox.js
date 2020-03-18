import React from "react"
import { Box } from "../styled"

const TopBox = ({ onChange, applicant, auth, icelandic }) => {
  return (
    <Box>
      <legend>{icelandic ? "Tengiliður" : "Contact"} </legend>
      <i id="check" className="gg-check-o"></i>
      <p>
        {applicant
          ? applicant.fulltnafn + " | " + applicant.netfang
          : auth.currentUser.email}
      </p>
      <button onClick={() => auth.signOut()}>
        {icelandic ? "Breyta tengilið" : "Change contact"}
      </button>

      <p>{icelandic ? "Sótt er um:" : "Applying for:"}</p>
      <select onInput={e => onChange(e.target.value === "wip")}>
        <option value="nowip">
          {icelandic
            ? "Frumsýna verk á hátíðinni"
            : "Premiere a film at the festival"}
        </option>
        <option value="wip">
          {icelandic ? "Kynna verk í vinnslu" : "Present a work in progress"}
        </option>
      </select>
    </Box>
  )
}

export default TopBox
