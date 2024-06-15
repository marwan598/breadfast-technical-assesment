import { ApolloClient, InMemoryCache } from "@apollo/client";
const BASE_URL = "https://gorest.co.in/public/v2/graphql";

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
