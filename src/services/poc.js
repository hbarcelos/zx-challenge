import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import fixtures from './poc.fixtures';

const client = new ApolloClient({
  uri:
    'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql',
});

export async function search({
  lat,
  long,
  algorithm = 'NEAREST',
  now = new Date(),
}) {
  const result = await client.query({
    query: gql`
      {
        pocSearch(
          now: "${now.toISOString()}"
          algorithm: "${algorithm}"
          lat: "${lat}"
          long: "${long}"
        ) {
          id
          status
          tradingName
          officialName
          address {
            address1
            address2
            number
            city
            province
            zip
            coordinates
          }
          phone {
            phoneNumber
          }
        }
      }
    `,
  });

  return result.data.pocSearch;
}

export function transformProductList(result) {
  return result.data.poc.products
    .map(({ productVariants }) => productVariants)
    .flat()
    .filter(({ price }) => !!price);
}

export async function getProductList({ pocId, filter = '', categoryId = 0 }) {
  const result = await client.query({
    query: gql`
      {
        poc(id: "${pocId}") {
          products(categoryId: ${categoryId}, search: "${filter}") {
            productVariants {
              title
              description
              imageUrl
              price
            }
          }
        }
      }
    `,
  });

  // const result = fixtures;
  return transformProductList(result);
}
