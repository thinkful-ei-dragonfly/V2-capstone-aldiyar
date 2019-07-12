import React from 'react';
import ReactDOM from 'react-dom';
import ResultPage from '../ResultPage';

it('renders without crashing', () => {
  const state = {
    baseFlavor: {
      id: 1,
      strength: "soft",
      flavor: "Blue Mist",
      brand: "Starbuzz",
      flavor_profile: "fruity",
      flavor_description: "Mixture of Blueberry with a hint of freshness"
      },
    firstFlavor: {
      id: 2,
      strength: "soft",
      flavor: "Citrus Mist",
      brand: "Starbuzz",
      flavor_profile: "citrus",
      flavor_description: "Mixture of Citrus fruits with a hint of freshness"
      },
    secondFlavor: {
      id: 3,
      strength: "soft",
      flavor: "Safari Melon Dew",
      brand: "Starbuzz",
      flavor_profile: "fruity",
      flavor_description: "Mouthwatering melon flavor"
      }

  }
  const div = document.createElement('div');
  ReactDOM.render(<ResultPage state={state}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});