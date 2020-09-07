import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import STTypography from "../STTypography/STTypography";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        width: "100%"
    },
    text: {
        padding: "0.25rem 0.75rem"
    }
}));

const Subtitle = (props) => {
    const classes = useStyles();
    return (
        <Grid container item xs={7}>
            <Paper
                square
                elevation={0}
                classes={{
                    root: classes.root
                }}
            >
                <STTypography
                    variant="h3"
                    className={classes.text}
                >
                    {props.content}
                </STTypography>
            </Paper>
        </Grid>
    );
}

export default Subtitle;