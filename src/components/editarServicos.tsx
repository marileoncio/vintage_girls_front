import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const EditarServico = () => {
    const [id, setId] = useState<number>();
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");


    const parametro = useParams();

    const atualizar = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            descricao: descricao,
            duracao: duracao,
            preco: preco,
           
        }

        axios.put('http://127.0.0.1:8000/api/servico/update',
        dados,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            window.location.href = "/ListagemServico"
        }).catch(function (error) {
            console.log(error);
        });

        Swal.fire({
            title: "Atualizado com sucesso!",
            text: "Novo cliente atualizado!",
            icon: "success"
          });
}

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/servico/find/" + parametro.id);
                setId(response.data.data.id);
                setNome(response.data.data.nome);
                setDescricao(response.data.data.descricao);
                setDuracao(response.data.data.duracao);
                setPreco(response.data.data.preco);
                console.log(response)


            } catch (error) {
                console.log("erro ao buscar dados de api")
                console.log(error)
            }
        }


        fetchData();
    }, []);

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

    return (
        <div>
            <Header />
            <main className={styles.main}>

                <div className='container'></div>
                <div className='card'> </div>
                <div className='card-body'> </div>
                <br />
                <h5 className='card-title'>Editar Serviço</h5>
                <form onSubmit={atualizar} className='row g-3'>
                    <div className='col-6'>
                        <label htmlFor='nome' className='form-label'>Nome</label>
                        <input type='text'
                            name='nome'
                            className='form-control'
                            required
                            onChange={handleState}
                            value={nome}

                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='descricao' className='form-label'>Descricao</label>
                        <input type='text'
                            name='descricao'
                            className='form-control'
                            required
                            onChange={handleState}
                            value={descricao}
                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='duracao' className='form-label'>Duracao</label>
                        <input type='text'
                            name='duracao'
                            className='form-control'
                            required
                            onChange={handleState}
                            value={duracao}
                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='preco' className='form-label'>Preco</label>
                        <input type='text'
                            name='preco'
                            className='form-control'
                            required
                            onChange={handleState}
                            value={preco}
                        ></input>
                    </div>

                    <div className='col-12'>
                        <button
                            type='submit'
                            className='btn btn-success btn-sm'>Atualizar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default EditarServico;