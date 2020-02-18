export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const GET_FIREBASE = "GET_FIREBASE"
export const getFirebase = firebase => ({
  type: GET_FIREBASE,
  firebase,
})
export const AUTHENTICATE = "AUTHENTICATE"
export const authenticate = user => ({
  type: AUTHENTICATE,
  user,
})
