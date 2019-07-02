import React from 'react';
import {withRouter} from 'react-router-dom';

class StrengthQuestion extends React.Component {

  handleNextClick = (e) => {
    const {history} = this.props
    console.log(history)
    this.props.strengthAssign(e)
    history.push('/base')
    console.log('pushing')
  }

  render() {
    return(
      <div className='question'>
        <h2>How strong would you like your hookah to be?</h2>
        <form onSubmit={this.handleNextClick}>
          <ul>
            <li>
              <input
              type='radio'
              className='radioButton'
              name='radioGroup'
              value='strong'/>
              <label>
                Strong
              </label>
  
            </li>
            <li>
              <input
              type='radio'
              className='radioButton'
              name='radioGroup'
              value='medium'/>
              <label>
                Medium
              </label>
  
            </li>
            <li>
              <input
              type='radio'
              className='radioButton'
              name='radioGroup'
              value='soft'/>
              <label>
                Soft
              </label>
  
            </li>
          </ul>
          <button type='submit'>NEXT</button>
        </form>
  
  
      </div>
      )
  }


}

export default withRouter(StrengthQuestion);