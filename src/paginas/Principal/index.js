import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import "../../estilos/estilos.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import auth from '../../firebase';




class Principal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: "",
      nome: "",
      sobrenome: "",
      email: "",
      dataNascimento: "",
      dados: []
    }

    this.listar = this.listar.bind(this);
    
    this.listar();

  }


  listar() {

    const users = firebase.firestore().collection("usuario");

    users.get().then((retorno) => {
        this.state.dados = [];
        var state = this.state;
        retorno.forEach((item) => {
            state.dados.push({
                nome: item.data().nome,
                sobrenome: item.data().sobrenome,
                email: item.data().email,
                dataNascimento: item.data().dataNascimento,
                id: item.data().uid
            });
        });

        console.log(this.state.dados)
        this.setState(state);
    })
}

  render() {
    return (
      <div>
        <h1> Usuário(s) cadastrado(s):</h1>{
          this.state.dados.map( item => {
            console.log(item)
            return (
              <div>
                <span class="campo">Nome:</span> <span>{item.nome}</span><br/>
                <span class="campo">Sobrenome:</span> <span>{item.sobrenome}</span><br/>
                <span class="campo">Data de nascimento:</span> <span>{item.dataNascimento}</span><br/><br/>               
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Principal;