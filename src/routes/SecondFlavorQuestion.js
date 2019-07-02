import React from 'react';

export default class SecondFlavorQuestion extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  handleNextClick = () => {
    const {history} = this.props
    history.push('/result')
  }

  render() {
    return (
      <div className='question'>
        <h2>What would the second additional flavor be?</h2>
        <ul>
        <li>
          <input
          type='radio'
          className='radioButton'
          name='radioGroup'
          value='fruity'/>
          <label>
            Fruity
          </label>
        </li>
        <li>
          <input
          type='radio'
          className='radioButton'
          name='radioGroup'
          value='minty'/>
          <label>
            Minty
          </label>
  
        </li>
        <li>
          <input
          type='radio'
          className='radioButton'
          name='radioGroup'
          value='citrus'/>
          <label>
            Citrus
          </label>
  
        </li>
        <li>
          <input
          type='radio'
          className='radioButton'
          name='radioGroup'
          value='bakery'/>
          <label>
            Bakery
          </label>
  
        </li>
        </ul>
        <button onClick={this.handleNextClick}>GET RESULTS</button>
  
    </div>
    )
  }


}