import React, { Component } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import PasswordRecovery from './Components/PasswordRecovery'
import NewPost from './Components/NewPost'

import Timeline from './Components/Timeline'
import Post from './Components/Post'
import Profile from './Components/Profile'

import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import './css/icomoon/style.css'
import './css/style.scss'

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <h1>
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
        <SignIn />
        <SignUp />
        <PasswordRecovery />
        <NewPost />
        <Timeline />
        <Post />
        <Profile />
        <Footer />
      </main>
    );
  }
}

export default App;
