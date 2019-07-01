import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      preferrence: {
        strength: '',
        base: '',
        additional_1: '',
        additional_2: '',
      },
      result: ''
  }
  render() {
    return (
      <div className="App">
        <h1>Vkuss </h1>
        <Switch>
          <Route
            path={'/strength'}
            component={StrengthQuestion}
          />
          <Route 
            path={'/base'}
            component={BaseQuestion}
          />
          <Route
            path={'/first'}
            component={FirstFlavorQuestion}
          />
          <Route
            path={'/second'}
            component={SecondFlavorQuestion}
          />
          <Route
            path={'/result'}
            component={ResultPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
        
      </div>
    );
  }

}

export default App;
