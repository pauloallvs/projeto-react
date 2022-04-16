import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';


import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Principal from './paginas/Principal';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Cadastro/>} />
                <Route exact={true} path="/Login" element={<Login/>} />
                <Route exact={true} path="/Principal" element={<Principal/>} /> 
                {/* <Route exact={true} path="*" element={<NotFound/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

