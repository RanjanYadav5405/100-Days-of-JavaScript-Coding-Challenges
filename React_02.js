// Find the issue in the below code snippet after rendering the list of names.

import React from "react";
function App() {
 const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name, index) => <li key={index}>{name}</li>); // In List we should do unique props thats why need key index
  return <ul>{listItems}</ul>;
}
export default App;
