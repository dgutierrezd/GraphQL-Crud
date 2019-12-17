import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Tasks from './Tasks';

const TasksQuery = () => {
  return (
    <Query
      query={gql`
        {
          tasks {
            id
            name
            description
            completed
          }
        }
      `}
    >
      {({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>There is an error!</p>;

        if(data.tasks.length === 0) {
          return(
            <h1>There is not tasks yet</h1>
          )
        } else {
          return (
            <Tasks tasks={data.tasks} />
          )
        }
      }}
    </Query>
  );
};

export default TasksQuery;
