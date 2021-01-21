import './styles/Setup.css';
import './styles/App.css';
import './styles/Header.css';
import './styles/Score.css';
import './styles/Footer.css';
import './styles/MediaQueries.css';
import './styles/Animations.css';

import React, { Component } from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Score from './Score.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div className="App">
        <Header />
        <Score Geral={this.state.Geral}
          Resultado={this.state.Resultado}
          //PLACE TO ADD NEW DIMENSION
        />
        <Main changeScore={this.changeScore} />
        <Footer />
      </div>
    );
  }
}

export default App;
