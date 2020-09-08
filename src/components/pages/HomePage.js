import React, { useEffect, useState } from "react";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import Header from "../organisms/Header/Header";
import ArticleList from "../organisms/ArticleList/ArticleList";
import MenuBar from "../organisms/MenuBar/MenuBar";
import ExploreTopicSection from "../organisms/ExploreTopicSection/ExploreTopicSection";
import BlogsSection from "../organisms/BlogsSection/BlogsSection";
import Footer from "../organisms/Footer/Footer";
import { getBlogs, getTopics, getArticles } from "../../api/api";

const HomePage = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [blogMap, setBlogMap] = useState({});
    const [topics, setTopics] = useState([]);
    const [topicMap, setTopicMap] = useState({});
    const [articles, setArticles] = useState([]);
    const [featuredArticles, setFeaturedArticles] = useState([]);
    const [editorPicks, setEditorPicks] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    const [regularArticles, setRegularArticles] =useState([]);

    useEffect(() => {
        getBlogs()
        .then((response) => {
            let blogs = response.data;
            let blogMap = {};
            blogs.forEach((blog) => {
                blogMap[blog.id] = blog.name;
            });
            setBlogs(blogs);
            setBlogMap(blogMap);
        })
        .catch((error) => {
            console.log(error);
        });

        getTopics()
        .then((response) => {
            let topics = response.data;
            let topicMap = {};
            topics.forEach((topic) => {
                topicMap[topic.id] = topic.name;
            });
            setTopics(topics);
            setTopicMap(topicMap);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        if (Object.keys(blogMap).length > 0 && Object.keys(topicMap).length > 0) {
            getArticles()
            .then((response) => {
                let articles = response.data;
                articles.forEach((article) => {
                    article["topic"] = topicMap[article.topicId];
                    article["blog"] = blogMap[article.blogId]
                });

                setArticles(articles);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [blogMap, topicMap]);

    useEffect(() => {
        if (articles.length > 0) {
            let featuredArticles = articles.filter((article) => article.featured);
            setFeaturedArticles(featuredArticles);

            let editorPicks = articles.filter((article) => article.editorPick);
            setEditorPicks(editorPicks);

            let mostPopular = articles.filter((article) => !(article.editorPick || article.featured))
                .sort((a, b) => {
                    return b.score - a.score;
                }).slice(0, 3);
            setMostPopular(mostPopular);

            let regularArticles = articles.filter((article) => !(featuredArticles.includes(article) || editorPicks.includes(article) || mostPopular.includes(article)));
            setRegularArticles(regularArticles);
        }
    }, [articles]);

    return (
        <HomeTemplate
            header={<Header/>}
            pageContent={<>
                {/* <MenuBar/> */}
                <ArticleList
                    featuredArticles={featuredArticles}
                    editorPicks={editorPicks}
                    mostPopular={mostPopular}
                    regularArticles={regularArticles}
                />
                <ExploreTopicSection
                    topics={topics}
                />
                <BlogsSection
                    blogs={blogs}
                />
            </>}
            footer={<Footer/>}
        />
    );
};

export default HomePage;