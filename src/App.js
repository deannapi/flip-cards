import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Portfolio from "./components/carousel";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
}
