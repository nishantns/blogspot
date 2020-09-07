import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import STSearchBox from "./STSearchBox";

storiesOf("Atoms/Search Box")
    .addDecorator(withKnobs)
    .add("Search Box", () => (
        <STSearchBox/>
    ))