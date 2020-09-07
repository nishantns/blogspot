import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import MenuBar from "./MenuBar";

storiesOf("Organisms/Menu Bar")
    .addDecorator(withKnobs)
    .add("Menu Bar", () => (
        <MenuBar/>
    ));