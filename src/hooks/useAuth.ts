import axios from "axios";
import React, { useCallback } from "react";

import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  let match = false;
  const history = useHistory();
  const login = useCallback(
    (email: string) => {
      axios
        .get("/apiapp/profile/")
        .then((res) => {
          res.data.forEach(function (value: any) {
            console.log(email);
            if (value.id == email) {
              match = true;
              history.push("/home");
            }
          });
          // if (match) {
          //   history.push("/home");
          // }
        })
        .catch((err: any) => console.log(err))
        .finally(() => console.log("finally"));
    },
    [history]
  );
  return { login };
};
