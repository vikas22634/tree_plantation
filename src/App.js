import React from "react";

const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your desired functionality here
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
