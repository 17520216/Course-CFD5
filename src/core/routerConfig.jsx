/**
 *
 * @param {*} routers
 */

import { Switch, Route } from "react-router-dom";

export default function renderRouter(routers) {
  return (
    <Switch>
      {routers.map((e) => {
        const { exact, path, component: Component, routers: childRouters } = e;
        let children = [];
        if (childRouters) {
          children = renderRouter(childRouters);
        }
        return (
          <Route
            exact={exact}
            path={path}
            component={(...prop) => <Component {...prop}>{children}</Component>}
          ></Route>
        );
      })}
    </Switch>
  );
}
