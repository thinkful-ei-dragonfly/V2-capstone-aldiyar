import React from 'react';
import { withRouter } from 'react-router-dom';

class BaseQuestion extends React.Component {

  handleNextClick = (e) => {
    const { history } = this.props
    this.props.baseAssign(e)
    history.push('/first')
    console.log('assigning base flavor')
  }

  render() {
    return (
      <div className='question'>
        <h2>What the base flavor would be?</h2>
        <form 
          className='base-form'
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
          <button type='submit'>NEXT</button>
        </form>
  
        
      </div>
    )
  }
  
}

export default withRouter(BaseQuestion)