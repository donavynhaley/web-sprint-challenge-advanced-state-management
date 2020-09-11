import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "./actions";
import { Button } from "reactstrap";
// Compnents
import Smurfs from "./components/Smurfs";
import SmurfForm from "./components/SmurfForm";
function App(props) {
  if (props.smurfs.length == 0) {
    return (
      <div>
        <Button color="primary" onClick={() => props.getSmurfs()}>
          Get Smurfs
        </Button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Here be some smurfs</h1>
      <Smurfs smurfs={props.smurfs}></Smurfs>
      <SmurfForm></SmurfForm>
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
