import { Link } from 'react-router-dom';

import estoque from '../db/estoque.json';
    
export default function Estoque() {
      return (
        <div className="p-6">
          <h2 className="mb-5 text-3xl font-semibold text-gray-800">
            Loja Virtual - Produtos
          </h2>
          <div className="flex flex-wrap gap-6">
            {estoque.map((estoque) => (
              <Link
                to={'/produtos/ver/' + estoque.id}
                className="flex flex-col items-center rounded-lg border border-blue-400 gap-2 p-4 hover:border-red-400"
              >
                <img className="max-w-sm" src={estoque.img} alt={estoque.nome} />
                <strong className="text-2xl mt-3">{estoque.nome}</strong>
                <small className="text-lg">Ver mais</small>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  