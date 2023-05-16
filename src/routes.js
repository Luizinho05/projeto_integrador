import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Cadastro from './pages/Cadastro'
import Home from './pages/Inicio'
import Produtos from './pages/Produtos'
import Conforto from './home/RoupasCf'
import Estetica from './home/RoupasEt'
import Login from './pages/Login'
import Footer from './components/Footer'
import Informações from './home/informações'

export default function Rotas(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/informações' element={ <Informações /> } />
            <Route path='/Conforto' element={ <Conforto /> }/>
            <Route path='/Estetica' element={ <Estetica /> }/>
            <Route path='/Produtos' element={ <Produtos /> }/>
            <Route path='/Cadastro' element={ <Cadastro /> }/>
            <Route path='/Login' element={ <Login /> }/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}