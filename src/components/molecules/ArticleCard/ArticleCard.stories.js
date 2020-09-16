import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ArticleCard from "./ArticleCard";
import { Grid } from "@material-ui/core";

storiesOf("Molecules/Article Card")
    .addDecorator(withKnobs)
    .add("Default Article Card", () => (
        <Grid container item xs={8}>
            <Grid item xs={4}>
                <ArticleCard
                    imageSrc={text("src", "https://blog.hubspot.com/hubfs/reddit-advertising.jpg")}
                    articleName={text("Name", "Everything Our Paid Team Learned From Attempting a Reddit Advertising Strategy")}
                    articleCategory={text("Category", "PPC")}
                    articleDetails={text("Details", "MARKETING | 10 MIN READ")}
                />
            </Grid>
        </Grid>
    ))
    .add("Featured Article Card", () => (
        <Grid container item xs={8}>
            <Grid item xs={8}>
                <ArticleCard
                    variant={"featured"}
                    imageSrc={text("src", "https://blog.hubspot.com/hubfs/how%20to%20write%20a%20blog%20post-2.jpg")}
                    articleName={text("Name", "How to Write a Blog Post: A Step-by-Step Guide [+ Free Blog Post Templates]")}
                    articleCategory={text("Category", "PPC")}
                    articleDetails={text("Details", "MARKETING | 18 MIN READ")}
                />
            </Grid>
        </Grid>
    ))
    .add("Minimal Article Card", () => (
        <Grid container item xs={8}>
            <Grid item xs={4}>
                <ArticleCard
                    variant={"minimal"}
                    articleName={text("Name", "How to Deal With a Difficult (or Angry) Customer: 16 Tips")}
                    articleDetails={text("Details", "SALES | 9 MIN READ")}
                />
            </Grid>
        </Grid>
    ))