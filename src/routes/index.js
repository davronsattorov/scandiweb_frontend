import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RouterLayout from "../containers/RouterLayout";
import mainRoutes from "./main-routes";

const layouts = [
  {
    component: RouterLayout,
    path: "/home",
    routes: mainRoutes,
  },
];

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {layouts.map((layout, index) => (
          <layout.component>
            {layout.routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                component={route.component}
                exact
              />
            ))}
          </layout.component>
        ))}
        <Redirect to="/home/categories" />
      </Switch>
    );
  }
}