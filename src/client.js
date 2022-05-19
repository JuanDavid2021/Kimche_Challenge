import { ApolloClient } from "@apollo/react-hooks";
import {InMemoryCache } from "apollo-boost";


export const client = new ApolloClient({
uri: 'https://countries.trevorblades.com',
cache: new InMemoryCache()});

