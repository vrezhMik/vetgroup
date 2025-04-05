import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://vetgroup.am/admin/graphql",
  cache: new InMemoryCache(),
});

export default client;
