import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import HomeTemplate from './components/templates/HomeTemplate/HomeTemplate';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import MenuBar from './components/organisms/MenuBar/MenuBar';
import ArticleList from './components/organisms/ArticleList/ArticleList';
import ExploreTopicSection from './components/organisms/ExploreTopicSection/ExploreTopicSection';
import BlogsSection from './components/organisms/BlogsSection/BlogsSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <HomeTemplate
            header={<Header/>}
            pageContent={<>
                {/* <MenuBar/> */}
                <ArticleList/>
                <ExploreTopicSection/>
                <BlogsSection/>
            </>}
            footer={<Footer/>}
        />
    </ThemeProvider>
  );
}

export default App;
