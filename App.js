import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/index"
import Empresa from "./pages/empresa"
import Equipe from "./pages/equipe"
import Produtos from "./pages/produtos"
import Servicos from "./pages/servicos"
import Contato from "./pages/contato"
import Endereco from "./pages/endereco"

import WhatsappBtn from './components/commons/whatsapp-btn/WhatsappBtn'

import HeaderMain from "./components/commons/header/HeaderMain"

function App(){
    return(
        <div>
            <header>
            <HeaderMain/>
            </header>
            <WhatsappBtn/>
            
        </div>

        



    )
}

export default App