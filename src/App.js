import React, { Component } from 'react';
import './App.css';
import Header from  './Header';
import ProgressBlock from  './ProgressBlock';
import Vocabulary from  './Vocabulary';
import Footer from  './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="header">
              <ProgressBlock/>
              <Vocabulary/>
          </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
