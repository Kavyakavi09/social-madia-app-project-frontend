import axios from 'axios';

const url = 'http://localhost:4010/api';

const API = axios.create({ baseURL: url });

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post(`/posts/create`, newPost);

export const updatePost = (id, updatedPost) =>
  API.put(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.put(`/posts/${id}/likePost`);

export const signUp = (formData) => API.post('/user/signup', formData);

export const signIn = (formData) => API.post('/user/signin', formData);
