import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import AllRoutes from './AllRoutes.jsx';
const App = () => {
  return (
    <ChakraProvider>
    <Provider store={store}>
      <AllRoutes/>
    </Provider>
  </ChakraProvider>
  )
}

export default App