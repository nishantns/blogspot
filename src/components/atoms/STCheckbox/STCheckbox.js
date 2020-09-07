import React from "react";
import clsx from "clsx";
import { Checkbox, makeStyles, FormControlLabel } from "@material-ui/core";
import { theme } from "../../../theme";

const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#FFFFFF',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      }
    },
    checkedIcon: {
      backgroundColor: theme.palette.primary.light,
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      }
    },
    label: {
        lineHeight: "unset"
    }
  });

const STCheckbox = (props) => {
    const classes = useStyles();

    return (
        <FormControlLabel
            classes={{
                label: classes.label
            }}
            control={
                <Checkbox
                    disableRipple
                    className={classes.root}
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                    checked={props.checked}
                    onChange={props.onChange}
                />
            }
            label={props.label}
        />
    );
};

export default STCheckbox;