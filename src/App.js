import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFood from "./pages/AddFood";
import FoodList from "./pages/FoodList";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Container>
          <Header></Header>
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
    </>
  );
}

export default App;
