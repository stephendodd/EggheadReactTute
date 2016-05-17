import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1 })
  }
  componentWillMount(){
    this.setState({
      mult: 2
    })
    console.log('mounting')
  }
  render(){
    console.log('rendering!')
    return (
      <button onClick={this.update}>
        {this.state.val * this.state.mult}</button>
    )
  }
  componentDidMount(){
    console.log(ReactDOM.findDOMNode(this));
    console.log('mounted')
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount(){
    clearInterval(this.inc);
    console.log('bye!')
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
        <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>Unmount</button>
          <div id="a"></div>
        </div>
    )
  }
}

export default Wrapper

//Looked at more examples of what we can do at each of the different component life cycle phases
//In the component will mount we can set the state of some multiplier = 2, then in the render we can use this multiplier to output multiples of 2 each time the button is pressed and re-rendered
//In the did mount we can findDOMNode and display the html we can then set an increment interval to run this.update
//In the unmount we can clear the interval we set in didMount
//It is important to clear the interval before in the unmount phase otherwise we are trying to update a component that has been unmounted.
