import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import STTypography from "./STTypography";

storiesOf("Atoms/STTypography")
    .addDecorator(withKnobs)
    .add("h1", () => (
        <STTypography
            color={"secondary"}
            variant={"h1"}
            children={text("Text", "How to Write a Blog Post")}
        />
    ))
    .add("h2", () => (
        <STTypography
            color={"secondary"}
            variant={"h1"}
            children={text("Text", "Most Popular")}
        />
    ))
    .add("subtitle1", () => (
        <STTypography
            color={"secondary"}
            variant={"subtitle1"}
            children={text("Text", "How to Create a Sales Plan: Template + Examples")}
        />
    ))
    .add("subtitle2", () => (
        <STTypography
            color={"secondary"}
            variant={"subtitle2"}
            children={text("Text", "SALES | 13 MIN READ")}
        />
    ))
    .add("body1", () => (
        <STTypography
            color={"secondary"}
            variant={"body1"}
            children={text("Text", "We are committed to your privacy.")}
        />
    ))