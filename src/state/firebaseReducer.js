import { GET_FIREBASE, AUTHENTICATE } from "./action"

const initialState = {
  firebase: null,
  firestore: null,
  profile: null,
}

export const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIREBASE:
      return {
        ...state,
        firebase: action.firebase,
        firestore: action.firebase.firestore(),
      }
    case AUTHENTICATE:
      return { ...state, profile: action.profile }
    default:
      return state
  }
}

export default firebaseReducer
