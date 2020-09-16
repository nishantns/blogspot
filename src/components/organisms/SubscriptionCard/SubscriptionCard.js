import React from "react";
import { Card, makeStyles, Grid } from "@material-ui/core";
import STTypography from "../../atoms/STTypography/STTypography";
import STCheckbox from "../../atoms/STCheckbox/STCheckbox";
import STTextField from "../../atoms/STTextField/STTextField";
import STButton from "../../atoms/STButton/STButton";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "linear-gradient(45deg, #f2545b, #ff7a59)",
        color: "#FFF",
        height: "100%"
    },
    headerContainer: {
        padding: "1rem"
    },
    header: {
        fontSize: "1.40625rem",
        textAlign: "center",
        paddingBottom: "1rem",
        borderBottom: "2px solid #fff"
    },
    checkboxContainer: {
        marginTop: "2rem",
        marginBottom: "1rem"
    },
    textContainer: {
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    link: {
        textDecoration: "underline",
        cursor: "pointer",
        fontWeight: 600
    },
    buttonContainer: {
        textAlign: "center"
    },
    button: {
        fontWeight: 600,
        fontSize: "0.9375rem"
    },
    horizontalHeader: {
        fontWeight: 700
    },
    horizontalSubheader: {
        fontWeight: 400,
        fontSize: "1.125rem"
    },
    horizontalButtonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    }
}));

const SubscriptionCard = (props) => {
    const classes = useStyles();

    const labels = ["Marketing", "Sales", "Service", "Website"];

    const verticalCard = (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <Grid container className={classes.headerContainer}>
                <Grid item xs={12}>
                    <STTypography
                        variant={"h3"}
                        children={"Subscribe via Email"}
                        className={classes.header}
                    />
                </Grid>
                <Grid item container xs={12} className={classes.checkboxContainer}>
                    {labels.map((label) => {
                        return (
                            <Grid item xs={6}>
                                <STCheckbox
                                    label={label}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item xs={12}>
                    <STTextField
                        label={"Email Address"}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} className={classes.textContainer}>
                    <STTypography variant={"body2"}>
                        {"We're committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our "}
                        {<span className={classes.link} onClick={() => (window.open("https://legal.hubspot.com/privacy-policy"))}>privacy policy.</span>}
                    </STTypography>
                </Grid>
                <Grid item xs={12} className={classes.buttonContainer}>
                    <STButton
                        variant="contained"
                        content={"Subscribe"}
                        className={classes.button}
                        disableElevation
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Card>
    );

    const horizontalCard = (
        <Card
            classes={{
                root: classes.root
            }}
        >
            <Grid item container style={{padding: "3rem 3rem 3rem 3rem"}}>
                <Grid item container xs={4}>
                    <Grid item xs={12}>
                        <STTypography
                            variant={"h1"}
                            children={"Subscribe to Our Blog"}
                            className={classes.horizontalHeader}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <STTypography
                            variant={"body2"}
                            children={"Stay up to date with the latest marketing, sales, and service tips and news."}
                            className={classes.horizontalSubheader}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={8}>
                    <Grid item xs={12}>
                        <STTypography
                            variant={"h3"}
                            children={"I want the latest in..."}
                            className={classes.button}
                        />
                    </Grid>
                    <Grid item container xs={12}>
                        {labels.map((label) => {
                            return (
                                <Grid item xs={6}>
                                    <STCheckbox
                                        label={label}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid item container xs={12} spacing={4}>
                        <Grid item xs={8}>
                            <STTextField
                                label={"Email Address"}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4} className={classes.horizontalButtonContainer}>
                            <STButton
                                variant="contained"
                                content={"Subscribe"}
                                className={classes.button}
                                disableElevation
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.textContainer}>
                        <STTypography variant={"body2"}>
                            {"We're committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our "}
                            {<span className={classes.link} onClick={() => (window.open("https://legal.hubspot.com/privacy-policy"))}>privacy policy.</span>}
                        </STTypography>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );

    switch (props.variant) {
        case "vertical":
            return verticalCard;
        case "horizontal":
            return horizontalCard;
        default:
            return <></>;
    }
};

export default SubscriptionCard;