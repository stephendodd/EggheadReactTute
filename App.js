import React from 'react'

//One way of declaring a component where the component can have state.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: ''
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
      onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}

//Another method for declaring a component where the component is stateless
//const App = () => <h1>Hello world</h1>

export default App

//In this example we created a new component called widget, by doing this it means that we can now create multiple versions of this widget very easily around the page by copying and pasting the widget component code.
