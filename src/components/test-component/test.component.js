import React, { Component } from "react";
import {SearchBox} from '../search-box/search-box.component'

class TestComponent extends Component {

  render(){
    return(
      <SearchBox placeholder="testing" handleChange={()=>console.log('change change')} />
    )
  }
}

export default TestComponent;