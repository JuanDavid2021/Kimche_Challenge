import React from "react";
import { CountriesProvider } from "./components/context/CountriesContext";
import { AppRouter } from "./components/routers/AppRouter";
import {client} from "./client"
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => (

<ApolloProvider client={client}>
 <CountriesProvider>
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
 </CountriesProvider>
</ApolloProvider>
);

export default App;
