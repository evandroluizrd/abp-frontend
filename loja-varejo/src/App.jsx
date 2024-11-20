import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import Home from './Telas/Home';
import Camisas from './Telas/Camisas';
import Calcas from './Telas/Calcas';
import Produtos from './Telas/Produtos';
function RootLayout() {
  return (
    <div>
        <header>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/calcas">Calças</Link>
        </li>
        <li>
            <Link to="/camisas">Camisas</Link>
        </li>
        <li>
            <Link to="/Produtos">Produtos</Link>
        </li>
      </ul>
      <Outlet />
      </header>
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