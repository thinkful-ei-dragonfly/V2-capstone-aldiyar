import React from 'react';

export default class Result extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  handleHome = () => {
    const {history} = this.props
    history.push('/')
  }
  render() {
    return (
      <div className='result-page'>
        <div className='result'>
          <h2>Our recommendation is: 'FLAVOR'</h2>
          <p>Here we are going to give breif description</p>
          <button>Show Me More</button>
        </div>
        <div className='explanation'>
          <h3>Here we are going to explain what we did and what is going on</h3>
        </div>
        <button onClick={this.handleHome}>Home</button>
      </div>
    )
  }
 
}