import React from 'react';
import './styles/question.css';


class StrengthQuestion extends React.Component {

  handleNextClick = (e) => {
    const {history} = this.props
    this.props.strengthAssign(e)
    history.push('/base')
  }

  render() {
    return(
      <div className='question'>
        <h3>How strong would you like your hookah to be?</h3>
        <form onSubmit={this.handleNextClick}>
          <ul>
            <li>
            <label>
              <input
              type='radio'
              className='radioButton'
              name='radioGroup'
              value='strong'/>
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
          <button className="next-button" type='submit'>NEXT</button>
        </form>
  
  
      </div>
      )
  }


}

export default StrengthQuestion;