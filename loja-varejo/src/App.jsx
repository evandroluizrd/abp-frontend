import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { LoginProvider, LoginContext } from './db/LoginContext';
import Home from './Telas/Home';
import Carrinho from './Telas/Carrinho';
import ProdutoFormulario from './Telas/AdcProduto';
import Produtos from './Telas/Produtos';
import ProdutosVer from './Telas/ProdutosVer';
import Login from './Telas/Login';
import './layouts/App.css';
import { useContext } from 'react';

function RootLayout() {
  return (
    <div >
        <header>
      <ul>
        <li>
            <Link to="/"className="link">Home</Link>
        </li>
        <li>
            <Link to="/produtos"className="link">Produtos</Link>
        </li>
        <li>
            <Link to="/carrinho"className="link">Carrinho</Link>
        </li>
        <li className='adcp'>
          <Link to="/seuproduto"className='link'>Seu Produto</Link>
        </li>
      </ul>
      
      </header>
      <main>
      <Outlet/>
      </main>
      <footer>
        Todos os Direitos Reservados
      </footer>
    </div>
    
  );
}

const internalRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos />},
      {path: '/carrinho', element: <Carrinho/>},
      { path: '/produtos/ver/:id', element: <ProdutosVer /> },
      { path: '/seuproduto', element: <ProdutoFormulario/>}
    ],
  },
]);

const externalRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  }


]);

function WebRouter() {
  const {UserData} = useContext(LoginContext);

  return <RouterProvider router={!UserData ? externalRouter : internalRouter}/>;
}

export default function App() {
  return(
    <LoginProvider>
      <WebRouter/>
    </LoginProvider>
  )
}