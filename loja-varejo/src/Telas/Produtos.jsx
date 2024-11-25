import { Link } from 'react-router-dom';

import estoque from '../db/estoque.json';
    
export default function Estoque() {
      return (
        <div >
          <h2 >
            Loja Virtual - Produtos
          </h2>
          <div >
            {estoque.map((estoque) => (
              <Link
                to={'/produtos/ver/' + estoque.id}>

                <img  src={estoque.img} alt={estoque.nome} />
                <strong >{estoque.nome}</strong>
                <small >Ver mais</small>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  