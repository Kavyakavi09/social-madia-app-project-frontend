import './App.css';
import { Container } from '@material-ui/core';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_Auth_Google_ID}`}>
      <BrowserRouter>
        <Container maxWidth={'xl'}>
          <Navbar />
          <Switch>
            <Route
              path='/'
              exact
              component={() => <Redirect to={'/posts'} />}
            />
            <Route path={'/posts'} exact component={Home} />
            <Route path={'/posts/search'} exact component={Home} />
            <Route path={'/posts/:id'} exact component={PostDetails} />
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
