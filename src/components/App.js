import React from 'react';
import config from '../config';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../routes/styles/App.css';
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
      strength: 'not selected',
      base: 'not selected',
      flavor1: 'not selected',
      flavor2: 'not selected',
      returnedFlavors: [],
      baseFlavor: {},
      firstFlavor: {},
      secondFlavor: {},
      loading:true,
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
    this.setState({loading:true}, () => {
      fetch(`${config.API_ENDPOINT}/flavors/${this.state.strength}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(flavors => {
        this.setState({
          returnedFlavors: flavors,
        })
        let baseFlavors = this.state.returnedFlavors.filter(flavor => 
          flavor.flavor_profile === this.state.base
        )
        let firstFlavors = this.state.returnedFlavors.filter(flavor =>
          flavor.flavor_profile === this.state.flavor1
        )
        let secondFlavors = this.state.returnedFlavors.filter(flavor => 
          flavor.flavor_profile === this.state.flavor2
        )
        this.setState({
          baseFlavor: baseFlavors[Math.floor(Math.random() * baseFlavors.length)],
          firstFlavor: firstFlavors[Math.floor(Math.random() * firstFlavors.length)],
          secondFlavor: secondFlavors[Math.floor(Math.random()*secondFlavors.length)],
          loading: false
        })
      })
    })

  }

  render() {
    return (
      <div className="App">
        <nav>
        <header className='header' role='banner'>
          <h1>VkusS</h1>
        </header>
        </nav>
        <main>
          <BrowserRouter>
          <Switch>
            <Route
              exact path={'/'}
              component={Welcome}
            />
            <Route
              path={'/strength'}
              render = { (props) => {
                return <StrengthQuestion {...props} strengthAssign={this.handleStrengthAssign} />
              }}
            />
            <Route 
              path={'/base'}
              render = { (props) => {
                return <BaseQuestion {...props} baseAssign={this.handleBaseFlavorAssign} />
              }}
            />
            <Route
              path={'/first'}
              render={(props) => {
                return <FirstFlavorQuestion {...props} flavorAssign={this.handleFirstAddOnFlavorAssign} />
              }}
            />
            <Route
              path={'/second'}
              render={(props) => {
                return <SecondFlavorQuestion
                  {...props}
                  flavorAssign={this.handleSecondAddOnFlavorAssign}
                />
              }}
            />
            <Route
              path={'/doublecheck'}
              render={(props) => {
                return <DoubleCheck
                  {...props}
                  state={this.state}
                  populateReturned={this.handleGetFlavors}
                />
              }}
              />
            <Route
              path={'/result'}
              render={(props) => {
                return <ResultPage
                  {...props}
                  state={this.state}
                />
              }}
            />
            <Route
              component={NotFoundPage}
            />
            </Switch>
          </BrowserRouter>
        </main> 
        <footer role='contentinfo'>

        </footer>
        
      </div>
    );
  }

}

