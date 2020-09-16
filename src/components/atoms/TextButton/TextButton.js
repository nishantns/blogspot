import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { COLOR_TEXT_BUTTON_GREY, COLOR_TEXT_BUTTON_BLUE } from "../../../theme";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    underlined: {
        color: theme.palette.secondary.main,
        fontWeight: 500,
        textTransform: "uppercase",
        fontSize: "18px",
        borderRadius: 0,
        "&:hover": {
            borderBottom: `4px solid ${theme.palette.primary.main}`,
            backgroundColor: "unset"
        }
    },
    grey: props => ({
        color: COLOR_TEXT_BUTTON_GREY,
        padding: "0.5rem 0",
        fontSize: props.fontSize,
        fontWeight: 600,
        textTransform: "none",
        "&:hover": {
            color: COLOR_TEXT_BUTTON_BLUE,
            backgroundColor: "unset"
        }
    })
}));

const TextButton = (props) => {
    const classes = useStyles(props);
    return (
        <Button
            disableRipple
            disableElevation
            children={props.content}
            className={clsx(props.className, classes[props.variant])}
        />
    );
};

export default TextButton;