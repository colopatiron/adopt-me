const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Python"),
    React.createElement("h1", {}, "Nikolai"),
    React.createElement("h1", {}, "Orange"),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {id: "an-id"},
    [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
    ]
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
