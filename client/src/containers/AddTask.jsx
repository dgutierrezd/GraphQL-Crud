import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from '@apollo/react-hooks';
import { Mutation } from "react-apollo";

const ADD_MUTATION = gql`
  mutation AddMutation($name: String!, $description: String!, $completed: Boolean) {
    addTask (name: $name, description: $description, completed: $completed) {
      name
      description
      completed
    }
  }
`;

const AddTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const [addTodo, {data}] = useMutation(ADD_MUTATION);

  const onSubmitForm = e => {
    e.preventDefault();
    addTodo({variables: { name, description, completed }})
    resetForm();
  }

  const resetForm = () => {
    document.getElementById('addForm').reset();
  }

  return (
    <div className="container justify-content-center mt-5">
      <legend>Add a new task</legend>
      <form onSubmit={onSubmitForm} id="addForm" >
        <div className="form-group">
          <label htmlFor="nameTask" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="nameTask"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="descriptionTask" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="descriptionTask"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            defaultChecked={completed}
            className="form-check-input"
            onClick={e => setCompleted(!completed)}
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Completed
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        {/* <Mutation mutation={ADD_MUTATION} variables={{ name, description, completed }} >
            {addMutation => 
                <button type="button" onClick={addMutation} className="btn btn-primary">
                Submit
                </button>
            }
        </Mutation> */}
      </form>
    </div>
  );
};

export default AddTask;
