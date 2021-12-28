import React, {Component} from "react";
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import TestComponent from './components/test-component/test.component'

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="App">
        <CardList name="Boi">
          <h1>This is a property of props object call children</h1>
          <h2>Another property called children</h2>
        </CardList>
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