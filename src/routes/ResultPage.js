import React from 'react';
import './styles/result.css'
import ClipLoader from 'react-spinners/ClipLoader';
import {css} from '@emotion/core';


class ResultPage extends React.Component {
  handleHome = () => {
    const {history} = this.props
    history.push('/')
  }

  renderLoading() {
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
    let baseFlavorRes = this.props.state.baseFlavor;
    let firstFlavorRes = this.props.state.firstFlavor;
    let secondFlavorRes = this.props.state.secondFlavor;
    if (this.props.state.loading) {
      return (
        <div className='result-page'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.props.state.loading}
          />
        </div>
      )
    } else {
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
  render() {
    return (
      this.renderLoading()
    )
  }
 
}

export default ResultPage;