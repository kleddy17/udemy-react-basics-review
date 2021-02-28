import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//react needs a unique key because it needs to know which elements to update

// Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

class App extends Component {
  // gives us access to this.state
  constructor() {
    // super calls the constructor method on the component class
    super();
    this.state = {
      monsters: 
      [
      {
        name: 'Frankenstein',
        id: 'ascl'
      },
      {
        name: 'Dracula',
        id: 'asr2',
      },
      {
        name: 'Zombie',
        id:'as2123'
      }
    ]
  }
}
  render() {
  return (
    <div className="App">
      {
        this.state.monsters.map(monster => (
        <h1 key={monster.id}> {monster.name}</h1>))
      }
    </div>
  ); }
}


export default App;
