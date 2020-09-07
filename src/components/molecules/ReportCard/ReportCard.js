import React from "react";
import { makeStyles, Card, Grid } from "@material-ui/core";
import STTypography from "../../atoms/STTypography/STTypography";
import STButton from "../../atoms/STButton/STButton";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "linear-gradient(45deg, #f2547d, #f2545b)",
        color: "#FFF",
        "&:hover": {
            textDecoration: "underline"
        },
        height: "100%"
    },
    headerContainer: {
        height: "100%"
    },
    header: {
        fontSize: "3em",
        lineHeight: "1.41667em",
        padding: "2em 0",
        textAlign: "center"
    },
    button: {
        fontSize: "0.9375rem",
        fontWeight: 600,
        margin: "1em 0"
    }
}));

const ReportCard = (props) => {
    const classes = useStyles();

    return (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <Grid container className={classes.headerContainer} justify={"center"}>
                <Grid item xs={10}>
                    <STTypography
                        variant={"h1"}
                        className={classes.header}
                        children={"2020 State of Marketing Report"}
                    />
                </Grid>
                <Grid item xs={10}>
                    <STButton
                        variant={"contained"}
                        color={"primary"}
                        content={"Explore the Report"}
                        className={classes.button}
                        fullWidth
                        disableElevation
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default ReportCard;