import React from 'react'
import ReactDOM from 'react-dom'

//One way of declaring a component where the component can have state.
class App extends React.Component {
  render() {
    let txt=this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'This is the default text'
}

//Another method for declaring a component where the component is stateless
//const App = () => <h1>Hello world</h1>
ReactDOM.render(
  //<App cat={5} txt="this is the props value" />,
  <App cat={5} />,
  document.getElementById('app')
);

//In this lesson we looked at App.defaultprops to define the default value of our props and App.PropTypes to define the types of our props
