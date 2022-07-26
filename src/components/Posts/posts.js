import React from 'react';
import Post from './post/Post';
import useStyles from './Styles';

function Posts() {
  const classes = useStyles();
  return (
    <>
      <div>posts</div>
      <Post />
    </>
  );
}

export default Posts;
