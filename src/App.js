import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import './App.css';
import LoginSignUp from './components/LoginSignUp';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import PostSceen from './components/PostScreen';

function App() {
  return (
    <Router>
      <Route path='/' component={LoginSignUp} exact/>
      <Route path='/login' component={LoginPage} exact />
      <Route path='/signup' component={SignUpPage} exact />
      <Route path='/post' component={PostSceen} exact />
    </Router>
  );
}

export default App;
