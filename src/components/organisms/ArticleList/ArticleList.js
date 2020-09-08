import React, { useState, useEffect } from "react";
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
    const [featuredArticles, setFeaturedArticles] = useState(props.featuredArticles);
    const [editorPicks, setEditorPicks] = useState(props.editorPicks);
    const [mostPopular, setMostPopular] = useState(props.mostPopular);
    const [regularArticles, setRegularArticles] =useState(props.regularArticles);

    useEffect(() => {
        setFeaturedArticles(props.featuredArticles);
        setEditorPicks(props.editorPicks);
        setMostPopular(props.mostPopular);
        setRegularArticles(props.regularArticles);
    }, [props.featuredArticles, props.editorPicks, props.mostPopular, props.regularArticles]);

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={8}>
                <ArticleCard
                    variant={"featured"}
                    {...featuredArticles[0]}
                />
            </Grid>
            <Grid item xs={4}>
                <Grid item container xs={12} spacing={3}>
                    <Grid item xs={12}>
                        <Subtitle
                            content="Most Popular"
                        />
                    </Grid>
                    {mostPopular.map((article) => {
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
                    {editorPicks.map((article) => {
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
                    {...regularArticles[0]}
                />
            </Grid>
            <Grid item xs={4}>
                <ArticleCard
                    {...regularArticles[1]}
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
                    {...featuredArticles[1]}
                />
            </Grid>
            <Grid item xs={9}>
                <ArticleCard
                    variant={"featured"}
                    {...featuredArticles[2]}
                />
            </Grid>
            <Grid item xs={3}>
                <ArticleCard
                    {...regularArticles[2]}
                />
            </Grid>
        </Grid>
    );
};

export default ArticleList;