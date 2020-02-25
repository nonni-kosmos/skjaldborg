import {
  SET_PLATFORM,
  TRIGGER_MENU,
  TRIGGER_RED_CURSOR,
  SET_RED_CURSOR_SIZE,
} from "./action"

const initialState = {
  platform: null,
  menu: `closed`,
  redCursor: `hide`,
  redCursorSize: `large`,
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
    case TRIGGER_RED_CURSOR:
      return { ...state, redCursor: action.trigger }
    case SET_RED_CURSOR_SIZE:
      return { ...state, redCursorSize: action.size }
    default:
      return state
  }
}

export default reducer
