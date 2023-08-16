import axios from "axios";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

export const useSchedule = () => {
  const history = useHistory();

  const [schedules, setSchedules] = useState<Object>("");

  type schedules = {
    id: number;
    title: string;
    started_at: string;
    finished_at: string;
    budget: number;
    scheduled_by: number;
    password: number;
  };
  //予定を登録する
  // const make = useCallback(() => {}, []);

  const PostSchedule = useCallback(
    (
      title: any,
      started_at: any,
      finished_at: any,
      budget: any,
      password: any
    ) => {
      console.log(title);
      console.log(started_at);
      console.log(finished_at);
      console.log(budget);
      console.log(password);

      axios
        .post(
          "http://127.0.0.1:8000/apiapp/schedule/",
          {
            title: title,
            started_at: started_at,
            finished_at: finished_at,
            budget: budget,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${localStorage.localJWT}`,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            setSchedules(res.data);
          } else {
            console.log("取得していません。");
          }
        })
        .catch((err: any) => console.log("登録できませんでした。"))
    },
    [history]
  );
  return { PostSchedule, schedules };
};
