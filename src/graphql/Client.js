// src/graphql/Client.js
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "@apollo/client/link/http";

const restLink = new HttpLink({
  uri: "https://newsapi.org/v2/",
  headers: {
    Authorization: "47e036d83ccc4058b1f85362bc2be1f4",
  },
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
