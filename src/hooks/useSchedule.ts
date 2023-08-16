import axios from "axios";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

export const useSchedule = () => {
  const history = useHistory();

  const [loading2, setLoading2] = useState(false);
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

  type addschedule = {
    id: string;
    start: string;
    end: string;
    starttime: string;
    endtime: string;
    title: string;
    password: string;
    budget: string;
  };

  let addevents = {};
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

      setLoading2(true);

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
            addevents = {
              id: String(res.data.id),
              start: String(res.data.started_at),
              end: String(res.data.finished_at),
              starttime: String(res.data.started_at),
              endtime: String(res.data.finished_at),
              title: String(res.data.title),
              password: String(res.data.password),
              budget: String(res.data.budget),
            };
            setSchedules(addevents);
            console.log(addevents);
          } else {
            console.log("取得していません。");
          }
        })
        .catch((err: any) => console.log("登録できませんでした。"))
        .finally(() => {
          setLoading2(false);
        });
    },
    [history]
  );
  return { PostSchedule, loading2, schedules };
};
