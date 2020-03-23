export const SET_PLATFORM = "SET_PLATFORM"
export const setPLATFORM = width => ({
  type: SET_PLATFORM,
  width,
})
export const TRIGGER_MENU = "TRIGGER_MENU"
export const triggerMenu = trigger => ({
  type: TRIGGER_MENU,
  trigger,
})
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
export const changeLanguage = () => ({
  type: CHANGE_LANGUAGE,
})

export const SAVE_APPLICANT = "SAVE_APPLICANT"
export const saveApplicant = applicant => ({
  type: SAVE_APPLICANT,
  applicant,
})
export const SET_PATHNAME = "SET_PATHNAME"
export const setPathname = pathname => ({
  type: SET_PATHNAME,
  pathname,
})
export const ADD_ADRIR = "ADD_ADRIR"
export const addAdrir = annar => ({
  type: ADD_ADRIR,
  annar,
})
export const RESET_ADRIR = "RESET_ADRIR"
export const resetAdrir = () => ({
  type: RESET_ADRIR,
})
