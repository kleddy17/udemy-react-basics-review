import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // gives us access to this.state
  constructor() {
    // super calls the constructor method on the component class
    super();
    this.state = {
      string: "Hello Kristi Eddy"
    };
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {this.state.string}
        </p>
      <button 
        onClick={()=> 
        this.setState({string:"Hello Paul"})}>Change Text
      </button>
      </header>
    </div>
  ); }
}

export default App;
