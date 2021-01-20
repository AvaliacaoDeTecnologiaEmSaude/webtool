import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Score from './Score.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Score value="10" />      
      <Main />

      <Footer />
    </div>
  );
}

export default App;
