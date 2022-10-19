import React from "react";
import { render as renderElement } from "@testing-library/react";

import store from "@/store";
import GlobalStyles from "@/styles/GlobalStyles";
import { AuthProvider } from "@context/Auth";
import { Provider } from "react-redux";

export const render = (Component: React.ReactElement) =>
  renderElement(
    <Provider store={store}>
      <AuthProvider>
        <GlobalStyles />
        {Component}
      </AuthProvider>
    </Provider>
  );
