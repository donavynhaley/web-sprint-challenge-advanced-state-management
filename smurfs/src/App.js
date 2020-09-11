import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "./actions";
import { addSmurf } from "./actions";

import { Button } from "reactstrap";
// Compnents
import Smurfs from "./components/Smurfs";
import SmurfForm from "./components/SmurfForm";
function App(props) {
  console.log();
  if (props.smurfs.length == 0) {
    return (
      <div className="first-screen">
        <Button color="primary" onClick={() => props.getSmurfs()}>
          Get Smurfs
        </Button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Here be some smurfs</h1>
      <div className="content">
        <Smurfs smurfs={props.smurfs}></Smurfs>
        <SmurfForm></SmurfForm>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getSmurfs })(App);
