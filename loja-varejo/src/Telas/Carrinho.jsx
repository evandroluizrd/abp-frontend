import React, { useState } from 'react';
import '../layouts/Carrinho.css'

export default function Carrinho () 
{
    // Dados simulados para o carrinho
    const [cartItems, setCartItems] = useState([
      { name: "Produto 1", price: 50 },
      { name: "Produto 2", price: 30 },
    ]);
  
    // Função para remover itens do carrinho
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
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <p>{item.name}</p>
              <p>R${item.price.toFixed(2)}</p>
              <button onClick={() => removeItem(index)}>Remover</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>Total: <span id="cart-total">R${calculateTotal()}</span></p>
          <button id="checkout-button">Finalizar Compra</button>
        </div>
      </div>
    );
  };
  