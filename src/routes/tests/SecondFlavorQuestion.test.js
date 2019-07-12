import React from 'react';
import ReactDOM from 'react-dom';
import SecondFlavorQuestion from '../SecondFlavorQuestion'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondFlavorQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});