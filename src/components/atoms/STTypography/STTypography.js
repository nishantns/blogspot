import React from "react";
import { Typography } from "@material-ui/core";

const STTypography = (props) => {
    return (
        <Typography
            color={props.color}
            variant={props.variant}
            children={props.children}
            className={props.className}
        />
    );
}

export default STTypography;