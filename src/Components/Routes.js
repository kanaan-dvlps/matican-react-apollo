import React from 'react';
// import { GlobalProvider } from '../Contexts/GlobalContext';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import ApolloList from './ApolloList';
import App from '../App';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
})

// ? Router Module
const Router = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/apolloList" component={ApolloList} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

export default Router;
