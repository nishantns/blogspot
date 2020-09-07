import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import STTypography from "../../atoms/STTypography/STTypography";
import TopicCard from "../../atoms/TopicCard/TopicCard";

const useStyles= makeStyles((theme) => ({
    root: {
        borderTop: "3px solid #DFE3EB",
        textAlign: "center",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    header: {
        fontSize: "1.5rem",
        fontWeight: 500,
        padding: "3rem 2rem 0"
    },
    subheader: {
        fontSize: "1.125rem",
        lineHeight: "1.6111em",
        fontWeight: 400,
        margin: "1em auto 2em"
    }
}));

const ExploreTopicSection = (props) => {
    const classes = useStyles();

    const colors = ["#ff7a59", "#00bda5", "#6a78d1", "#f2545b", "#f5c26b"];
    const topics = [
        "Customer Retention", "Customer Experience", "SEO",
        "Instagram Marketing", "Email Newsletters", "Email Marketing",
        "Sales Qualification", "Sales Process", "Sales Prospecting",
        "Remote work"
    ]

    return (
        <Grid container className={classes.root} justify={"center"}>
            <Grid item container justify={"center"}>
                <Grid item xs={12}>
                    <STTypography
                        variant={"h2"}
                        color={"secondary"}
                        children={"Explore More Topics"}
                        className={classes.header}
                    />
                </Grid>
                <Grid item xs={12}>
                    <STTypography
                        variant={"body2"}
                        color={"secondary"}
                        children={"Ready to brush up on something new? We've got more to read right this way."}
                        className={classes.subheader}
                    />
                </Grid>
                <Grid item container xs={12} spacing={4}>
                    {topics.map((topic, index) => {
                        return (
                            <Grid item xs={4}>
                                <TopicCard
                                    borderColor={(colors[index % colors.length])}
                                    children={topic}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ExploreTopicSection;