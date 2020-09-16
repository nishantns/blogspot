import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ExploreTopicSection from "./ExploreTopicSection";
import { Grid } from "@material-ui/core";

storiesOf("Organisms/Explore Topics Section")
    .addDecorator(withKnobs)
    .add("Explore Topics", () => (
        <Grid item container xs={8}>
            <ExploreTopicSection/>
        </Grid>
    ))