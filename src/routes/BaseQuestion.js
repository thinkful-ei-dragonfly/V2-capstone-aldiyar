import React from 'react';

export default class BaseQuestion extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  handleNextClick = () => {
    const {history} = this.props
    history.push('/first')
  }

  handleBaseAssign = (e) => {
    e.preventDefault()
    let strength = {
      strength: e.target.value
    }
    console.log(strength) 
  }
  render() {
    return (
      <div className='question'>
        <h2>What the base flavor would be?</h2>
        <form 
          className='base-form'
          onSubmit={this.handleBaseAssign}>
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
          <button onClick={this.handleNextClick}>NEXT</button>
        </form>
  
        
      </div>
    )
  }
  
}