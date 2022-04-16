import React, { Component } from 'react';
import "../../estilos/estilos.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: "",
        senha: ""
    }

    this.login = this.login.bind(this);
  }


  login(){

    const auth = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((userCredential) => {
        const user = userCredential.user;

          window.location.href='/Principal'

        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if(errorMessage == 'There is no user record corresponding to this identifier. The user may have been deleted.' ||
         errorMessage == 'Firebase: Error (auth/user-not-found).' || 
         errorMessage == 'Firebase: Error (auth/invalid-email).') {
          alert('Usuário não cadastrado.')
        }
    })
  }

  render(){
      return(
          <div>
              <h1>Sistema</h1>
              <input type="text" placeholder="Email" onChange={(e) => this.setState({email : e.target.value})}/><br/>
              <input type="text" placeholder="Senha" onChange={(e) => this.setState({password : e.target.value})}/><br/>
              {/* <Link to="/Principal"><button onClick={this.login}>Login</button></Link> */}
              <button onClick={this.login}>Login</button>
          </div>
      )
  }
 

}

export default Login;