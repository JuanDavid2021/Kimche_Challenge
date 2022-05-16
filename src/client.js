import {InMemoryCache } from "apollo-boost";
import { default as ApolloClient } from 'apollo-boost';

export const client = new ApolloClient({
uri: 'https://countries.trevorblades.com',
cache: new InMemoryCache()});

