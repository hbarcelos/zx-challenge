import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import './index.css';

const client = new ApolloClient({
  uri:
    'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql',
});

client
  .query({
    query: gql`
      {
        pocSearch(
          algorithm: "NEAREST"
          lat: "-23.6289956"
          long: "-46.6452681"
          now: "2018-12-12T21:25:00.000Z"
        ) {
          id
          tradingName
          officialName
          products {
            id
            images {
              url
            }
            imageUrl
            title
          }
          address {
            address1
            address2
          }
        }
      }
    `,
  })
  .then(result => console.log(result));
const title = 'My minimal React Webpack Babel Setup';

render(<div>{title}</div>, document.querySelector('#app'));

module.hot.accept();
