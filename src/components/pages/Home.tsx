import React, { FC, memo, useContext } from "react";
import { Calendar } from "../organisms/layout/Calendar";
import { ModeContext } from "../../providers/ModeProvider";

export const Home: FC = memo(() => {
  const { modeInfo, setModeInfo } = useContext(ModeContext);
  setModeInfo("home");
  return (
    <>
      <Calendar />
    </>
  );
});
