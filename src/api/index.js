import axios from 'axios';

const url = 'http://localhost:4003/api/posts';

export const fetchPosts = () => axios.get(url);
