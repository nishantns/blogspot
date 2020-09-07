import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, makeStyles } from "@material-ui/core";
import STTypography from "../../atoms/STTypography/STTypography";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#FFF",
        textAlign: "left"
    },
    cardMedia: {
        height: "160px"
    },
    cardContent: {
        backgroundColor: theme.palette.primary.main,
        padding: "0.5rem 1rem 1rem",
        minHeight: "105.3px"
    },
    description: {
        margin: "0 0 1rem",
        paddingRight: "1rem"
    }
}));

const BlogCard = (props) => {
    const classes = useStyles();

    return (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <CardActionArea>
                <CardMedia
                    classes={{
                        root: classes.cardMedia
                    }}
                    image={props.imageSrc}
                    title={props.blogName}
                />
                <CardContent
                    classes={{
                        root: classes.cardContent
                    }}
                >
                    <STTypography
                        variant={"h2"}
                        children={props.blogName}
                    />
                    <STTypography
                        variant={"body1"}
                        children={props.blogDescription}
                        className={classes.description}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BlogCard;