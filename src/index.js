//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = () => {
  return (
    <div>
      <label class='label' for='name'>
        Enter Name
      </label>
      <input id='name' />
      <button style={{ backgroundColor: "green", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

//Take the react component and show it on the creen

ReactDOM.render(<App />, document.querySelector("#root"));
