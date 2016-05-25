"use strict";
//One way of declaring a component where the component can have state.

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Heading"
          ),
          React.createElement(
            "th",
            null,
            "Heading"
          ),
          React.createElement(
            "th",
            null,
            "Heading"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          { id: "theRow" },
          React.createElement(
            "td",
            null,
            React.createElement("form", { action: "" })
          )
        )
      )
    )
  );
};

//What did I learned
