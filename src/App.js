import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/post';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './Styles';
import { useState } from 'react';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth={'lg'}>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography
          className={`${classes.heading} ${classes.mainHeading}`}
          variant='h3'
          align='center'>
          Posty Fire
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='50'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}
            className={classes.mainContainer}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
