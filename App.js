"use strict"
//One way of declaring a component where the component can have state.
const App = () => {
  return (
    <div>
    <table>
    <thead>
    <tr>
    <th>Heading</th>
    <th>Heading</th>
    <th>Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr id="theRow">
    <td>
    <form action=""></form>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

  );
}

//What did I learn
//Can use babel cli to see the JSX in this file transpiled into JS in the dist.js output file using the command "babel --presets react App.js -o dist.js --watch"
//Can see that the corresponding compiled JS is more complicated compared to the JSX
//If working with a designer the power of JSX is that we can directly insert html and it will automatically be rendered.
