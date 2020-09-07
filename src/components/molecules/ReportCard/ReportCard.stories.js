import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ReportCard from "./ReportCard";
import { Grid } from "@material-ui/core";

storiesOf("Molecules/Report Card")
    .addDecorator(withKnobs)
    .add("Report Card", () => (
        <Grid item container xs={8}>
            <Grid item xs={4}>
                <ReportCard/>
            </Grid>
        </Grid>
    ))