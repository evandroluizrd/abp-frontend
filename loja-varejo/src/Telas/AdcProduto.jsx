import React, { useState } from 'react';
import '../layouts/adicionar.css';
const ProdutoFormulario = ({ adicionarProduto }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState();
  const [cores, setCores] = useState('');
  const [tamanhos, setTamanhos] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      id: Math.random(),
      nome,
      descricao,
      preco: parseFloat(preco),
      cores: cores.split(',').map(cor => cor.trim()),
      tamanhos: tamanhos.split(',').map(tamanho => tamanho.trim()),
      imagem,
    };

    adicionarProduto(novoProduto);
  };

  return (


  <div >
    <form className = "caixa"onSubmit={handleSubmit}> Adicione aqui seu produto, faça parte do nosso site:
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Cores (separadas por vírgula)"
        value={cores}
        onChange={(e) => setCores(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tamanhos (separados por vírgula)"
        value={tamanhos}
        onChange={(e) => setTamanhos(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL da Imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        required
      />
      <button type="submit">Adicionar Produto</button>
    </form>
    </div>
  );
};

export default ProdutoFormulario;