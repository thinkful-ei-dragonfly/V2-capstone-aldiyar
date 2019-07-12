import React from 'react';
import ReactDOM from 'react-dom';
import FirstFlavorQuestion from '../FirstFlavorQuestion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstFlavorQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});