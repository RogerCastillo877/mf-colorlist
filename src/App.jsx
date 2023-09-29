import React from "react";
import ReactDOM from "react-dom";

import ColorList from "./components/ColorList";

const App = () => {

  return (
    <>
      <ColorList colorList={[]} />
      <ColorList colorList={["#00ccff", "#2328be"]} />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));