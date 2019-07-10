import React from 'react';
import './styles/welcome.css';

export default class Welcome extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleButtonClick = () => {
    const { history } = this.props
    history.push('/strength')
  }

  render() {
    return(
      <div className='welcome-page-grid'>
        <div className='hero'>
          <h1>WELCOME TO THE LAND OF FLAVORS!</h1>
        </div>
        <div className='description-first'>
          <h3>What is it?</h3>
          <p>VkusS determines your perfect hookah flavor based on 4 simple questions.
            Answer these questions and we are going to generate a flavor that would 
            perfectly fit your liking!
          </p>
        </div>
        <div className='description-second'>
          <h3>How it works?</h3>
          <p>Our database is crafted from the most popular flavors available to the market at the moment. 
            This database is constantly growing and maintained by the developers of this application. 
            In case there is a new brand that is gaining traction in the market. Please let us know so we could add them to the list!
          </p>
        </div>
        <div className='start'>
          <h3>Click the button below to start!</h3>
          <button
            className='start-button'
            type='submit'
            onClick={this.handleButtonClick}
          >
            Start the App
          </button>
        </div>
        
      </div>
    )
  }
 
}