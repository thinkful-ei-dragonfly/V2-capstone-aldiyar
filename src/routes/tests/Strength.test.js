import React from 'react';
import ReactDOM from 'react-dom';
import StrengthQuestion from '../StrengthQuestion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StrengthQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});