import React from 'react';

export const CardList = (props) => {
  console.log(props) // logging
  console.log(props.children)
  return(<div>{props.children}</div>)
}

// export const CardList2 = (props) => {
//   console.log(props)
//   return(<div>Hello, 2</div>)
// }