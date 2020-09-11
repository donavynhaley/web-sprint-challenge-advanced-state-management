import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfForm = (props) => {
  // Use State to create a new smurf
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: 0,
    height: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSmurf(newSmurf);
    console.log(newSmurf);
  };
  // Handles changes in form and updates newSmurf state
  const handleChange = (event) => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div id="formContainer">
      <h2>Add a smurf</h2>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="idname"
            placeholder="e.g. Britanny"
            value={newSmurf.name}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            id="idage"
            placeholder="e.g. 65"
            value={newSmurf.age}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="height">Height</Label>
          <Input
            type="text"
            name="height"
            id="idheight"
            placeholder="e.g. 5cm"
            value={newSmurf.height}
            onChange={(event) => handleChange(event)}
          ></Input>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};
export default connect(
  () => {
    return {};
  },
  { addSmurf }
)(SmurfForm);
