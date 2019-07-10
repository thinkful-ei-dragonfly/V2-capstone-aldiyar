import React from 'react';
import { withRouter } from 'react-router-dom'

class SecondFlavorQuestion extends React.Component {

  handleNextClick = (e) => {
    const { history } = this.props
    this.props.flavorAssign(e)
    // this.props.jsonify()
    history.push('/doublecheck')
    console.log('assigning second add on')
  }

  render() {
    return (
      <div className='question'>
        <h3>What would the second additional flavor be?</h3>
        <form
          className='form'
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
            type='submit'>FINALIZE</button>
  
        </form>
        
    </div>
    )
  }


}

export default withRouter(SecondFlavorQuestion)