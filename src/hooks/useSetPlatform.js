import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { SET_PLATFORM } from "../state/action"

const setPlatform = dispatch =>
  dispatch({ type: SET_PLATFORM, width: window.innerWidth })

const useSetPlatform = () => {
  const [detected, setDetected] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setPlatform(dispatch)
    window.addEventListener("resize", () => setPlatform(dispatch))
    setDetected(true)
    return () => {
      window.removeEventListener("resize", () => setPlatform(dispatch))
    }
  }, [dispatch])
  return detected
}

export default useSetPlatform
