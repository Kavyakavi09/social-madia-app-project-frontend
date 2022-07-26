import React from 'react';
import Post from './post/Post';
import useStyles from './Styles';
import { useSelector } from 'react-redux';

function Posts() {
  const postsData = useSelector((store) => store.posts);
  const classes = useStyles();

  console.log(postsData);
  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
}

export default Posts;
