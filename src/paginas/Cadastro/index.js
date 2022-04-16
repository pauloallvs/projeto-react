import React, { Component } from 'react';
import "../../estilos/estilos.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {auth} from '../../firebase';


class Cadastro extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            password: "",
            data_nascimento: ""
        }

        // this.gravar = this.gravar.bind(this);

        this.register = this.register.bind(this);
    }


    register() {

        try {
            const user = firebase.auth().createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            ).then(data => {
                const uid = data.user.uid;

                const users = firebase.firestore().collection("usuario");
                users.doc(uid).set({
                    nome: this.state.nome,
                    sobrenome: this.state.sobrenome,
                    email: this.state.email,
                    dataNascimento: this.state.data_nascimento,
                    uid: uid
                });

                alert("Conta criada com sucesso!")
            })

        } catch (error) {
            if(error.message == 'auth/email-already-in-use'){
                alert("Esse E-mail já está em uso por outro usuário.")
            }else {
                alert(error.message);
            }
            console.log(error);
        }

    };

    // gravar() {

    //     firebase.firestore().collection("usuario").add({
    //         nome: this.state.nome,
    //         sobrenome: this.state.sobrenome,
    //         email: this.state.email,
    //         dataNascimento: this.state.data_nascimento,
    //         uid: auth.currentUser.uid
    //     });

    // }


    render() {
        return (
            <div className="App">
                <div>
                    <h1>Efetuar cadastro</h1>
                    <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} /><br />
                    <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} /><br />
                    <input type="date" placeholder="Data de nascimento" onChange={(e) => this.setState({ data_nascimento: e.target.value })} /><br />
                    <input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <input type="text" placeholder="Senha" onChange={(e) => this.setState({ password: e.target.value })} /><br />
                    <button onClick={this.register}>Cadastrar</button><br />
                    <h1>ou</h1>
                    <Link to="/Login"><button>Fazer login</button></Link>

                </div>
            </div>
        );
    }
}


export default Cadastro;
