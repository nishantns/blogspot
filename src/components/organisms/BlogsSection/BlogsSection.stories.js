import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from "@material-ui/core";
import BlogsSection from "./BlogsSection";
import { withKnobs } from "@storybook/addon-knobs";

storiesOf("Organisms/Blog Section")
    .addDecorator(withKnobs)
    .add("Blog Section", () => (
        <Grid item container xs={8}>
            <BlogsSection/>
        </Grid>
    ))