import axios from "axios";

const API = axios.create({ baseURL: "https://yt-forum.herokuapp.com" });
// const url = "https://yt-forum.herokuapp.com/posts";

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
