import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import TextButton from "./TextButton";

storiesOf("Atoms/Text Button")
    .addDecorator(withKnobs)
    .add("Underlined", () => (
        <TextButton
            variant={"underlined"}
            content={"MARKETING"}
        />
    ))
    .add("Grey", () => (
        <TextButton
            variant={"grey"}
            content={"English"}
            fontSize={"18px"}
        />
    ))