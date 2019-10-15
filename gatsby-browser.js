import React from "react"
import { Provider } from "react-redux"
import { createStore as createThisStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyle } from "./src/components/GlobalStyle"
import Wrap from "./src/components/Wrap"

const createStore = () => createThisStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <Wrap>
        <GlobalStyle></GlobalStyle>
        {element}
      </Wrap>
    </Provider>
  )
}
