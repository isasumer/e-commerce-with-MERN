import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./components/Cart"; //cart added

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route exact path="/" component={HomeScreen} />
              <Route path="/product/:id" component={ProductScreen} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
