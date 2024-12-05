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
      <h2 >
        {produto.nome}
      </h2>
      <div className='Imagem' >
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <div >
        R$ {produto.preco.toFixed(2)}
      </div>
      <div >
      <Link to={'/carrinho'}>
                Adicionar ao carrinho
             </Link>

             <p/>
             
        <Link to="/produtos">
          ← Voltar
        </Link>
      </div>
    </div>
  );
}
