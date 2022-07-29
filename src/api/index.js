import axios from 'axios';

const url = 'http://localhost:4010/api/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(`${url}/create`, newPost);

export const updatePost = (id, updatedPost) =>
  axios.put(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.put(`${url}/${id}/likePost`);
