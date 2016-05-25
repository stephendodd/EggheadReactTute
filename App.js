import React from 'react';

class App extends React.Component {
  const App = (props) => {
  var myStyle = {
  backgroundColor:"#000",
  height: 10
  }
  return (
  <div style={myStyle}>
  <a href="#"
  notrendered="x"
  onClick={update}>
  {/*This is a comment*/}
  this is the text
  {i>1 ? "More than 1" : "1"}
  </a>
  </div>
  )
  }
}

export default App

//What did I learn
//How the 
