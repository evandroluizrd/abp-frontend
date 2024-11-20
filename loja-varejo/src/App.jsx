import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import Home from './Telas/Home';
import Camisas from './Telas/Camisas';
import Calcas from './Telas/Calcas';

function RootLayout() {
  return (
    <div>
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
      </ul>
      <Outlet />
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}