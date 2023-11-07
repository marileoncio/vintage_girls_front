import React from "react";

import { BrowserRouter,Route, Routes } from "react-router-dom"
import CadastroCliente from "../components/cadastroCliente";
import Listagem from "../components/listagens";
import CadastroServico from "../components/cadastroServico";
import CadastroProfissional from "../components/cadastroProfissionais";
import ListagemServico from "../components/listagensServico";
import ListagemProfissional from "../components/listagensProfissionais";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>

        <Route path="cadastro" element={<CadastroCliente/>}/>
        <Route path="listagem" element={<Listagem/>}/>

        <Route path="listagemServico" element={<ListagemServico/>}/>
        <Route path="cadastroServico" element={<CadastroServico/>} />

        <Route path="cadastroProfissional" element={<CadastroProfissional/>} />
        <Route path="listagemProfissional" element={<ListagemProfissional/>}/>
          
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter