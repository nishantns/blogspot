import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import BlogCard from "./BlogCard";
import { Grid } from "@material-ui/core";

storiesOf("Molecules/Blog Card")
    .addDecorator(withKnobs)
    .add("Blog Card", () => (
        <Grid container item xs={7}>
            <Grid item xs={3}>
                <BlogCard
                    imageSrc={text("src", "https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/marketing-blog-image.jpg")}
                    blogName={text("Name", "Marketing")}
                    blogDescription={text("Description", "Insights, ideas, and inspiration for modern marketers.")}
                />
            </Grid>
        </Grid>
    ))