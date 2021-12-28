import React from 'react';
import './card-list-styles.css'

export const CardList = (props) => {
  return(
    <div className='card-list'>
      {props.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
    </div>
    )
}

// export const CardList2 = (props) => {
//   console.log(props)
//   return(<div>Hello, 2</div>)
// }

/*
Below is a prop, accessed as object property, prop.age
<SomeComponent age="24"></SomeComponent>

Below represents prop children between the component, accessed prop.children
<SomeComponent age="24">
  <p>This is a prop child</p>
  <p>This is another prop child</p>
</SomeComponent>
*/