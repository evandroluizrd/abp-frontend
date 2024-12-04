import { Link } from 'react-router-dom';
import '../layouts/Produtos.css';
import estoque from '../db/estoque.json';
    
export default function Estoque() {
      return (
        <div >
         



          <div className='Blocos' >
            {estoque.map((estoque) => (
              <Link
                to={'/produtos/ver/' + estoque.id} className='Produtos'>

                
                <h1 >{estoque.nome}</h1>
                <img src={estoque.imagem} alt={estoque.imagem}/>
                <h2>{estoque.descricao}</h2>
                <h2 className='Preco'> R${estoque.preco.toFixed (2)}</h2>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  