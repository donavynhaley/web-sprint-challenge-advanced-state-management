import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SmurfForm = (props) => {
  // Use State to create a new smurf
  const [newSmurf, setNewSmurf] = useState({
    smurf_name: "",
    smurf_age: "",
    smurf_height: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
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
          <Label for="smurf_name">Name</Label>
          <Input
            type="text"
            name="smurf_name"
            id="idSmurf_name"
            placeholder="e.g. Britanny"
            value={newSmurf.smurf_name}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="smurf_age">Age</Label>
          <Input
            type="text"
            name="smurf_age"
            id="idSmurf_age"
            placeholder="e.g. 65"
            value={newSmurf.smurf_age}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="smurf_height">Height</Label>
          <Input
            type="text"
            name="smurf_height"
            id="idSmurf_height"
            placeholder="e.g. 5cm"
            value={newSmurf.smurf_height}
            onChange={(event) => handleChange(event)}
          ></Input>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};
export default SmurfForm;
