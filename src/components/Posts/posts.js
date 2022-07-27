import React from 'react';
import Post from './post/Post';
import useStyles from './Styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

function Posts({ setCurrentId }) {
  const postData = useSelector((store) => store.posts);
  const classes = useStyles();

  return !postData.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}>
      {postData.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
