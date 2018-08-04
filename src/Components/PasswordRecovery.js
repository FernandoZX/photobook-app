import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class PasswordRecovery extends Component{
  constructor(){
    super();
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.email)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <section>
          <form className="form" onSubmit={this.handleSubmit}>
            <h2>Recuperar clave</h2>
          <div className="form-group">  
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
              onChange={this.handleChange}
               />
          </div>
          <div className="form-group">  
          <button
              type="submit"
              className="btn btn-success btn-block"
              >Enviar</button>
          </div>
          <p className="row">
            <span className="col">
              <Link to="/">Regresar</Link>
            </span>   
          </p>
          </form>

      </section>
    )
  }

}
export default PasswordRecovery
