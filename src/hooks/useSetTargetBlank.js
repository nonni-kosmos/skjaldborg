import React from "react"

// searches child nodes of parent with containerId
// looks for anchor tags & adds target="_blank" property

const targetAnchorTag = item => {
  if (item.nodeName === "A") item.setAttribute("target", "_blank")
}

const useSetTargetBlank = containerId => {
  React.useEffect(() => {
    let wrapChildNodes = document.getElementById(containerId).childNodes
    for (let i = 0; i < wrapChildNodes.length; i++) {
      if (
        wrapChildNodes[i].nodeName === "P" &&
        wrapChildNodes[i].childNodes.length > 1
      ) {
        let childList = wrapChildNodes[i].childNodes
        for (let j = 0; j < childList.length; j++) {
          childList.forEach(targetAnchorTag)
        }
      }
    }
  }, [containerId])
}

export default useSetTargetBlank
