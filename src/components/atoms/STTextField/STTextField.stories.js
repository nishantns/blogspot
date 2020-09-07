import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import STTextField from "./STTextField";
import { Grid } from "@material-ui/core";
import { theme } from "../../../theme";

storiesOf("Atoms/STTextField")
    .addDecorator(withKnobs)
    .add("TextField", ()=> (
        <Grid container item xs={8} spacing={2}>
            <Grid item xs={4} style={{backgroundColor: theme.palette.primary.main}}>
                <STTextField
                    label={text("Label", "Email Address")}
                    fullWidth
                />
            </Grid>
        </Grid>
    ))