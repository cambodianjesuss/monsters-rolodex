import React, {Component} from "react";
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
      .catch(err => console.log('I errored'))

    const myPromise = new Promise((resolve, reject) =>{
      if(false){
        setTimeout(function(){
          resolve("Worked")
        }, 1000)
      } else {
        reject("Failed")
      }
    })

    myPromise
    .then(value => console.log(value))
    .catch(errValue => console.log(errValue))
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