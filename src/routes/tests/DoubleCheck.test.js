import React from 'react';
import ReactDOM from 'react-dom';
import DoubleCheck from '../DoubleCheck';

it('renders without crashing', () => {
  const state = {
    strength: 'medium',
    base: 'citrus',
    flavor1: 'citrus',
    flavor2: 'minty'
  }
  const div = document.createElement('div');
  ReactDOM.render(<DoubleCheck state={state}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});