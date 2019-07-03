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
      flavor1: '',
      flavor2: '',
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

  handleFirstAddOnFlavorAssign = (e) => {
    e.preventDefault();
    this.setState({
      flavor1: e.target.radioGroup.value
    })
  }

  handleSecondAddOnFlavorAssign = (e) => {
    e.preventDefault();
    this.setState({
      flavor2: e.target.radioGroup.value
    })
  }

  convertToJSON = () => {
    let state = this.state
    let jsonState = JSON.stringify(state)
    console.log(jsonState)
  }

  // componentDidMount() {
  //   fetch(`'someURL'/flavors`)

  // }
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
            render={() => {
              return <FirstFlavorQuestion flavorAssign={this.handleFirstAddOnFlavorAssign} />
            }}
          />
          <Route
            path={'/second'}
            render={() => {
              return <SecondFlavorQuestion
                flavorAssign={this.handleSecondAddOnFlavorAssign}
                jsonify={this.convertToJSON}
              />
            }}
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

