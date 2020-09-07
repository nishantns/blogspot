import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/theme";
import { addDecorator, configure } from "@storybook/react";

const GlobalWrapper = storyFn => (
    <ThemeProvider theme={theme}>
        {storyFn()}
    </ThemeProvider>
);

addDecorator(GlobalWrapper);

configure(require.context ("../src/components", true, /\.stories\.js$/), module);