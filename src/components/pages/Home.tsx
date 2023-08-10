import React, { FC, memo } from "react";
import { Calendar } from "../organisms/layout/Calendar";

export const Home: FC = memo(() => {
  return (
    <>
      <Calendar />
    </>
  );
});
