import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import List from './partials/List';

const USER_QUERY = gql`
  query {
    launchesPast {
      id
      mission_name
    }
  }
`;

const ApolloList = props => {
  return (
    <div className="lunchList">
      <div className="headerMessage">
        <h1 className="listHeader">Lunches</h1>
      </div>
      <Query query={USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log('from GraphQL', error);
          console.log('DATA : ', data);
          return (
            <div className="parentContent">
              <div className="launches">
                <div className="lunchContentHeader"></div>
                <h5 className="launchIdHeader">Launch ID</h5>
                <h5 className="missionNameHeader">Mission Name</h5>
              </div>
              {data.launchesPast.map(launch => (
                <List
                  className="launchesWrapper"
                  key={launch.id}
                  data={launch}
                />
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default ApolloList;
