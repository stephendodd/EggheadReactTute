import React from 'react'

//One way of declaring a component where the component can have state.
class App extends React.Component {
  render() {
    //Note we have to wrap our h1 and bold tags in a div as the return statement can only return 1 single node.
    return (
      <div>
        <h1>Hello world</h1><b>Bold</b>
      </div>
    )
  }
}

//Another method for declaring a component where the component is stateless
//const App = () => <h1>Hello world</h1>

export default App
