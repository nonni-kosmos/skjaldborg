export const SET_PLATFORM = "SET_PLATFORM"
export const setPLATFORM = width => ({
  type: SET_PLATFORM,
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
export const TRIGGER_MENU = "TRIGGER_MENU"
export const triggerMenu = trigger => ({
  type: TRIGGER_MENU,
  trigger,
})
export const TRIGGER_RED_CURSOR = "TRIGGER_RED_CURSOR"
export const triggerRedCursor = trigger => ({
  type: TRIGGER_RED_CURSOR,
  trigger,
})
export const SET_RED_CURSOR_SIZE = "SET_RED_CURSOR_SIZE"
export const setRedCursorSize = size => ({
  type: SET_RED_CURSOR_SIZE,
  size,
})
export const SELECT_MOVIE = "SELECT_MOVIE"
export const selectMovie = movieId => ({
  type: SELECT_MOVIE,
  movieId,
})
