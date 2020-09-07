import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import ArticleList from "./ArticleList";
import { Grid } from "@material-ui/core";

storiesOf("Organisms/Article List")
    .addDecorator(withKnobs)
    .add("Article List", () => (
        <Grid item container xs={8}>
            <ArticleList/>
        </Grid>
    ))