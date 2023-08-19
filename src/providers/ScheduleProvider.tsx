import React from "react";
import { createContext, useState } from "react";

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

export const ScheduleContext = React.createContext(
  {} as {
    scheduleInfo: addschedule[];
    setScheduleInfo: React.Dispatch<React.SetStateAction<Array<addschedule>>>;
  }
);

export const ScheduleProvider = (props: any) => {
  const { children } = props;

  const [scheduleInfo, setScheduleInfo] = useState<addschedule[]>([]);

  return (
    <ScheduleContext.Provider value={{ scheduleInfo, setScheduleInfo }}>
      {children}
    </ScheduleContext.Provider>
  );
};
