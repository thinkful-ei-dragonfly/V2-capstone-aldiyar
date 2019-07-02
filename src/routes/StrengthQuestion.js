import React from 'react';

export default function StrengthQuestion() {

  return(
    <div className='question'>
      <h2>How strong would you like your hookah to be?</h2>
      <ul>
      <li>
        <input
        type='radio'
        className='radioButton'
        name='radioGroup'/>
        <label>
          Strong
        </label>
      </li>
      </ul>
      
    </div>
  )
}