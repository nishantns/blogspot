import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Footer from "./Footer";

storiesOf("Organisms/Footer")
    .addDecorator(withKnobs)
    .add("Footer", () => (
        <Footer/>
    ))