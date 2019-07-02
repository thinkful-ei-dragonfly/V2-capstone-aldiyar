import React from 'react';

export default function BaseQuestion() {
  return (
    <div className='question'>
      <h2>What the base flavor would be?</h2>
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