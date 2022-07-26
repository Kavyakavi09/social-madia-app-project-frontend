import axios from 'axios';

const url = 'https://social-media-app-xham.onrender.com/api/';

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

export const fetchPostsByCreator = (name) =>
  API.get(`/posts/creator?name=${name}`);

export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${
      searchQuery.tags
    }`
  );

export const createPost = (newPost) => API.post(`/posts/create`, newPost);

export const likePost = (id) => API.put(`/posts/${id}/likePost`);

export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });

export const updatePost = (id, updatedPost) =>
  API.put(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signUp = (formData) => API.post('/user/signup', formData);

export const signIn = (formData) => API.post('/user/signin', formData);
