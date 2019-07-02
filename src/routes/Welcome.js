import React from 'react';

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
      <div>
        <h1>This is Welcome</h1>
        <button 
          type='submit'
          onClick={this.handleButtonClick}
        >
          Start the App
        </button>
      </div>
    )
  }
 
}