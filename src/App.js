import React, {Component} from "react";
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from "./components/search-box/search-box.component";
// import TestComponent from "./components/test-component/test.component";
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err))
  }

  render(){

    // Using state but not modifying data, just reading change
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return(
      <div className="App">
        <SearchBox 
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

// {} JS expression inside JSX
// Every time state changes/updates -- the render function re-renders