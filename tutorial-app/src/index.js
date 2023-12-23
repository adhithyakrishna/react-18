import React from 'react'
import ReactDOM from 'react-dom/client'

// function Greeting() {
//   return <h3> My First Component </h3>;
// }

// function Greeting() {
//   return React.createElement('h2', {}, 'hello World')
// }

// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello World')
//   )
// }

/*
function Greeting() {
  return (
    <React.Fragment>
      <div>1st child</div>
      <div>2nd child</div>
    </React.Fragment>
  )
}*/

/* 
  Notice the camelCase in className as well as readOnly
  All elements that do not have closing tag, we need to self close them.
*/
// function Greeting() {
//   return (
//     <div className="helloworld" tabIndex={1}>
//       <input readOnly={true} id="name" />
//     </div>
//   )
// }

/* How to nest components */
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}
const Person = () => <h2>John doe</h2>
const Message = () => {
  return <p> This is my message </p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
