import React from "react";
import { createContext, useState } from "react";



export const ModeContext = React.createContext(
  {} as {
    modeInfo: string;
    setModeInfo: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const ModeProvider = (props: any) => {
  const { children } = props;

  const [modeInfo, setModeInfo] = useState<string>("home");

  return (
    <ModeContext.Provider value={{ modeInfo, setModeInfo }}>
      {children}
    </ModeContext.Provider>
  );
};
