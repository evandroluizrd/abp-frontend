import { Link } from 'react-router-dom';
import '../layouts/App.css';
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
                to={'/produtos/ver/' + estoque.id} className='Produtos'>

                <img  src={estoque.img} alt={estoque.nome} />
                <strong >{estoque.nome}</strong>
                <small >Ver mais</small>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  