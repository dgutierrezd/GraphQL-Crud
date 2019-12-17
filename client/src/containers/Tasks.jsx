import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const DELETE_MUTATION = gql`
    mutation DeleteMutation($id: Int!) {
        deleteTask(id: $id) {
            ok
        }
    }
`;

const Tasks = props => {
  const [tasks, setTasks] = useState(props.tasks);

  return (
    <div className="container justify-content-center mt-5">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => {
            const id = parseInt(task.id);
            return (
              <tr key={id}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                  <Mutation mutation={DELETE_MUTATION} variables={{id}} >
                    {deleteMutation =>
                        <button type="button" className="btn btn-danger" onClick={deleteMutation}>
                        Delete task
                        </button>
                    }
                  </Mutation>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
