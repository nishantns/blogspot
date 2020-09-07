import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import SubscriptionCard from "./SubscriptionCard";
import { Grid } from "@material-ui/core";

storiesOf("Organisms/Subscription Card")
    .addDecorator(withKnobs)
    .add("Vertical", () => (
        <Grid container item xs={8}>
            <Grid item xs={4}>
                <SubscriptionCard variant={"vertical"}/>
            </Grid>
        </Grid>
    ))
    .add("Horizontal", () => (
        <Grid container item xs={8}>
            <Grid item xs={12}>
                <SubscriptionCard variant={"horizontal"}/>
            </Grid>
        </Grid>
    ));