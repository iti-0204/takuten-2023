import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "./router/Router";
import theme from "./theme/theme";
import { ModeProvider } from "./providers/ModeProvider";
import { ScheduleProvider } from "./providers/ScheduleProvider";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ModeProvider>
          <ScheduleProvider>
            <Router />
          </ScheduleProvider>
        </ModeProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
