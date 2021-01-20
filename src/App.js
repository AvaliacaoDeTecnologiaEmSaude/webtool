import './styles/Setup.css';
import './styles/App.css';
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
      value: '0',
    }
  }

  changeScore(value) {
    this.setState({
      value: this.state.value + value,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Score value={this.state.value} />
        <Main changeScore={this.changeScore}/>
        <Footer />
      </div>
    );
  }
}

export default App;
