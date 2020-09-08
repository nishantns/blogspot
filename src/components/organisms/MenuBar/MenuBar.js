import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    logo: {
        // height: "100%",
        width: "100%"
    }
}));

const MenuBar = (props) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={3}>
                {/* <img
                    src={Logo}
                    className={classes.logo}
                /> */}
            </Grid>
        </Grid>
    );
};

export default MenuBar;