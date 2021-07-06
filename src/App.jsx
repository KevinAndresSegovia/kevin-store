import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Home from "./containers/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/ItemListContainer/:id">
                <ItemListContainer />
              </Route>
              <Route path="/ItemDetailContainer/:producto">
                <ItemDetailContainer />
              </Route>
            </Switch>
          </Router>
        </Row>
      </Container>
    </div>
  );
}
