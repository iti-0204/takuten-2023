import React, { FC, memo, useContext } from "react";
import { Calendar } from "../organisms/layout/Calendar";
import { ModeContext } from "../../providers/ModeProvider";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Home: FC = memo(() => {
  const { modeInfo, setModeInfo } = useContext(ModeContext);
  setModeInfo("home");
  return (
    <>
      <MenuDrawer />
      <Calendar />
    </>
  );
});
