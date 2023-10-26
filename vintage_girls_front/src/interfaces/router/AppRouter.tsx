import React from "react";

import { BrowserRouter,Route, Routes } from "react-router-dom"
import CadastroCliente from "../../components/cadastroCliente";
import Listagem from "../../components/listagens";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>

        <Route path="cadastro" element={<CadastroCliente/>}/>
        <Route path="listagem" element={<Listagem/>}/>
          
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter