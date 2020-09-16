import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Header from "./Header";

storiesOf("Organisms/Header")
    .addDecorator(withKnobs)
    .add("Header", () => (
        <Header/>
    ))