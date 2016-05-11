import React from 'react'

//One way of declaring a component where the component can have state.
class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'this is the state text'}
  }
  update(e){
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
       <div>
       <input type="text"
          onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
       </div>
     )
  }
}

//Another method for declaring a component where the component is stateless
//const App = () => <h1>Hello world</h1>

export default App

//In this lesson we will learn about state
//We can update our h1 label state in realtime through the input text box
//As we type into the input our h1 tag is updated.
