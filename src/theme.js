import { createMuiTheme } from "@material-ui/core/styles/";

export const COLOR_PRIMARY = "#FF7A59";
export const COLOR_PRIMARY_LIGHT = "#FFBCAC";
export const COLOR_SECONDARY = "#33475B";
export const COLOR_BLUE = "#00A4BD";
export const COLOR_BUTTON_GREY = "#EAF0F6";
export const COLOR_HEADER_GREY = "#F5F8FA";
export const COLOR_TEXT_BUTTON_GREY = "#CBD6E2";
export const COLOR_TEXT_BUTTON_BLUE = "#7FD1DE";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: COLOR_PRIMARY,
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: COLOR_SECONDARY,
            contrastText: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: ["AvenirNext","Helvetica Neue", "Helvetica", "Arial,sans-serif"].join(","),
        h1: {
            fontSize: "2rem",
            lineHeight: "1.3125em",
            fontWeight: 500
        },
        h2: {
            fontSize: "1.777rem",
            fontWeight: 300,
            lineHeight: "1.41667rem"
        },
        h3: {
            fontSize: "0.9rem",
            letterSpacing: "0.025rem",
            lineHeight: "1.41667em",
            fontWeight: 500
        },
        h4: {
            fontSize: "1em",
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "0.8125rem",
            lineHeight: "1.3125em",
            fontWeight: 500
        },
        subtitle2: {
            fontSize: "0.75rem",
            fontWeight: 600
        },
        body1: {
            fontSize: "0.888rem",
            lineHeight: "1.5em",
            fontWeight: 500
        },
        body2: {
            fontSize: "0.8125rem",
            lineHeight: "1.61111em"
        },
        button: {
            fontSize: "0.8125rem",
            fontWeight: 500,
            textTransform: "none"
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: "#FFFFFF",
                color: COLOR_SECONDARY,
                '&:hover': {
                    backgroundColor: COLOR_BUTTON_GREY,
                }
            },
            containedPrimary: {
                '&:hover': {
                    backgroundColor: COLOR_PRIMARY_LIGHT,
                }
            }
        }
    }
})