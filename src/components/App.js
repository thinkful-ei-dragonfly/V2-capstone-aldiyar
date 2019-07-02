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

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strength: '',
      base: '',
      flavor_1: '',
      flavor_2: '',
    }
  }
  handleStrengthAssign = (e) => {
    e.preventDefault();
    this.setState({
      strength: e.target.radioGroup.value
    })
    
  }

  handleBaseFlavorAssign = (e) => {
    e.preventDefault();
    this.setState({
      base: e.target.radioGroup.value
    })
  }

  componentDidMount() {
    fetch(`'someURL'/flavors`)

  }
  render() {
    console.log(this.state)
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
            render = { () => {
              return <StrengthQuestion strengthAssign={this.handleStrengthAssign} />
            }}
          />
          <Route 
            path={'/base'}
            render = { () => {
              return <BaseQuestion baseAssign={this.handleBaseFlavorAssign} />
            }}
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

