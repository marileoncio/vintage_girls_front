import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css';
import axios from 'axios';

const CadastroProfissional = () => {
   
    const [id, setId] = useState<string>("")
    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [salario, setSalario] = useState<string>("");

    const cadastrarProfissional = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            senha: password,
            salario: salario
        }
        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/profissional/store',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(response){
                console.log(response)
                if(response.data.success == true){
                    console.log("Cadastrou")
                    window.location.href = "/listagemProfissional"
                }
                else{
                    console.log(response.data.error);
                }
            }).catch(function(error){
                console.log(error);
            })

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "id") {
            setId(e.target.value);
        }
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value);
        }
        if (e.target.name === "dataNascimento") {
            setDataNascimento(e.target.value);
        }
        if (e.target.name === "cidade") {
            setCidade(e.target.value);
        }
        if (e.target.name === "estado") {
            setEstado(e.target.value);
        }
        if (e.target.name === "pais") {
            setPais(e.target.value);
        }
        if (e.target.name === "rua") {
            setRua(e.target.value);
        }
        if (e.target.name === "numero") {
            setNumero(e.target.value);
        }
        if (e.target.name === "bairro") {
            setBairro(e.target.value);
        }
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
        if (e.target.name === "complemento") {
            setComplemento(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        if (e.target.name === "salario") {
            setSalario(e.target.value);
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
                <h5 className='card-title'>Cadastrar Profissional</h5>
                
                <form onSubmit={cadastrarProfissional} className='row g-3'>
                    <div className='col-6'>
                        <label htmlFor='nome' className='form-label'>Nome</label>
                        <input type='text'
                            name='nome'
                            className='form-control'
                            required
                            onChange={handleState}
            
                        ></input>
                    </div>
                    <div className='col-6'>
                        <label htmlFor='celular' className='form-label'>Celular</label>
                        <input type='text'
                            name='celular'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        
                    </div>
                    <div className='col-6'>
                        <label htmlFor='email' className='form-label'>E-mail</label>
                        <input type='text'
                            name='email'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        
                    </div>

                    <div className='col-6'>
                        <label htmlFor='cpf' className='form-label'>CPF</label>
                        <input type='text'
                            name='cpf'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    
                    </div>

                    <div className='col-6'>
                        <label htmlFor='dataNascimento' className='form-label'>Data de Nascimento</label>
                        <input type='date'
                            name='dataNascimento'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>

                    </div>

                    <div className='col-6'>
                        <label htmlFor='cidade' className='form-label'>Cidade</label>
                        <input type='text'
                            name='cidade'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        
                    </div>

                    <div className='col-6'>
                        <label htmlFor='estado' className='form-label'>Estado</label>
                        <input type='text'
                            name='estado'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        
                    </div>

                    <div className='col-6'>
                        <label htmlFor='pais' className='form-label'>Pais</label>
                        <input type='text'
                            name='pais'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                      
                    </div>

                    <div className='col-6'>
                        <label htmlFor='rua' className='form-label'>Rua</label>
                        <input type='text'
                            name='rua'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                        
                    </div>

                    <div className='col-6'>
                        <label htmlFor='numero' className='form-label'>Numero</label>
                        <input type='text'
                            name='numero'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='bairro' className='form-label'>Bairro</label>
                        <input type='text'
                            name='bairro'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='cep' className='form-label'>Cep</label>
                        <input type='text'
                            name='cep'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='complemento' className='form-label'>Complemento</label>
                        <input type='text'
                            name='complemento'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='password' className='form-label'>Senha</label>
                        <input type='text'
                            name='password'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='salario' className='form-label'>Salario</label>
                        <input type='text'
                            name='salario'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>


                    <div className='col-12'>
                        <button
                            type='submit'
                            className='btn btn-success btn-sm'>Cadastrar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default CadastroProfissional;
