import axios from "axios";

export const getBlogs = async () => {
    return await axios.get(`${process.env.REACT_APP_SERVICE_URL}/blogs`);
}

export const getTopics = async () => {
    return await axios.get(`${process.env.REACT_APP_SERVICE_URL}/topics`);
}

export const getArticles = async () => {
    return await axios.get(`${process.env.REACT_APP_SERVICE_URL}/articles`);
}