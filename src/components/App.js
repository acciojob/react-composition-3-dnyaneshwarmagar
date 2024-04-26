
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"30px"}}>
      <Tooltip text="Hover over me" children={"This is tooltip!"}>
      </Tooltip>
      <Tooltip text="Hover over me to see another tooltip" children={"This is another tooltip"}>
      </Tooltip>
    </div>
  );
};

export default App;
