import React from 'react';
import ReactDOM from 'react-dom';
import BaseQuestion from '../BaseQuestion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BaseQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});