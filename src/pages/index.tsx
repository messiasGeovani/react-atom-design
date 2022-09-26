import React, { useEffect } from "react";
import Router from "next/router";

function App() {
  useEffect(() => {
    const { pathname } = Router;

    if (pathname === "/") {
      Router.push("/login");
    }
  }, []);

  return <div />;
}

export default App;
