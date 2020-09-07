import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import STCheckbox from "./STCheckbox";

storiesOf("Atoms/STCheckbox")
    .addDecorator(withKnobs)
    .add("Checkbox", () => (
        <STCheckbox
            checked={boolean("Checked", false)}
            label={text("Label", "Service")}
        />
    ))