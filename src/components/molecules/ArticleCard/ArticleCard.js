import React from "react";
import { Card, CardMedia, CardActionArea, makeStyles, CardContent } from "@material-ui/core";
import STTypography from "../../atoms/STTypography/STTypography";
import { COLOR_HEADER_GREY } from "../../../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "3px",
        boxShadow: "none",
        "&:hover": {
            boxShadow: "0 10px 50px -5px rgba(51,71,91,0.12)"
        }
    },
    defaultCardMedia: {
        height: "196px"
    },
    defaultCardContent: {
        backgroundColor: COLOR_HEADER_GREY,
        padding: "0.5rem 1rem 1rem"
    },
    featuredCardMedia: {
        height: "500px"
    },
    featuredCardContent: {
        backgroundColor: COLOR_HEADER_GREY,
        padding: "1.125rem 1.125rem 3rem"
    },
    category: {
        padding: "1rem 1rem 0",
        fontWeight: 600
    },
    name: {
        padding: "1.125rem 1.125rem 3rem"
    },
    details: {
        padding: "1rem 1rem 1rem 1rem"
    },
    minCardContent: {
        backgroundColor: COLOR_HEADER_GREY
    },
    minName: {
        
    }
}));

const ArticleCard = (props) => {
    const classes = useStyles();

    const defualtArticleCard = (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <CardActionArea>
                <CardMedia
                    classes={{
                        root: classes.defaultCardMedia
                    }}
                    image={props.imageSrc}
                    title={props.name}
                />
                <CardContent
                    classes={{
                        root: classes.defaultCardContent
                    }}
                >
                    <STTypography
                        variant={"h3"}
                        color={"secondary"}
                        children={props.topic}
                        className={classes.category}
                    />
                    <STTypography
                        variant={"h1"}
                        color={"secondary"}
                        children={props.name}
                        className={classes.name}
                    />
                    <STTypography
                        variant={"subtitle2"}
                        color={"secondary"}
                        children={`${props.blog} | ${props.time} MIN READ`}
                        className={classes.details}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );

    const featuredArticleCard = (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <CardActionArea>
                <CardMedia
                    classes={{
                        root: classes.featuredCardMedia
                    }}
                    image={props.imageSrc}
                    title={props.name}
                />
                <CardContent
                    classes={{
                        root: classes.featuredCardContent
                    }}
                >
                    <STTypography
                        variant={"h1"}
                        color={"secondary"}
                        children={props.name}
                        className={classes.name}
                    />
                    <STTypography
                        variant={"subtitle2"}
                        color={"secondary"}
                        children={`${props.blog} | ${props.time} MIN READ`}
                        className={classes.details}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );

    const minimalArticleCard = (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <CardActionArea>
                <CardContent
                    classes={{
                        root: classes.minCardContent
                    }}
                >
                    <STTypography
                        variant={"body2"}
                        color={"secondary"}
                        children={props.name}
                        className={classes.minName}
                    />
                    <STTypography
                        variant={"subtitle2"}
                        color={"secondary"}
                        children={`${props.blog} | ${props.time} MIN READ`}
                        className={classes.mindetails}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );

    switch (props.variant) {
        case "featured":
            return featuredArticleCard;
        case "minimal":
            return minimalArticleCard;
        default:
            return defualtArticleCard;
    }
};

export default ArticleCard;