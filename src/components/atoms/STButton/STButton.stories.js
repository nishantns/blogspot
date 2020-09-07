import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import React from "react";
import STButton from "./STButton";
import { theme } from "../../../theme";

storiesOf("Atoms/STButton")
    .addDecorator(withKnobs)
    .add("Contained", () => (
        <STButton
            color={text("Colour", "primary")}
            variant={"contained"}
            content={text("Label", "Sample Text")}
        />
    ))
    .add("Outlined", () => (
        <STButton
            color={text("Colour", "primary")}
            variant={"outlined"}
            content={text("Label", "Sample Text")}
        />
    ))
    .add("White", () => (
        <STButton
            variant={"contained"}
            content={text("Label", "Subscribe")}
            disableElevation
        />
    ));