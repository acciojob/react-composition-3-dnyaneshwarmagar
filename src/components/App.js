
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
      <h2 className="tooltip">
        <Tooltip text="Hover over me" children={"This is a tooltip"}>
        </Tooltip>
      </h2>
      <p className="tooltip">
        <Tooltip text="Hover over me to see another tooltip" children={"This is another tooltip"}>
        </Tooltip>
      </p>
    </div>
  );
};

export default App;
