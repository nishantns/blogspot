import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import HomeTemplate from "./HomeTemplate";
import Header from "../../organisms/Header/Header";
import { Grid } from "@material-ui/core";
import MenuBar from "../../organisms/MenuBar/MenuBar";
import ArticleList from "../../organisms/ArticleList/ArticleList";
import ExploreTopicSection from "../../organisms/ExploreTopicSection/ExploreTopicSection";
import BlogsSection from "../../organisms/BlogsSection/BlogsSection";
import Footer from "../../organisms/Footer/Footer";

storiesOf("Template/Home")
    .addDecorator(withKnobs)
    .add("Home", () => (
        <HomeTemplate
            header={boolean("Show Header", true) && <Header/>}
            pageContent={boolean("Show Content", true) && (<>
                {/* <MenuBar/> */}
                <ArticleList/>
                <ExploreTopicSection/>
                <BlogsSection/>
            </>)}
            footer={boolean("Show Footer", true) && <Footer/>}
        />
    ))