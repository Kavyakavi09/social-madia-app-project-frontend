import React from 'react';
import Post from './post/Post';
import useStyles from './Styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector((store) => store.posts);
  const classes = useStyles();

  if (!posts?.length && !isLoading) return 'No posts found';

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}>
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
