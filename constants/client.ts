import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const BASE_URL = 'https://gorest.co.in/public/v2/graphql';

export const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache()
});

export const GET_POSTS = gql`
  query {
    posts {
      totalCount
      nodes {
        id
        userId
        title
        body
      }
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      totalCount
      nodes {
        id
        name
      }
    }
  }
`;
export const GET_COMMENTS = gql`
  query {
    comments {
      totalCount
      nodes {
        id
        postId
        name
        body
      }
    }
  }
`;
