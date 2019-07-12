import React from 'react';


class BaseQuestion extends React.Component {

  handleNextClick = (e) => {
    const { history } = this.props
    this.props.baseAssign(e)
    history.push('/first')
  }

  render() {
    return (
      <div className='question'>
        <h3>What the base flavor would be?</h3>
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
          <button className="next-button" type='submit'>NEXT</button>
        </form>
  
        
      </div>
    )
  }
  
}

export default BaseQuestion