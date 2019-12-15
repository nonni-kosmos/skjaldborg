import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"
import { setDevice } from "../state/action"
import { GlobalStyle } from "../components/GlobalStyle"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }
  callBack() {
    const { dispatch } = this.props
    dispatch(setDevice(window.innerWidth))
  }
  render() {
    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        {this.props.children}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Layout)
