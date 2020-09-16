import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Subtitle from "./Subtitle";
import { Grid } from "@material-ui/core";

storiesOf("Atoms/Subtitle")
.addDecorator(withKnobs)
.add("Subtitle", () => (
    <Grid container>
        <Subtitle content={text("Text", "Most Popular")}/>
    </Grid>
))