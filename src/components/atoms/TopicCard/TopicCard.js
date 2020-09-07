import React from "react";
import { makeStyles, Card, SvgIcon } from "@material-ui/core";
import STTypography from "../STTypography/STTypography";
import { COLOR_HEADER_GREY, COLOR_BLUE, COLOR_TEXT_BUTTON_GREY } from "../../../theme";

const useStyles = makeStyles((theme) => ({
    root: props => ({
        borderLeft: `5px solid ${props.borderColor}`,
        backgroundColor: COLOR_HEADER_GREY,
        padding: "1em 0 1em 1em",
        cursor: "pointer",
        "&:hover": {
            boxShadow: `0 10px 25px -5px ${COLOR_TEXT_BUTTON_GREY}`
        }
    }),
    text: {
        display: "inline-block"
    },
    arrow: {
        float: "right",
        width: "1.5rem",
        height: "1.5rem",
        color: COLOR_BLUE
    }
}));

const TopicCard = (props) => {
    const classes = useStyles(props);

    return (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <STTypography
                color={"secondary"}
                variant={"h4"}
                children={props.children}
                className={classes.text}
            />
            <SvgIcon className={classes.arrow} viewBox={"0 0 16 16"}>
                <path class="cls-1" d="M6.43,2.26A.88.88,0,1,0,5.19,3.49L9,7.25,5.19,11a.88.88,0,1,0,1.24,1.24l4.38-4.38a.87.87,0,0,0,0-1.24Z"/>
            </SvgIcon>
        </Card>
    );
};

export default TopicCard;