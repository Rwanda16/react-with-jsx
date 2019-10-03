//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = () => {
  const buttonText = { text: "Click Me!" };
  const labelText = "Enter Name:";
  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input id='name' />
      <button style={{ backgroundColor: "green", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//Take the react component and show it on the creen

ReactDOM.render(<App />, document.querySelector("#root"));
