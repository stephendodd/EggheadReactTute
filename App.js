import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render(){
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range"
          min="0" max="255"
        onChange={this.props.update} />
      </div>
    );
  }
}

export default App

//What was created in this lesson

//Three slider components that ranged from 0 to 255 were created to represent red green and blue.
//The ref property was used to refer to a particular component
//Set state was introduced to update the state of our App components properties of red, green and blue
