import React, {Component} from 'react';
import './App.css';


import {Cardlist} from './components/card-list/card-list.component'
//react needs a unique key because it needs to know which elements to update

// Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

//Component is part of the react library

//class app extends component means "hey, i want whatever the functionality that component comes with and i want to add on to it"

/// lifecycle methods are methods that get called at different stages when this component gets rendered

//when this componentdoesmount is when react puts the components on the page


class App extends Component {
  // gives us access to this.state
  constructor() {
    // super calls the constructor method on the component class
    super();
    this.state = {
      monsters: []
    
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}))
}

  render() {
  return (
    <div className="App">
      <Cardlist />
      {
        this.state.monsters.map(monster => (
        <h1 key={monster.id}> {monster.name}</h1>))
      }
    </div>
  ); }
}


export default App;
