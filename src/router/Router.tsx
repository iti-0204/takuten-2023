import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Login } from "../components/pages/Login";
import { SignUp } from "../components/pages/SignUp";
import { PasswordForget } from "../components/pages/PasswordForget";
import { Mypage } from "../components/pages/Mypage";
import { Notice } from "../components/pages/Notice";
import { SearchProto } from "../components/pages/SearchProto";
import { ContributeProto } from "../components/pages/ContributeProto";
import { PayInfoProto } from "../components/pages/PayInfoProto";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/sign_up">
        <SignUp />
      </Route>
      <Route path="/password_forget">
        <PasswordForget />
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
      <Route path="/mypage">
        <Mypage />
      </Route>
      <Route path="/notice">
        <Notice />
      </Route>
      <Route path="/searchproto">
        <SearchProto />
      </Route>
      <Route path="/contributeproto">
        <ContributeProto />
      </Route>
      <Route path="/payinfoproto">
        <PayInfoProto />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
