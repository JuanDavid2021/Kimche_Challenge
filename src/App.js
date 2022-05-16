import React from "react";
import { AppRouter } from "./components/routers/Approuter";


const App = () => (

<ApolloProvider client={client}>
 <CountryProvider>
  <React.StrictMode>
  <AppRouter/>
  </React.StrictMode>
 </CountryProvider>
</ApolloProvider>
);

export default App;
