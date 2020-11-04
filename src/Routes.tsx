import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppRoute } from "./types";

import { DefinitionListVerticalLayout } from "./pages/definition-list-vertical-layout";
import { Twitter3ImageGallery } from "./pages/twitter-3-image-gallery";
import { SquareGrid } from "./pages/square-grid";
import { Nav } from "./components/Nav";

const Routes: AppRoute[] = [
  {
    path: "definition-list-vertical-layout",
    label: "Definition List Vertical Layout",
    component: DefinitionListVerticalLayout,
  },
  {
    path: "twitter-3-image-gallery",
    label: "Twitter 3 Image Gallery Layout",
    component: Twitter3ImageGallery,
  },
  {
    path: "square-grid",
    label: "Square Grid Dense Layout",
    component: SquareGrid,
  },
];

export function AppRoutes() {
  return (
    <Router>
      <div>
        <Nav routes={Routes} />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {Routes.map((r) => (
            <Route key={r.path} path={`/${r.path}`} component={r.component} />
          ))}
          <Route path="/">{/* <div>Home</div> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}
