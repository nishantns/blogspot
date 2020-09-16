import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import STTypography from "../../atoms/STTypography/STTypography";
import BlogCard from "../../molecules/BlogCard/BlogCard";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: "3px solid #DFE3EB",
        marginBottom: "6rem"
    },
    header: {
        fontSize: "2rem",
        lineHeight: "1.41667em",
        fontWeight: 500,
        margin: "0.5em 0"
    },
    blogContainer: {
        padding: "2rem 0"
    }
}));

const BlogsSection = (props) => {
    const classes = useStyles();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        if (props.blogs.length > 0 && props.blogs !== blogs) {
            setBlogs(props.blogs);
        }
    }, [props.blogs]);

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item xs={4}>
                <STTypography
                    variant={"h1"}
                    color={"secondary"}
                    children={"Visit the HubSpot Blogs"}
                    className={classes.header}
                />
            </Grid>
            <Grid item container xs={12} spacing={2} className={classes.blogContainer}>
                {blogs.map((blog) => {
                    return (
                        <Grid item xs={3}>
                            <BlogCard
                                {...blog}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <Grid item xs={12}>
                <SubscriptionCard variant={"horizontal"}/>
            </Grid>
        </Grid>
    );
};

export default BlogsSection;