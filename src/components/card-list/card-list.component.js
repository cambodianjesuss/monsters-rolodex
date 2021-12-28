import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = (props) => {
  return(
    <div className='card-list'>
      {
        props.monsters.map(monster => <Card key={monster.id} monster={monster} />)
      }
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