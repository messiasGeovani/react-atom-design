import { AuthProvider } from "@context/Auth";
import store from "@/store";
import GlobalStyles from "@/styles/GlobalStyles";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import "@lib/pintura/pintura.css";

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
