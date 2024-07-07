import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./MUITheme/theme";
import Route from "./Route";
import Layout from "./Components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Route />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
