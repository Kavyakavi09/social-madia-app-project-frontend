import axios from 'axios';

const url = 'http://localhost:4010/api';

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post(`/posts/create`, newPost);

export const updatePost = (id, updatedPost) =>
  API.put(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.put(`/posts/${id}/likePost`);

export const signUp = (formData) => API.post('/user/signup', formData);

export const signIn = (formData) => API.post('/user/signin', formData);
