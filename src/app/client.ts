import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://vetgroup.am/graphql",
  cache: new InMemoryCache(),
});

export default client;
