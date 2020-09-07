import React from "react";
import { TextField, makeStyles, InputLabel, Input, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: "18px",
        lineHeight: "29px",
        fontWeight: 400,
        color: `${theme.palette.primary.contrastText} !important`
    },
    input: {
        backgroundColor: "#FFFFFF",
        padding: "0.5rem",
        borderRadius: "3px",
        fontWeight: 300,
        color: theme.palette.secondary.main
    }
}));

const STTextField = (props) => {
    const classes = useStyles();
    return (
        <>
            <InputLabel
                children={props.label}
                className={classes.label}
                shrink
                classes={{
                    focused: classes.label
                }}
            />
            <Input
                disableUnderline
                fullWidth={props.fullWidth}
                value={props.value}
                onChange={props.onChange}
                className={classes.input}
            />
        </>
    );
};

export default STTextField;