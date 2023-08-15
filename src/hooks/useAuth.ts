import axios from "axios";
import React, { useCallback } from "react";

import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  let match = false;
  const history = useHistory();
  const login = useCallback(
    (email: any, password: any) => {
      fetchAsyncLogin(email, password);
    },
    [history]
  );

  // ここからサインアップ

  const fetchRegister = useCallback((email: any, password: any) => {
    axios
      .post(
        "http://127.0.0.1:8000/apiapp/register/",
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          fetchAsyncLogin(email, password);
        } else {
          console.log(
            "エラーが発生しました。このメールアドレスはすでに使用されている可能性があります。"
          );
        }
      })
      .catch((err: any) => console.log("サインアップできません"));
  }, []);

  const fetchAsyncLogin = useCallback((email: any, password: any) => {
    axios
      .post(
        "http://127.0.0.1:8000/authen/jwt/create",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          localStorage.setItem("localJWT", res.data.access);
          console.log(res.data.access);
          console.log("アクセストークン取得成功");
          console.log(`JWT ${localStorage.getItem("localJWT")}`);
          // fetchAsyncGetProfs();
          history.push("/home");
        } else {
          console.log("アクセストークンでエラーが発生しました。");
        }

        // return res.data;
      })
      .catch((err: any) => console.log("アクセストークンが取得できません"));
  }, []);

  const fetchAsyncGetProfs = useCallback(() => {
    axios
      .get(
        "http://127.0.0.1:8000/apiapp/profile/",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.localJWT}`,
          },
        }
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          console.log("全てのプロフ取得成功");
        } else {
          console.log("全てのプロフ取得でエラーが発生しました。");
        }

        // return res.data;
      })
      .catch((err: any) => console.log("全てのプロフが取得できません"));
  }, []);

  const signup = useCallback(
    (email: any, password: any) => {
      fetchRegister(email, password);
      // fetchAsyncLogin();
    },
    [history]
  );
  return { login, signup };
};
