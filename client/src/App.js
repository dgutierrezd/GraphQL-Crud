import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import client from './Apollo/client';
import NavBar from './containers/layout/NavBar';
import TasksQuery from './containers/TasksQuery';
import AddTask from './containers/AddTask';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar />
        <div className="container">
        <Switch>
          <Route path="/new">
            <AddTask />
          </Route>
          <Route path="/">
            <TasksQuery />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
