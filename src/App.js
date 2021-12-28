import React, {Component} from "react";
import { CardList } from './components/card-list/card-list.component'
import './App.css';

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
        <input type='search' placeholder="search monsters"/>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;

// {} JS expression inside JSX
// Every time state changes/updates -- the render function re-renders