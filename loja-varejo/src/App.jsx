import {
    createBrowserRouter,
    RouterProvider
   } from "react-router-dom";

const router = createBrowserRouter([
    {
    path: '/',
    element: <Home />,
    },
   ]);
   export function App() {
    return <RouterProvider router={router} />;
   }

function app(){
return(
    <div className="">
        <h1> Bem vindo a loja varejo</h1>
        <p> Feito por...</p>
    </div>
)
}
export default app