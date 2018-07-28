import React,{Component} from 'react'

class SignIn extends Component{
  render(){
    return (
      <section>
       <form>
         <h2>Ingreso</h2>
         <input 
           type="email" 
           name="email" 
           placeholder="Email"/>
        <input 
           type="password" 
           name="password" 
           placeholder="Password"/>
        <button>Enviar</button>
       </form>
      </section>
    )
  }

}
export default SignIn
