import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { AuthProvider } from "@context/Auth";
import store from "@store/index";
import GlobalStyles from "@styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}
export default MyApp;
