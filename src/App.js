import React, { Component } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import PasswordRecovery from './Components/PasswordRecovery'

import Timeline from './Components/Timeline'
import Post from './Components/Post'
import Profile from './Components/Profile'

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <img src={logo} className="App-logo" alt="logo" />

        <SignIn />
        <SignUp />
        <PasswordRecovery />
        <Timeline />
        <Post />
        <Profile />
        <Footer />
      </main>
    );
  }
}

export default App;