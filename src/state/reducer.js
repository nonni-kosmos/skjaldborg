import {
  SET_PLATFORM,
  TRIGGER_MENU,
  CHANGE_LANGUAGE,
  SAVE_APPLICANT,
  SET_PATHNAME,
  ADD_ADRIR,
  RESET_ADRIR,
  POSTLIST,
} from "./action"

const initialState = {
  platform: null,
  menu: `closed`,
  icelandic: true,
  applicant: null,
  pathname: "/",
  adrir: [],
  postlisted: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLATFORM:
      let platform
      if (action.width <= 750) {
        platform = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        platform = `tablet`
      }
      if (action.width > 1050) {
        platform = `desktop`
      }
      return { ...state, platform: platform }
    case TRIGGER_MENU:
      return { ...state, menu: action.trigger }
    case CHANGE_LANGUAGE:
      return { ...state, icelandic: !state.icelandic }
    case SAVE_APPLICANT:
      return { ...state, applicant: action.applicant }
    case SET_PATHNAME:
      return { ...state, pathname: action.pathname }
    case ADD_ADRIR:
      let list = state.adrir

      // already exists, let's update it
      if (list[action.annar.id]) {
        console.log("Uppfæri númer " + action.annar.id)
        list[action.annar.id] = action.annar
        return { ...state, adrir: [...list] }
      } else {
        // append if not exists
        return { ...state, adrir: [...state.adrir, action.annar] }
      }
    case RESET_ADRIR:
      return { ...state, adrir: [] }
    case POSTLIST:
      return { ...state, postlisted: true }
    default:
      return state
  }
}

export default reducer
