import React from "react";
import { createContext, useState } from "react";

export const ModeContext = React.createContext(
  {} as {
    modeInfo: string;
    setModeInfo: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const ScheduleContext = createContext({});

export const ModeProvider = (props: any) => {
  const { children } = props;

  const [modeInfo, setModeInfo] = useState<string>("home");

  return (
    <ModeContext.Provider value={{ modeInfo, setModeInfo }}>
      {children}
    </ModeContext.Provider>
  );
};

export const ScheduleProvider = (props: any) => {
  const { children } = props;
  type addschedule = {
    id: number;
    start: string;
    end: string;
    starttime: string;
    endtime: string;
    title: string;
    password: number;
    budget: number;
  };

  const [scheduleInfo, setScheduleInfo] = useState<addschedule>();

  return (
    <ScheduleContext.Provider value={{ scheduleInfo, setScheduleInfo }}>
      {children}
    </ScheduleContext.Provider>
  );
};
