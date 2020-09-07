import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ArticleCard from "../../molecules/ArticleCard/ArticleCard";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import ReportCard from "../../molecules/ReportCard/ReportCard";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "1rem"
    },
    editorPickContainer: {
        marginTop: "1rem"
    }
}));

const ArticleList = (props) => {
    const classes = useStyles();

    const articleList = {
        mostPopular: [
            {
                articleName: "The Social Media Content Calendar Template Every Marketer Needs [Free Template]",
                articleDetails: "MARKETING | 11 MIN READ"
            },
            {
                articleName: "How to Create a Sales Plan: Template + Examples",
                articleDetails: "SALES | 9 MIN READ"
            },
            {
                articleName: "How to Deal With a Difficult (or Angry) Customer: 16 Tips",
                articleDetails: "SERVICE | 13 MIN READ"
            }
        ],
        editorPicks: [
            {
                articleName: "11 Social Media Calendars, Tools, & Templates to Plan Your Content",
                articleDetails: "MARKETING | 14 MIN READ"
            },
            {
                articleName: "8 Questions to Ask a Potential Customer About Their Business Pain Points",
                articleDetails: "SALES | 9 MIN READ"
            },
            {
                articleName: "5 SaaS Onboarding Best Practices to Ensure Your Customers' Success",
                articleDetails: "SERVICE | 5 MIN READ"
            }
        ]
    };

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={8}>
                <ArticleCard
                    variant={"featured"}
                    imageSrc={"https://blog.hubspot.com/hubfs/how%20to%20write%20a%20blog%20post-2.jpg"}
                    articleName={"How to Write a Blog Post: A Step-by-Step Guide [+ Free Blog Post Templates]"}
                    articleCategory={"PPC"}
                    articleDetails={"MARKETING | 18 MIN READ"}
                />
            </Grid>
            <Grid item xs={4}>
                <Grid item container xs={12} spacing={3}>
                    <Grid item xs={12}>
                        <Subtitle
                            content="Most Popular"
                        />
                    </Grid>
                    {articleList.mostPopular.map((article) => {
                        return (
                            <Grid item xs={12}>
                                <ArticleCard
                                    variant={"minimal"}
                                    {...article}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item container xs={12} spacing={3} className={classes.editorPickContainer}>
                    <Grid item xs={12}>
                        <Subtitle
                            content="Editor's Picks"
                        />
                    </Grid>
                    {articleList.editorPicks.map((article) => {
                        return (
                            <Grid item xs={12}>
                                <ArticleCard
                                    variant={"minimal"}
                                    {...article}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <ArticleCard
                    imageSrc={"https://blog.hubspot.com/hubfs/reddit-advertising.jpg"}
                    articleName={"Everything Our Paid Team Learned From Attempting a Reddit Advertising Strategy"}
                    articleCategory={"PPC"}
                    articleDetails={"MARKETING | 10 MIN READ"}
                />
            </Grid>
            <Grid item xs={4}>
                <ArticleCard
                    imageSrc={"https://blog.hubspot.com/hubfs/imageedit_13_2678122642.jpg"}
                    articleName={"These Two Simple Strategies Led to a 71% Increase in Qualified Leads for the HubSpot French Market"}
                    articleCategory={"Email Marketing"}
                    articleDetails={"MARKETING | 6 MIN READ"}
                />
            </Grid>
            <Grid item xs={4}>
                <SubscriptionCard variant={"vertical"}/>
            </Grid>
            <Grid item xs={3}>
                <ReportCard/>
            </Grid>
            <Grid item xs={9}>
                <ArticleCard
                    variant={"featured"}
                    imageSrc={"https://blog.hubspot.com/hubfs/instagram-story-ads.jpg"}
                    articleName={"The Ultimate Guide to Instagram Stories Ads in 2020"}
                    articleCategory={"Instagram Marketing"}
                    articleDetails={"MARKETING | 11 MIN READ"}
                />
            </Grid>
            <Grid item xs={9}>
                <ArticleCard
                    variant={"featured"}
                    imageSrc={"https://blog.hubspot.com/hubfs/sales-psychology%20%281%29.jpg"}
                    articleName={"11 Psychology Tips to Get Prospects to Trust You Faster"}
                    articleCategory={"Sales Process"}
                    articleDetails={"SALES | 6 MIN READ"}
                />
            </Grid>
            <Grid item xs={3}>
                <ArticleCard
                    imageSrc={"https://blog.hubspot.com/hubfs/salespeople-think-like-entrepreneurs%20%281%29.jpg"}
                    articleName={"Why Sales People Should Think and Operate Like Entrepreneurs"}
                    articleCategory={"Sales Tactics"}
                    articleDetails={"SALES | 4 MIN READ"}
                />
            </Grid>
        </Grid>
    );
};

export default ArticleList;