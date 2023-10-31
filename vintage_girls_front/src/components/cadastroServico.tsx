import axios from 'axios';
import React, {Component, UseState, ChangeEvent, FormEvent, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';

const CadastroCliente = () => {
    const [nome, setNome] = UseState<string>("")
    const [descricao, setDescricao] = UseState<string>("")
    const [duracao, setDuracao] = UseState<intenger>("")
    const [preco, setPreco] = UseState<decimal>("")

    const CadastroServico = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            nome: nome,
            descricao: descricao,
            duracao: duracao,
            preco: preco,

        }
        console.log (dados)
        axios.post('http://127.0.0.1:8000/api/servico/store',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(response){
                console.log(response.data)
                window.location.href = "/listagensServico"
            }).catch(function(error){
                console.log(error);
                console.log(dados);
            });
    }  
    
    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "descricao") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "duracao") {
            setDuracao(e.target.value);
        }
        if (e.target.name === "preco") {
            setPreco(e.target.value);
        }   
    }
    
   }









