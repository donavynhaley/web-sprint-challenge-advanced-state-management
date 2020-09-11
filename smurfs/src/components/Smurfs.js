import React from "react";
import Smurf from "./Smurf";
const Smurfs = (props) => {
  return (
    <div className="smurfContainer">
      {props.smurfs.map((smurf) => {
        return <Smurf smurf={smurf}></Smurf>;
      })}
    </div>
  );
};
export default Smurfs;
