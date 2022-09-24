import React from "react";
import { Provider } from "react-redux";

import AppRoutes from "./Routes";
import GlobalStyles from "./styles/GlobalStyles";
import store from "./store";

import {} from "styled-components/cssprop";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppRoutes />
    </Provider>
  );
}

export default App;
