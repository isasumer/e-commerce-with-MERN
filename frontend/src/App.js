import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/product/:id" component={ProductScreen} />
            </Switch>
          </Router>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
