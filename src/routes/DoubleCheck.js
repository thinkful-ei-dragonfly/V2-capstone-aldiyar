import React from 'react'
import {withRouter} from 'react-router-dom'



class DoubleCheck extends React.Component {
  
  takeToStart = () => {
    const { history } = this.props
    history.push('/strength')
    console.log('taking to start')
  }

  takeToNext = () => {
    const { history } = this.props
    history.push('/result')
    console.log('taking to result')
  }
  
  takeToResults = () => {
    this.props.populateReturned();
    this.takeToNext()
  }
  

  render() {
    return (
      <div className='doubleCheck'>
        <div>
          <h2>You selected:</h2>
          <p>{this.props.state.strength} as the strength level</p>
          <p>{this.props.state.base} as the base flavor profile</p>
          <p>{this.props.state.flavor1} as your first add on flavor</p>
          <p>{this.props.state.flavor2} as your second add on flavor</p>
        </div>
        <div>
          <h3>Are you happy with your selection?</h3>
        </div>
        <div>
          <button onClick={this.takeToResults}>YES, GET RESULTS</button>
          <button onClick={this.takeToStart}>NO, LET ME CHOOSE AGAIN</button>
        </div>
        
      </div>
      
    )
  }
}

export default withRouter(DoubleCheck)
