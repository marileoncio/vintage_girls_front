import React from "react";

import { BrowserRouter,Route, Routes } from "react-router-dom"
import CadastroCliente from "../components/cadastroCliente";
import Listagem from "../components/listagens";
import CadastroServico from "../components/cadastroServico";
import CadastroProfissional from "../components/cadastroProfissionais";
import ListagemServico from "../components/listagensServico";
import ListagemProfissional from "../components/listagensProfissionais";
import EditarCliente from "../components/editarCliente";
import EditarProfissional from "../components/editarProfissionais";
import EditarServico from "../components/editarServicos";
import AgendaListagem from "../components/agendaListagem";
import EditarAgenda from "../components/editarAgenda";
import EditarSenhaCliente from "../components/editarSenhaCliente";


const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>

        <Route path="cadastro" element={<CadastroCliente/>}/>
        <Route path="listagem" element={<Listagem/>}/>
        <Route path="editarCliente/:id" element={<EditarCliente/>}/>
       


        <Route path="listagemServico" element={<ListagemServico/>}/>
        <Route path="cadastroServico" element={<CadastroServico/>} />
        <Route path="editarServico/:id" element={<EditarServico/>} />

        <Route path="cadastroProfissional" element={<CadastroProfissional/>} />
        <Route path="listagemProfissional" element={<ListagemProfissional/>}/>
        <Route path="editarProfissional/:id" element={<EditarProfissional/>}/>
        
       
        <Route path="listagem/agenda" element={<AgendaListagem/>}/>
        <Route path="editar/agenda/:id" element={<EditarAgenda/>}/>

        <Route path="recuperar/senha" element={<EditarSenhaCliente/>}/>
        

       

            

           
          
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter