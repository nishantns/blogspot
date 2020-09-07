import React from "react";
import { makeStyles, Grid, SvgIcon } from "@material-ui/core";
import STTypography from "../../atoms/STTypography/STTypography";
import TextButton from "../../atoms/TextButton/TextButton";
import STButton from "../../atoms/STButton/STButton";
import GreyLogo from "../../../images/hubspot-grey.png";
import { COLOR_TEXT_BUTTON_GREY } from "../../../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: "#FFF",
        paddingTop: "5.75rem"
    },
    navCategory: {
        fontSize: "1.125rem",
        lineHeight: "1.4444em",
        fontWeight: 700
    },
    textButton: {
        padding: "0.5rem 1rem"
    },
    languageContainer: {
        padding: "2rem 0",
        borderBottom: "1px solid #7c98b6"
    },
    footer: {
        padding: "2rem 0"
    },
    copyrightText: {
        fontSize: "0.875rem",
        lineHeight: "1.64286em",
        fontWeight: 400,
        color: COLOR_TEXT_BUTTON_GREY
    }
}));

const Footer = (props) => {
    const classes = useStyles();

    const navigation = [
        {
            label: "Increase Your Traffic",
            values: [
                "Ad Software",
                "Blog Software",
                "SEO Software",
                "Social Media Software",
                "Content Management System"
            ]
        },
        {
            label: "Connect With Leads",
            values: [
                "Find new Prospects",
                "Email Tracking",
                "Sales Email Templates",
                "Click to Call Your Leads",
                "Email Marketing"
            ]
        },
        {
            label: "Close and Manage Leads",
            values: [
                "Document Tracking Tool",
                "Meeting Schedule Tool",
                "Sales Automation Tool",
                "Lead Management Tool",
                "Pipeline Management Tool"
            ]
        },
        {
            label: "Support and Tools",
            values: [
                "HubSpot Partners",
                "Join a Local User Group",
                "PieSync Integrations",
                "HubSpot Templates",
                "Free Tools & Generators"
            ]
        }
    ];

    const languages = [
        "English",
        "Deutsch",
        "日本語",
        "Español",
        "Português",
        "Français"
    ]

    return (
        <Grid container justify={"center"} className={classes.root}>
            <Grid item container xs={8}>
                {navigation.map((entry) => {
                    return (
                        <Grid item container xs={3}>
                            <Grid item xs={12}>
                                <STTypography
                                    variant={"h2"}
                                    children={entry.label}
                                    className={classes.navCategory}
                                />
                            </Grid>
                            {entry.values.map((link) => {
                                return (
                                    <Grid item xs={12}>
                                        <TextButton
                                            variant={"grey"}
                                            content={link}
                                            fontSize={"0.875rem"}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    );
                })}
                <Grid item xs={9}/>
                <Grid item xs={3}>
                    <STButton
                        variant={"contained"}
                        content={"Contact HubSpot Support"}
                        disableElevation
                    />
                </Grid>
                <Grid item container xs={12} justify={"center"} className={classes.languageContainer}>
                    {languages.map((language) => {
                        return (
                            <Grid item>
                                <TextButton
                                    variant={"grey"}
                                    content={language}
                                    fontSize={"18px"}
                                    className={classes.textButton}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item container xs={12} justify={"space-between"} className={classes.footer}>
                    <Grid item container xs={6}>
                        <Grid item xs={12}>
                            <img src={GreyLogo}/>
                        </Grid>
                        <Grid item xs={12}>
                            <STTypography
                                children={"Copyright © 2020 HubSpot, Inc."}
                                className={classes.copyrightText}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} justify={"flex-end"}>
                        <Grid item>
                            <TextButton
                                variant={"grey"}
                                content="Legal Stuff"
                                fontSize={"18px"}
                                className={classes.textButton}
                            />
                        </Grid>
                        <Grid item>
                            <TextButton
                                variant={"grey"}
                                content="Privacy Policy"
                                fontSize={"18px"}
                                className={classes.textButton}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;