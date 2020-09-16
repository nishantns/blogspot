import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import MenuBar from "../../organisms/MenuBar/MenuBar";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100vw"
    },
    headerGap: {
        height: "74px"
    }
}));

const HomeTemplate = (props) => {
    const classes = useStyles();

    return (
        <Grid container justify={"center"} className={classes.root}>
            {props.header}
            <Grid item xs={7} className={classes.headerGap}/>
            <Grid item xs={7}>
                {props.pageContent}
            </Grid>
            {props.footer}
        </Grid>
    );
};

export default HomeTemplate;