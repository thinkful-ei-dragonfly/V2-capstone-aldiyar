import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../App.css';
import StrengthQuestion from '../routes/StrengthQuestion';
import BaseQuestion from '../routes/BaseQuestion';
import FirstFlavorQuestion from '../routes/FirstFlavorQuestion';
import SecondFlavorQuestion from '../routes/SecondFlavorQuestion';
import ResultPage from '../routes/ResultPage';
import NotFoundPage from '../routes/NotFoundPage';
import Welcome from '../routes/Welcome'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h1>Vkuss</h1>
        <Switch>
          <Route
            exact path={'/'}
            component={Welcome}
          />
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
