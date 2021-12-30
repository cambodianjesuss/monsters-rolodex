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
      searchField: '',
    }
    // Binding `this` to the context of component when not using arrow function
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err))
  }

  handleChange = (e) =>{
    // Context of `this` is not set to function until bind in constructor function
    console.log(this)
    this.setState({ searchField: e.target.value, title: e.target.value})
  }

  // anotherFunction (){
  //   const name = "Boi Function This"
  //   console.log(this)
  // }

  
  render(){

    // Using state but not modifying data, just reading change
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange} // `this` keyword only refers to the function not the component `this` until binding it in constructor function
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

// {} JS expression inside JSX
// Every time state changes/updates -- the render function re-renders
// Arrow functions can set `this` context to what ever defined it -- it get's lexical scoping