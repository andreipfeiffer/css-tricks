import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { DefinitionListVerticalLayout } from "./pages/definition-list-vertical-layout";
import { Twitter3ImageGallery } from "./pages/twitter-3-image-gallery";
import { SquareGrid } from "./pages/square-grid";

const Routes = {
  GRID_MAX_CONTENT: {
    path: "definition-list-vertical-layout",
    label: "Definition List Vertical Layout",
    component: DefinitionListVerticalLayout,
  },

  TWITTER_3_IMAGE_GALLERY: {
    path: "twitter-3-image-gallery",
    label: "Twitter 3 Image Gallery Layout",
    component: Twitter3ImageGallery,
  },

  SQUARE_GRID: {
    path: "square-grid",
    label: "Square Grid Dense Layout",
    component: SquareGrid,
  },
};

export function AppRoutes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {Object.values(Routes).map((r) => (
              <li>
                <Link to={r.path}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {Object.values(Routes).map((r) => (
            <Route path={`/${r.path}`} component={r.component} />
          ))}
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
