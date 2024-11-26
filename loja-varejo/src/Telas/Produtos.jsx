import { Link } from 'react-router-dom';
import '../layouts/Produtos.css';
import estoque from '../db/estoque.json';
    
export default function Estoque() {
      return (
        <div >
          <h2 >
            Loja Virtual - Produtos
          </h2>
          <div className='Blocos' >
            {estoque.map((estoque) => (
              <Link
                to={'/produtos/ver/' + estoque.id} className='Produtos'>

                
                <h1 >{estoque.nome}</h1>
                <img src={estoque.imagem} alt={estoque.imagem}/>
                <h2>{estoque.descricao}</h2>
                <h2>{estoque.preco}</h2>
                <small >Ver mais</small>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  