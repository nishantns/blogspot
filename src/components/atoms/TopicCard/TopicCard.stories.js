import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import TopicCard from "./TopicCard";
import { theme } from "../../../theme";

storiesOf("Atoms/Topic Card")
    .addDecorator(withKnobs)
    .add("Topic Card", () => (
        <TopicCard
            borderColor={theme.palette.primary.main}
        >
            Customer Retention
        </TopicCard>
    ));