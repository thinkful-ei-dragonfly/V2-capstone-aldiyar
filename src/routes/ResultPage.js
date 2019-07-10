import React from 'react';
import './styles/result.css'
import { withRouter } from 'react-router-dom' 

class ResultPage extends React.Component {
  handleHome = () => {
    const {history} = this.props
    history.push('/')
  }
  render() {
    let baseFlavorRes = this.props.state.baseFlavor;
    let firstFlavorRes = this.props.state.firstFlavor;
    let secondFlavorRes = this.props.state.secondFlavor;
    return (
      <div className='result-page'>
        <div className='result'>
          <h3>Our recommendation is:</h3>
          <h2>{baseFlavorRes.flavor} from {baseFlavorRes.brand} mixed with</h2>
          <h2>{firstFlavorRes.flavor} from {firstFlavorRes.brand} and</h2>
          <h2>{secondFlavorRes.flavor} from {secondFlavorRes.brand}</h2>
          <p>{baseFlavorRes.flavor_description} would be a perfect flavor for you.
          Make sure to mix it with {firstFlavorRes.flavor} to get a {firstFlavorRes.flavor_description} notes.
          Top it of with {secondFlavorRes.flavor} to add {secondFlavorRes.flavor_description} to complete the flavor. Enjoy!</p>
        </div>
        <div className='explanation'>
          <h3>What just happened?</h3>
          <p>
            We randomly generated flavors from our ever growing database based on your preference.
            The flavors generated would perfectly fit your liking. Our database is constantly growing.
          </p>
        </div>
        <button
          className="next-button"
          onClick={this.handleHome}>Home</button>
      </div>
    )
  }
 
}

export default withRouter(ResultPage);