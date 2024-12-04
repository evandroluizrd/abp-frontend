import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import Home from './Telas/Home';
import Carrinho from './Telas/Carrinho';
import Produtos from './Telas/Produtos';
import ProdutosVer from './Telas/ProdutosVer';
import './layouts/App.css';

function RootLayout() {
  return (
    <div >
        <header>
      <ul>
        <li>
            <Link to="/"className="link">Home</Link>
        </li>
        <li>
            <Link to="/Produtos"className="link">Produtos</Link>
        </li>
        <li>
            <Link to="/Carrinho"className="link">Carrinho</Link>
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos />},
      {path: '/carrinho', element: <Carrinho/>},
      { path: '/produtos/ver/:id', element: <ProdutosVer /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}