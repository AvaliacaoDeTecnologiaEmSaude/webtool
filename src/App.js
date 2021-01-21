import './styles/Setup.css';
import './styles/App.css';
import './styles/Header.css';
import './styles/Score.css';
import './styles/Footer.css';
import './styles/MediaQueries.css';
import './styles/Animations.css';

//Authentication:
import Login from './Login.js';
import Preferences from './Preferences.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React, { Component } from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Score from './Score.js';
import Dashboard from './Dashboard.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoggedIn: false,
      Geral: [0],
      Resultado: [0],
      //PLACE TO ADD NEW DIMENSION
    }
  }

  changeScore = (newValue) => {
    let v = newValue.split(",");
    let type = v[0];
    let id = parseInt(v[1]);
    let value = parseInt(v[2]);

    let vG = this.state.Geral;
    let vR = this.state.Resultado;

    switch (type) {
      case 'Geral':
        vG[id] = value;
        break;
      case 'Resultado':
        vR[id] = value;
        break;
      //PLACE TO ADD NEW DIMENSION
      default:
        break;
    }

    this.setState({
      Geral: vG,
      Resultado: vR,
      //PLACE TO ADD NEW DIMENSION
    });
  }

  changeLogInState = (value) => {
    this.setState({
      LoggedIn: value,
    })
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Header
                LoggedIn={this.state.LoggedIn}
                changeLogInState={this.changeLogInState}
              />
              <Dashboard />

            </Route>
            <Route path="/preferences">
              <Header
                LoggedIn={this.state.LoggedIn}
              />
              <Preferences />
            </Route>
            <Route path="/">
              {this.state.LoggedIn ?
                <fragment>
                  <Header
                    LoggedIn={this.state.LoggedIn}
                    changeLogInState={this.changeLogInState}
                  />
                  <Score Geral={this.state.Geral}
                    Resultado={this.state.Resultado}
                  //PLACE TO ADD NEW DIMENSION
                  />
                  <Main changeScore={this.changeScore} />
                </fragment> :
                <fragment>
                  <Header
                    LoggedIn={this.state.LoggedIn}
                    changeLogInState={this.changeLogInState}
                  />
                  
                  <Login
                    changeLogInState={this.changeLogInState}
                  />
                  
                </fragment>}
              

            </Route>
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
