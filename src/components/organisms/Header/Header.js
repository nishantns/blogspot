import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import TextButton from "../../atoms/TextButton/TextButton";
import STSearchBox from "../../atoms/STSearchBox/STSearchBox";
import STButton from "../../atoms/STButton/STButton";
import { COLOR_HEADER_GREY, COLOR_TEXT_BUTTON_GREY } from "../../../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: COLOR_HEADER_GREY,
        borderBottom: `1px solid ${COLOR_TEXT_BUTTON_GREY}`,
        position: "fixed",
        top: 0,
        height: "74px",
        width: "100%",
        zIndex: "100"
    }
}));

const Header = (props) => {
    const classes = useStyles();

    const labels = ["MARKETING", "SALES", "SERVICE", "WEBSITE"];

    return (
        <Grid container className={classes.root} justify={"center"}>
            <Grid item container xs={8} justify={"space-between"}>
                <Grid item container xs={5}>
                    {labels.map((label) => {
                        return (
                            <TextButton
                                variant={"underlined"}
                                content={label}
                            />
                        );
                    })}
                </Grid>
                <Grid item container xs={6} justify={"space-evenly"} alignItems={"center"}>
                    <Grid item>
                        <STSearchBox/>
                    </Grid>
                    <Grid item>
                        <STButton
                            variant={"contained"}
                            color={"primary"}
                            content={"Subscribe"}
                        />
                    </Grid>
                    <Grid item>
                        <STButton
                            variant={"contained"}
                            color={"primary"}
                            content={"Get HubSpot free"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;