import axios from 'axios';

const url = 'http://localhost:4003/api/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(`${url}/create`, newPost);

export const updatePost = (id, updatedPost) =>
  axios.put(`${url}/${id}`, updatedPost);
