import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import Home from './Telas/Home';
import Camisas from './Telas/Camisas';
import Calcas from './Telas/Calcas';
import Produtos from './Telas/Produtos';
import './layouts/App.css';

function RootLayout() {
  return (
    <div>
        <header>
      <ul>
        <li>
            <Link to="/"className="link">Home</Link>
        </li>
        <li>
            <Link to="/calcas"className="link">Calças</Link>
        </li>
        <li>
            <Link to="/camisas"className="link">Camisas</Link>
        </li>
        <li>
            <Link to="/Produtos"className="link">Produtos</Link>
        </li>
      </ul>
      
      </header>
      <Outlet/>
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
      { path: '/calcas', element: <Calcas /> },
      { path: '/camisas', element: <Camisas /> },
      { path: '/produtos', element: <Produtos />},
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}