import { Link, useParams } from 'react-router-dom';
import '../layouts/ProdutosVer.css'
import produtos from '../db/estoque.json';

export default function ProdutosVer() {
  let { id } = useParams();

  const produto = produtos.find((produto) => produto.id == id);

  if (!produto) {
    return null;
  }

  return (
    <div className='Tudo' >
      <div className='Quadrado'>
      <h2 className='Nome' >
        {produto.nome}
      </h2>
      <div className='Imagem' >
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      </div>
      <div className='Descricao'>

      <h2>{produto.descricao}</h2>
      <h2>Tamanhos:</h2>
      <h3>{produto.tamanhos.join(',')}</h3>
      <h2>Cores Disponíveis:</h2>
      <h3>{produto.cores.join(', ')}</h3>
      <h2 >
        R$ {produto.preco.toFixed(2)}
      </h2>
      
      
      <div className='Botao' >
      <Link className='Carrinho' to={'/carrinho'}>
                Adicionar ao carrinho
             </Link>

             <p/>
             
        <Link className='Voltar' to="/produtos">
          ← Voltar
        </Link>
        </div>
      </div>
    </div>
  );
}
