// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstNameClicked: false,
    lastNameClicked: false,
  }

  renderFirstName = () => {
    let {firstNameClicked} = this.state
    if (firstNameClicked === true) {
      return (
        <div className="cont">
          <h1>Joe</h1>
        </div>
      )
    }
  }
  renderLastName = () => {
    let {lastNameClicked} = this.state
    if (lastNameClicked === true) {
      return (
        <div className="cont">
          <h1>Jonas</h1>
        </div>
      )
    }
  }
  firstNameStatus = () => {
    let {firstNameClicked} = this.state
    if (firstNameClicked === true) {
      this.setState({firstNameClicked: false})
    } else {
      this.setState({firstNameClicked: true})
    }
  }
  lastNameStatus = () => {
    let {lastNameClicked} = this.state
    if (lastNameClicked === true) {
      this.setState({lastNameClicked: false})
    } else {
      this.setState({lastNameClicked: true})
    }
  }

  render() {
    return (
      <div className="the-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="butt">
            <button className="button" onClick={this.firstNameStatus}>
              Show/Hide Firstname
            </button>
            {this.renderFirstName}
          </div>
          <div className="butt">
            <button className="button" onClick={this.lastNameStatus}>
              Show/Hide Lastname
            </button>
            {this.renderLastName}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
