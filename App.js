import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0}
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount(){
    console.log('mounted')
  }

  render(){
    return (
        <button onClick={this.update}>
          {this.props.txt} - {this.state.val}
        </button>
    );
  }

}
App

App.defaultProps = {txt: 'button'}

export default App
