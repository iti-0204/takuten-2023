import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Login } from "../components/pages/Login";
import { SignUp } from "../components/pages/SignUp";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/sign_up">
        <SignUp />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
