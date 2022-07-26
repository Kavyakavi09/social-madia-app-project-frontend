import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';

function App() {
  return (
    <Container maxWidth={'lg'}>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Social Media App
        </Typography>
        <img src={memories} alt='memories' height={'60'} />
      </AppBar>
    </Container>
  );
}

export default App;
