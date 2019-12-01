import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFood from "./pages/AddFood";
import FoodList from "./pages/FoodList";
import { ThemeProvider } from "emotion-theming";
import theme from "./utils/themes";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Container>
            <Header />
            <Switch>
              <Route exact path="/">
                <FoodList />
              </Route>
              <Route path="/add">
                <AddFood />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
