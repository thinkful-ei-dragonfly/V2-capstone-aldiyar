import React from 'react'
import './styles/doublecheck.css';




class DoubleCheck extends React.Component {
  
  takeToStart = () => {
    const { history } = this.props
    history.push('/strength')
  }

  takeToNext = () => {
    const { history } = this.props
    history.push('/result')
  }
  
  takeToResults = () => {
    this.props.populateReturned();
    this.takeToNext()
  }
  

  render() {
    return (
      <div className='doubleCheck'>
        <div className="doubleCheck-info">
          <h3>You selected:</h3>
          <p>{this.props.state.strength} as the strength level</p>
          <p>{this.props.state.base} as the base flavor profile</p>
          <p>{this.props.state.flavor1} as your first add on flavor</p>
          <p>{this.props.state.flavor2} as your second add on flavor</p>
        </div>
        <div className="doubleCheck-buttons">
          <h3>Are you happy with your selection?</h3>
          <button className="next-button" id="yes" onClick={this.takeToResults}>YES, GET RESULTS</button>
          <button className="next-button" id="no" onClick={this.takeToStart}>NO, LET ME CHOOSE AGAIN</button>
        </div>
        
      </div>
      
    )
  }
}

export default DoubleCheck
