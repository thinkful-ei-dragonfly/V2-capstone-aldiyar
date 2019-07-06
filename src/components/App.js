import React from 'react';
import config from '../config';
import {Route, Switch} from 'react-router-dom';
import '../App.css';
import StrengthQuestion from '../routes/StrengthQuestion';
import BaseQuestion from '../routes/BaseQuestion';
import FirstFlavorQuestion from '../routes/FirstFlavorQuestion';
import SecondFlavorQuestion from '../routes/SecondFlavorQuestion';
import ResultPage from '../routes/ResultPage';
import NotFoundPage from '../routes/NotFoundPage';
import Welcome from '../routes/Welcome'
import DoubleCheck from '../routes/DoubleCheck'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strength: '',
      base: '',
      flavor1: '',
      flavor2: '',
      returnedFlavors: [],
      baseFlavor: {},
      firstFlavor: {},
      secondFlavor: {},
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

  handleGetFlavors = () => {
    fetch(`${config.API_ENDPOINT}/flavors/${this.state.strength}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(flavors => {
        this.setState({
          returnedFlavors: flavors
        })
      })
      .then(this.state.base => {
        this.handlePopulateBase(this.state.base)
      })
      .then(this.handlePopulateFirstFlavor)
      .then(this.handlePopulateSecondFlavor)
  }

  handlePopulateBase = (profile) => {
    let baseFlavors = this.state.returnedFlavors.filter(flavor => 
      flavor.flavor_profile === profile
    )
    this.setState({
      baseFlavor: baseFlavors[Math.random(Math.floor()*baseFlavors.length)]
    })
    console.log(baseFlavors)
  }

  handlePopulateFirstFlavor = () => {
    let firstFlavors = this.state.returnedFlavors.filter(flavor =>
      flavor.flavor_profile === this.state.flavor1
    )
    this.setState({
      firstFlavor: firstFlavors[Math.random(Math.floor()*firstFlavors.length)]
    })
  }

  handlePopulateSecondFlavor = () => {
    let secondFlavors = this.state.returnedFlavors.filter(flavor => 
      flavor.flavor_profile === this.state.flavor2
    )
    this.setState({
      secondFlavor: secondFlavors[Math.random(Math.floor()*secondFlavors.length)]
    })
  }


 




  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>VkusS</h1>
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
              />
            }}
          />
          <Route
            path={'/doublecheck'}
            render={() => {
              return <DoubleCheck
                state={this.state}
                populateReturned={this.handleGetFlavors}
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

