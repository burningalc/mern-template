import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// pages
import SamplePage from "./containers/sample/SamplePage";
import Error404Page from "./containers/error/Error404Page";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SamplePage} />
        <Route path="*" component={Error404Page}></Route>
      </Switch>
    );
  }
}

export default Router;
