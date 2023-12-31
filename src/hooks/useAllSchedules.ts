import axios from "axios";
import React, { useCallback, useContext, useState } from "react";
import { types } from "util";
import { ScheduleContext } from "../providers/ScheduleProvider";

export const useAllSchedules = () => {
  type addstringschedule = {
    id: string;
    start: string;
    end: string;
    starttime: string;
    endtime: string;
    title: string;
    password: string;
    budget: string;
  };

  const { scheduleInfo, setScheduleInfo } = useContext(ScheduleContext);

  const [loading, setLoading] = useState(false);
  const [allschedules, setAllshedules] = useState<Array<addstringschedule>>([]);

  // const [allschedules, setAllshedules] = useState("");

  const addevents: addstringschedule[] = [];

  const getAllSchedules = useCallback(() => {
    setLoading(true);
    axios
      .get(
        "https://drf-api-kmpw.vercel.app/apiapp/hostschedule/",
        // "http://127.0.0.1:8000/apiapp/hostschedule/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.localJWT}`,
          },
        }
      )
      .then((res) => {
        if (res.data) {
          console.log("全ての予定を取得できました。");
          res.data.forEach(function (element: any) {
            addevents.push({
              id: String(element.id),
              start: String(element.started_at),
              end: String(element.finished_at),
              starttime: String(element.started_at),
              endtime: String(element.finished_at),
              title: String(element.title),
              password: String(element.password),
              budget: String(element.budget),
            });
          });
          setAllshedules(addevents);
          setScheduleInfo(addevents);
          console.log(addevents);
          console.log(allschedules);

          // window.location.reload();
        } else {
          console.log("取得していません。");
        }
      })
      .catch((err: any) => console.log("取得できませんでした。"))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getAllSchedules, loading, allschedules };
};
