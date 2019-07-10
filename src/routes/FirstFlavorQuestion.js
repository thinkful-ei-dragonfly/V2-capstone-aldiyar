import React from 'react';
import './styles/question.css'
import { withRouter } from 'react-router-dom'

class FirstFlavorQuestion extends React.Component {

  handleNextClick = (e) => {
    const { history } = this.props
    this.props.flavorAssign(e)
    history.push('/second')
    console.log('assigning first add on')
  }

  render() {
    return (
      <div className='question'>
        <h3>What would the first additional flavor be?</h3>
        <form
          className='first-form'
          onSubmit={this.handleNextClick}>
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
          <button
            className="next-button"
            type='submit'>NEXT</button>
        </form>
        
  
      </div>
    )
  }

}

export default withRouter(FirstFlavorQuestion)