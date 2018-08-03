import React,{Component} from 'react'
import logo from './../logo-white.svg'

class Header extends Component{
  render(){
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
								<h1><figure>
									<a href="#"><img src={logo} alt="Photobook" width="140px" /></a></figure>
								</h1>
								<div>
									<a href="#"><span className="icon-plus"></span></a>
									<a href="#"><span className="icon-user"></span>Username</a>
									<a href="#"><span className="icon-exit"></span></a>
								</div>
		      </div>
        </nav>
      </header>
    )
  }

}
export default Header
