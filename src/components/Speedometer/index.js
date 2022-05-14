// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  brake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h2 className="speed">Speed is {speed}mph </h2>
        <p className="warning">Min Limit is 0mph, Max limit is 200mph </p>
        <div className="button-container">
          <button
            onClick={this.accelerate}
            type="button"
            className="button-accelerate"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.brake} className="button-brake">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
