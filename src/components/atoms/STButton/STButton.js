import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    
});

const STButton = (props) => {
    const classes = useStyles();
    return (
        <Button
            color={props.color}
            variant={props.variant}
            children={props.content}
            className={props.className}
            style={props.style}
            disableElevation={props.disableElevation}
            fullWidth={props.fullWidth}
            disableRipple
        />
    );
}

export default STButton;