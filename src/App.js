import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asci1"
        },
        {
          name: "Dracula",
          id: "asci2"
        },
        {
          name: "Zombie",
          id: "asci3"
        }
      ]
    }
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => console.log(users))
  }

  render(){
    return(
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    )
  }
}

export default App;

// {} JS expression inside JSX
// Every time state changes/updates -- the render function re-renders