import React, { useState } from 'react';
import '../layouts/Carrinho.css';

export default function Carrinho() {

  const products = [
    { name: "Camiseta branca", price: 49.90 },
    { name: "Calça jeans", price: 129.90 },
    { name: "Tênis esportivo", price: 199.90 },
    { name: "Regata básica", price: 29.90 },
    { name: "Camiseta estampada", price: 69.90 },
    { name: "Regata estampada", price: 49.90 },
    { name: "Biquíni", price: 59.99 },
    { name: "Sunga", price: 59.99 },
    { name: "Short de praia masculino", price: 59.99 },
    { name: "Short de praia feminino", price: 59.99 },
    { name: "Short de praia masculino estampado", price: 79.99 },
    { name: "Camisa manga longa masculina", price: 69.99 },
    { name: "Camisa manga longa feminina", price: 74.99 },
  ];


  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  
  const addItem = () => {
    if (selectedProduct) {
      const product = products.find(p => p.name === selectedProduct);
      if (product) {
        setCartItems([...cartItems, product]);
      }
    } else {
      alert('Por favor, selecione um produto.');
    }
  };

  // Função para remover um item do carrinho
  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Calcula o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <h1>Carrinho de Compras</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio. Selecione um produto para adicionar!</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <p>{item.name}</p>
              <p>R${item.price.toFixed(2)}</p>
              <button onClick={() => removeItem(index)}>Remover</button>
            </div>
          ))
        )}
      </div>

      
      <div className="add-product">
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">Selecione um produto</option>
          {products.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        <button onClick={addItem}>Adicionar Produto</button>
      </div>

      <div className="cart-summary">
        <p>Total: <span id="cart-total">R${calculateTotal()}</span></p>
        <button id="checkout-button">Finalizar Compra</button>
      </div>
    </div>
  );
}
